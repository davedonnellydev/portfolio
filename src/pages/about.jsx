import React, { useEffect } from "react";
import { Helmet } from "react-helmet";

import NavBar from "../components/common/navBar";
import Footer from "../components/common/footer";
import Logo from "../components/common/logo";
import Socials from "../components/about/socials";

import INFO from "../data/user";
import SEO from "../data/seo";

import "./styles/about.css";

const About = () => {
	useEffect(() => {
		window.scrollTo(0, 0);
	}, []);

	const currentSEO = SEO.find((item) => item.page === "about");

	return (
		<React.Fragment>
			<Helmet>
				<title>{`About | ${INFO.main.title}`}</title>
				<meta name="description" content={currentSEO.description} />
				<meta
					name="keywords"
					content={currentSEO.keywords.join(", ")}
				/>
			</Helmet>

			<div className="page-content">
				<NavBar active="about" />
				<main className="content-wrapper">
					<div className="about-logo-container">
						<div className="about-logo">
							<Logo width={46} />
						</div>
					</div>

					<div className="about-container">
						<div className="about-main">
							<div className="about-right-side">
								<h1 className="title about-title">About</h1>

								<div className="subtitle about-subtitle">
									<p>
										Hi! I'm Dave, a frontend developer who
										has taken a bit of a non-traditional
										route into tech. For over 15 years, I
										worked in higher education — handling
										highly complex systems, working across
										multiple teams and stakeholders, and
										helping major projects come to life.
										I've led rollouts, worked with vendors,
										wrangled messy data, and made sure the
										tech side actually worked for the people
										using it.
									</p>
									<p>
										But over time, I found myself more and
										more drawn to coding — so I retrained
										through General Assembly and got stuck
										into HTML, CSS, JavaScript, React, and
										Git. Now I'm focused on building clean,
										accessible web apps that are easy to use
										and maintain. I enjoy figuring things
										out, improving workflows, and building
										interfaces that feel intuitive.
									</p>
									<p>
										I bring solid problem-solving skills, a
										collaborative mindset, and years of
										experience translating business needs
										into working systems. Outside of coding,
										you'll find me at the theatre, planning
										my next trip, or enjoying a glass of
										wine on the couch with my husband, Tyson
										and 3 year old spoodle, Alfie.
									</p>
								</div>
							</div>

							<aside className="about-left-side">
								<div className="about-image-container">
									<div className="about-image-wrapper">
										<img
											src="dave-about.jpg"
											alt="about"
											className="about-image"
										/>
									</div>
								</div>

								<div className="about-socials">
									<Socials />
								</div>
							</aside>
						</div>
						<div className="about-socials-mobile">
							<Socials />
						</div>
					</div>
				</main>
				<Footer />
			</div>
		</React.Fragment>
	);
};

export default About;
