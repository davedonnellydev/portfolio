import React, { useEffect } from "react";
import { Helmet } from "react-helmet";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronRight } from "@fortawesome/free-solid-svg-icons";

import NavBar from "../components/common/navBar";
import Footer from "../components/common/footer";
import Logo from "../components/common/logo";
import AllProjects from "../components/projects/allProjects";

import INFO from "../data/user";
import SEO from "../data/seo";

import "./styles/projects.css";

const Projects = () => {
	useEffect(() => {
		window.scrollTo(0, 0);
	}, []);

	const currentSEO = SEO.find((item) => item.page === "projects");

	return (
		<React.Fragment>
			<Helmet>
				<title>{`Projects | ${INFO.main.title}`}</title>
				<meta name="description" content={currentSEO.description} />
				<meta
					name="keywords"
					content={currentSEO.keywords.join(", ")}
				/>
			</Helmet>

			<div className="page-content">
				<NavBar active="projects" />
				<div className="content-wrapper">
					<div className="projects-logo-container">
						<div className="projects-logo">
							<Logo width={46} />
						</div>
					</div>
					<div className="projects-container">
						<div className="title projects-title">Projects</div>

						<div className="subtitle projects-subtitle">
							<p>
								For a list of all the projects I've built specifically as part of the courses I've completed, please head to {" "}
							<a
								className="projects-page-link"
								href="/course-projects"
							>
								Course projects{" "}
								<FontAwesomeIcon
									style={{ fontSize: "10px" }}
									icon={faChevronRight}
								/>
							</a>{" "}
                            </p>
						</div>

						<div className="subtitle projects-subtitle">
							<p>
								Otherwise, below is a look at some of the things I've been
								building on my own lately. These projects show where I'm
								at with my frontend skills — from interactive
								apps and small tools to full websites. I've
								included a mix of personal projects and code
								challenges, with a few in-progress bits too.
								Each one chosen to show how I think, how I code,
								and what I've been learning - and each one
								taught me something new. More in the works!
							</p>
						</div>

						<div className="projects-list">
							<AllProjects />
						</div>
					</div>
					<div className="page-footer">
						<Footer />
					</div>
				</div>
			</div>
		</React.Fragment>
	);
};

export default Projects;
