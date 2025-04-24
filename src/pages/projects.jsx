import React, { useEffect } from "react";
import { Helmet } from "react-helmet";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronUp } from "@fortawesome/free-solid-svg-icons";

import NavBar from "../components/common/navBar";
import Footer from "../components/common/footer";
import Logo from "../components/common/logo";
import AllProjects from "../components/projects/allProjects";
import AllScrimba from "../components/projects/allScrimba";
import AllGeneralAssembly from "../components/projects/allGeneralAssembly";

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
								Below is a look at some of the things I've been
								building on my own lately. These projects show
								where I'm at with my frontend skills — from
								interactive apps and small tools to full
								websites. I've included a mix of personal
								projects and course-related projects, with a few
								in-progress bits too. Each one chosen to show
								how I think, how I code, and what I've been
								learning - and each one taught me something new.
								More in the works!
							</p>
							<p>
								<a href="#recent-projects">Recent Projects</a>
							</p>
							<p>
								<a href="#general-assembly-projects">
									General Assembly's Software Engineering
									Immersive
								</a>
							</p>
							<p>
								<a href="#scrimba-projects">
									Scrimba's Frontend Developer Career Path
								</a>
							</p>
						</div>
						<div className="projects-section" id="recent-projects">
							<h2 className="secondary-title">Recent projects</h2>
							<div className="projects-list">
								<AllProjects />
							</div>
						</div>
						<div
							className="projects-section"
							id="general-assembly-projects"
						>
							<h2 className="secondary-title">
								General Assembly's Software Engineering
								Immersive
							</h2>
							<p className="subtitle projects-subtitle">
								<a
									href="https://generalassemb.ly/"
									target="_blank"
									rel="noreferrer"
								>
									https://generalassemb.ly/
								</a>
								<br />
								Back in 2022, I completed the Software
								Engineering Immersive at General Assembly — a
								fast-paced, part-time course that gave me a
								solid foundation in web development. It covered
								everything from front-end fundamentals to
								full-stack app development using JavaScript,
								React, Node.js, and more. It was an intense five
								months of building projects, collaborating with
								other learners, and getting hands-on experience
								with real-world tools and workflows. The
								projects below came out of that course and
								marked the beginning of my formal training in
								web development.The course was split into four
								terms, each with a project outcome:
								<ul>
									<li>
										Term 1: Frontend with HTML, CSS &
										Javascript
									</li>
									<li>Term 2: Backend with Python</li>
									<li>Term 3: Fullstack using Node.js</li>
									<li>Term 4: Modern webapps with React</li>
								</ul>
								<a href="#top">
									Top{" "}
									<FontAwesomeIcon
										style={{ fontSize: "10px" }}
										icon={faChevronUp}
									/>
								</a>
							</p>
							<div className="projects-list">
								<AllGeneralAssembly />
							</div>
						</div>
						<div className="projects-section" id="scrimba-projects">
							<h2 className="secondary-title">
								Scrimba's Frontend Developer Career Path
							</h2>
							<p className="subtitle projects-subtitle">
								<a
									href="https://scrimba.com/frontend-path-c0j"
									target="_blank"
									rel="noreferrer"
								>
									https://scrimba.com/frontend-path-c0j
								</a>
								<br />
								It's been a couple of years since I completed
								the GA Software Engineering Immersive, so I
								wanted a structured way to refresh my frontend
								skills and make sure I was up to date with the
								latest practices. That's what led me to the
								Frontend Developer Career Path at Scrimba. It's
								a super practical, project-based course that's
								been great for reinforcing my knowledge of HTML,
								CSS, JavaScript, and React. The projects below
								were built as part of the course, and it's been
								a really useful way to rebuild muscle memory and
								sharpen my skills while balancing a full-time
								job.
								<br />
								<a href="#top">
									Top{" "}
									<FontAwesomeIcon
										style={{ fontSize: "10px" }}
										icon={faChevronUp}
									/>
								</a>
							</p>
							<div className="projects-list">
								<AllScrimba />
							</div>
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
