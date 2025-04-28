import React, { useEffect, useState } from "react";

import { Octokit } from "@octokit/core";

// import { Base64 } from 'js-base64';

import Project from "./project";

const apiKey = process.env.REACT_APP_API_KEY;

const languages = [
    {
      language: "c",
      properName: "C",
      url: "https://cdn.jsdelivr.net/npm/programming-languages-logos/src/c/c.png"
    },
    {
      language: "cpp",
      properName: "C++",
      url: "https://cdn.jsdelivr.net/npm/programming-languages-logos/src/cpp/cpp.png"
    },
    {
      language: "csharp",
      properName: "C#",
      url: "https://cdn.jsdelivr.net/npm/programming-languages-logos/src/csharp/csharp.png"
    },
    {
      language: "css",
      properName: "CSS",
      url: "https://cdn.jsdelivr.net/npm/programming-languages-logos/src/css/css.png"
    },
    {
      language: "go-old",
      properName: "Go (Old)",
      url: "https://cdn.jsdelivr.net/npm/programming-languages-logos/src/go-old/go-old.png"
    },
    {
      language: "go",
      properName: "Go",
      url: "https://cdn.jsdelivr.net/npm/programming-languages-logos/src/go/go.png"
    },
    {
      language: "haskell",
      properName: "Haskell",
      url: "https://cdn.jsdelivr.net/npm/programming-languages-logos/src/haskell/haskell.png"
    },
    {
      language: "html",
      properName: "HTML",
      url: "https://cdn.jsdelivr.net/npm/programming-languages-logos/src/html/html.png"
    },
    {
      language: "java",
      properName: "Java",
      url: "https://cdn.jsdelivr.net/npm/programming-languages-logos/src/java/java.png"
    },
    {
      language: "javascript",
      properName: "JavaScript",
      url: "https://cdn.jsdelivr.net/npm/programming-languages-logos/src/javascript/javascript.png"
    },
    {
      language: "kotlin",
      properName: "Kotlin",
      url: "https://cdn.jsdelivr.net/npm/programming-languages-logos/src/kotlin/kotlin.png"
    },
    {
      language: "lua",
      properName: "Lua",
      url: "https://cdn.jsdelivr.net/npm/programming-languages-logos/src/lua/lua.png"
    },
    {
      language: "php",
      properName: "PHP",
      url: "https://cdn.jsdelivr.net/npm/programming-languages-logos/src/php/php.png"
    },
    {
      language: "python",
      properName: "Python",
      url: "https://cdn.jsdelivr.net/npm/programming-languages-logos/src/python/python.png"
    },
    {
      language: "r",
      properName: "R",
      url: "https://cdn.jsdelivr.net/npm/programming-languages-logos/src/r/r.png"
    },
    {
      language: "ruby",
      properName: "Ruby",
      url: "https://cdn.jsdelivr.net/npm/programming-languages-logos/src/ruby/ruby.png"
    },
    {
      language: "swift",
      properName: "Swift",
      url: "https://cdn.jsdelivr.net/npm/programming-languages-logos/src/swift/swift.png"
    },
    {
      language: "typescript",
      properName: "TypeScript",
      url: "https://cdn.jsdelivr.net/npm/programming-languages-logos/src/typescript/typescript.png"
    }
  ];

const ProjectList = ({ topic }) => {
	const [projects, setProjects] = useState([]);
	const [isLoading, setIsLoading] = useState(false);
	const [error, setError] = useState(null);

	function getFirstHeading(markdown) {
		const headingRegex = /^(#+)\s+(.+)/m;
		const match = markdown.match(headingRegex);

		if (match) {
			const headingLevel = match[1].length;
			const headingText = match[2].trim();
			return { level: headingLevel, text: headingText };
		}
		return null;
	}

	useEffect(() => {
		const arrayOfProjects = [];
		const fetchProjects = async () => {
			const octokit = new Octokit({
				auth: apiKey,
			});

			setIsLoading(true);

			try {
				const githubData = await octokit.request(
					"GET /users/davedonnellydev/repos",
					{
						username: "davedonnellydev",
						headers: {
							"X-GitHub-Api-Version": "2022-11-28",
						},
					}
				);

				console.log(githubData);

				for (let i = 0; i < githubData.data.length; i++) {
					if (githubData.data[i].topics.includes(topic)) {
						let firstHeading = null;
						try {
							const readmeData = await octokit.request(
								`GET /repos/davedonnellydev/${githubData.data[i].name}/readme`,
								{
									owner: "davedonnellydev",
									repo: `${githubData.data[i].name}`,
									headers: {
										"X-GitHub-Api-Version": "2022-11-28",
									},
								}
							);

							const { Base64 } = require("js-base64");
							const contents = Base64.decode(
								readmeData.data.content
							);

							firstHeading = getFirstHeading(contents);
						} catch (error) {
							firstHeading = null;
						}

                        let languageURL

                        const languageMatch = languages.find((language) => language.properName === githubData.data[i].language)
						languageMatch ? languageURL = languageMatch.url : languageURL = null;

						const repo = {
							title: firstHeading
								? firstHeading.text
								: githubData.data[i].name,
							description: githubData.data[i].description,
							logo: languageURL ? languageURL : "https://cdn.jsdelivr.net/npm/programming-languages-logos/src/html/html.png",
							linkText: "Go to Github repo",
							link: githubData.data[i].html_url,
                            createdDate: githubData.data[i].created_at,
                            updatedDate: githubData.data[i].updated_at

						};
						arrayOfProjects.push(repo);
					}
				}
				setProjects(arrayOfProjects);
			} catch (error) {
				setError(error);
			} finally {
				setIsLoading(false);
			}
		};
		fetchProjects();
	}, [topic]);

	let loadingMessage = null;

	if (isLoading) {
		loadingMessage = <p>Loading...</p>;
	}

	if (error) {
		return (
			<div className="all-projects-container">
				<p>API request error. Please refresh.</p>
			</div>
		);
	} else {
		return (
			<div className="all-projects-container">
				{projects.length ? (
					projects.map((project, index) => (
						<div className="all-projects-project" key={index}>
							{loadingMessage}
							<Project
								logo={project.logo}
								title={project.title}
								description={project.description}
								linkText={project.linkText}
								link={project.link}
							/>
						</div>
					))
				) : (
					<p>No projects to display at the moment.</p>
				)}
			</div>
		);
	}
};

export default ProjectList;
