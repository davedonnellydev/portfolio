import { Octokit } from "@octokit/core";

import React from "react";

import Project from "./project";

import "./styles/allProjects.css";

const apiKey = process.env.REACT_APP_API_KEY;

const SCRIMBA = {
    projects: []
}

async function getRepoList() {

    const octokit = new Octokit({
        auth: apiKey,
      });

    const apiList = await octokit.request('GET /users/davedonnellydev/repos', {
        username: 'davedonnellydev',
        headers: {
          'X-GitHub-Api-Version': '2022-11-28'
        }
      })

    for (let i = 0; i < apiList.data.length; i++) {
        if(apiList.data[i].topics.includes("scrimba")) {
            const repo = {
                "title": apiList.data[i].name,
                "description": apiList.data[i].description,
                "logo": "https://cdn.jsdelivr.net/npm/programming-languages-logos/src/javascript/javascript.png",
                "linkText": "Go to Github repo",
                "link": apiList.data[i].svn_url
            }
            SCRIMBA.projects.push(repo)
        }
    }
}

getRepoList();

const AllScrimba = () => {
	return (
		<div className="all-projects-container">
			{SCRIMBA.projects.map((project, index) => (
				<div className="all-projects-project" key={index}>
					<Project
						logo={project.logo}
						title={project.title}
						description={project.description}
						linkText={project.linkText}
						link={project.link}
					/>
				</div>
			))}
		</div>
	);
};

export default AllScrimba;
