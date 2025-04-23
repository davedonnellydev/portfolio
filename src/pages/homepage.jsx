import React, { useState, useEffect } from "react";
import { Helmet } from "react-helmet";

import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
	faGithub,
	faLinkedin,
	faInstagram,
	faBluesky,
} from "@fortawesome/free-brands-svg-icons";

import Logo from "../components/common/logo";
import Footer from "../components/common/footer";
import NavBar from "../components/common/navBar";
import Article from "../components/homepage/article";
import Works from "../components/homepage/works";
import AllProjects from "../components/projects/allProjects";

import INFO from "../data/user";
import SEO from "../data/seo";
import myArticles from "../data/articles";

import "./styles/homepage.css";

const Homepage = () => {
	const [stayLogo, setStayLogo] = useState(false);
	const [logoSize, setLogoSize] = useState(80);
	const [oldLogoSize, setOldLogoSize] = useState(80);

	useEffect(() => {
		window.scrollTo(0, 0);
	}, []);

	useEffect(() => {
		const handleScroll = () => {
			let scroll = Math.round(window.pageYOffset, 2);

			let newLogoSize = 80 - (scroll * 4) / 10;

			if (newLogoSize < oldLogoSize) {
				if (newLogoSize > 40) {
					setLogoSize(newLogoSize);
					setOldLogoSize(newLogoSize);
					setStayLogo(false);
				} else {
					setStayLogo(true);
				}
			} else {
				setLogoSize(newLogoSize);
				setStayLogo(false);
			}
		};

		window.addEventListener("scroll", handleScroll);
		return () => window.removeEventListener("scroll", handleScroll);
	}, [logoSize, oldLogoSize]);

	const currentSEO = SEO.find((item) => item.page === "home");

	const logoStyle = {
		display: "flex",
		position: stayLogo ? "fixed" : "relative",
		top: stayLogo ? "3vh" : "auto",
		zIndex: 999,
		border: stayLogo ? "1px solid white" : "none",
		borderRadius: stayLogo ? "50%" : "none",
		boxShadow: stayLogo ? "0px 4px 10px rgba(0, 0, 0, 0.25)" : "none",
	};

	const today = new Date();
	const twoWeeksAgo = new Date();
	twoWeeksAgo.setDate(today.getDate() - 14);

	const recentPublishedArticles = myArticles
		.filter(
			(article) =>
				article().date <= today &&
				article().date > twoWeeksAgo &&
				article().published === true
		)
		.reverse();

	const allPublishedArticles = myArticles
		.filter(
			(article) => article().date <= today && article().published === true
		)
		.reverse();

	if (recentPublishedArticles.length === 0) {
		recentPublishedArticles.push(allPublishedArticles[0]);
	}

	return (
		<React.Fragment>
			<Helmet>
				<title>{INFO.main.title}</title>
				<meta name="description" content={currentSEO.description} />
				<meta
					name="keywords"
					content={currentSEO.keywords.join(", ")}
				/>
			</Helmet>

			<div className="page-content">
				<NavBar active="home" />
				<div className="content-wrapper">
					<div className="homepage-logo-container">
						<div style={logoStyle}>
							<Logo width={logoSize} link={false} />
						</div>
					</div>

					<div className="homepage-container">
						<div className="homepage-first-area">
							<div className="homepage-first-area-left-side">
								<div className="title homepage-title">
									<span>Dave Donnelly:</span>
								</div>

								<div className="title homepage-title">
									<span>frontend web developer</span>
								</div>

								<div className="subtitle homepage-subtitle">
									<span>
										Hey, I'm Dave — a frontend web developer
										based in Sydney. After years working in
										the university sector, mainly in systems
										and project teams, I've made the switch
										to building things on the web. When I
										grow up, I want to be the kind of dev
										that writes clean code, designs
										intuitive apps, and solves real problems
										with smart, simple solutions. Connect
										with me below!
									</span>
								</div>
							</div>

							<div className="homepage-first-area-right-side">
								<div className="homepage-image-container">
									<div className="homepage-image-wrapper">
										<img
											src="homepage.jpg"
											alt="about"
											className="homepage-image"
										/>
									</div>
								</div>
							</div>
						</div>

						<div className="homepage-socials">
							<a
								href={INFO.socials.bluesky}
								target="_blank"
								rel="noopener noreferrer"
								title="Bluesky"
							>
								<FontAwesomeIcon
									icon={faBluesky}
									className="homepage-social-icon"
								/>
							</a>
							<a
								href={INFO.socials.github}
								target="_blank"
								rel="noopener noreferrer"
								title="GitHub"
							>
								<FontAwesomeIcon
									icon={faGithub}
									className="homepage-social-icon"
								/>
							</a>
							<a
								href={INFO.socials.linkedin}
								target="_blank"
								rel="noopener noreferrer"
								title="LinkedIn"
							>
								<FontAwesomeIcon
									icon={faLinkedin}
									className="homepage-social-icon"
								/>
							</a>
							<a
								href={INFO.socials.instagram}
								target="_blank"
								rel="noopener noreferrer"
								title="Instagram"
							>
								<FontAwesomeIcon
									icon={faInstagram}
									className="homepage-social-icon"
								/>
							</a>
							<a
								href={`mailto:${INFO.main.email}`}
								target="_blank"
								rel="noopener noreferrer"
								title="Email"
							>
								<FontAwesomeIcon
									icon={faEnvelope}
									className="homepage-social-icon"
								/>
							</a>
						</div>

						<div className="homepage-projects">
							<AllProjects />
						</div>

						<div className="homepage-after-title">
							<div className="homepage-articles">
								{recentPublishedArticles.map((article, key) => (
									<div className="homepage-article" key={key}>
										<Article
											key={article().articleNumber.toString()}
											date={article().date.toLocaleDateString(
												"en-AU",
												{
													year: "numeric",
													month: "long",
													day: "numeric",
												}
											)}
											title={article().title}
											description={article().description}
											link={
												"/article/" +
												article().articleNumber
											}
										/>
									</div>
								))}
								<div className="all-articles-link homepage-article-link">
									<a href="/articles">More articles...</a>
								</div>
							</div>

							<div className="homepage-works">
								<Works />
							</div>
						</div>

						<div className="page-footer">
							<Footer />
						</div>
					</div>
				</div>
			</div>
		</React.Fragment>
	);
};

export default Homepage;
