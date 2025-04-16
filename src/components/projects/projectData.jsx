import React, { useEffect, useState } from "react";

import { Octokit } from "@octokit/core";

import Project from "./project";

const apiKey = process.env.REACT_APP_API_KEY;

const ProjectList = ({ topic }) => {
	const [projects, setProjects] = useState([]);
	const [isLoading, setIsLoading] = useState(false);
	const [error, setError] = useState(null);

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

				for (let i = 0; i < githubData.data.length; i++) {
					if (
						githubData.data[i].topics.includes(
							topic
						)
					) {
						const repo = {
							title: githubData.data[i].name,
							description: githubData.data[i].description,
							logo: "https://cdn.jsdelivr.net/npm/programming-languages-logos/src/javascript/javascript.png",
							linkText: "Go to Github repo",
							link: githubData.data[i].svn_url,
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

    let loadingMessage = null

    if (isLoading) {
        loadingMessage = (<p>Loading...</p>)
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
				) : <p>No projects to display at the moment.</p>}
			</div>
		);
	}
};

export default ProjectList;
