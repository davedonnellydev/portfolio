import React, { useEffect } from "react";
import { Helmet } from "react-helmet";

import NavBar from "../components/common/navBar";
import Footer from "../components/common/footer";
import Logo from "../components/common/logo";
import Socials from "../components/about/socials";

import INFO from "../data/user";
import SEO from "../data/seo";

import "./styles/contact.css";

const Contact = () => {
	useEffect(() => {
		window.scrollTo(0, 0);
	}, []);

	const currentSEO = SEO.find((item) => item.page === "contact");

	return (
		<React.Fragment>
			<Helmet>
				<title>{`Contact | ${INFO.main.title}`}</title>
				<meta name="description" content={currentSEO.description} />
				<meta
					name="keywords"
					content={currentSEO.keywords.join(", ")}
				/>
			</Helmet>

			<div className="page-content">
				<NavBar active="contact" />
				<main className="content-wrapper">
					<div className="contact-logo-container">
						<div className="contact-logo">
							<Logo width={46} />
						</div>
					</div>

					<div className="contact-container">
						<h1 className="title contact-title">Contact</h1>

						<div className="subtitle contact-subtitle">
							<p>
								Keen to chat? Whether you've got a role in mind,
								want to collaborate, or just want to connect,
								feel free to reach out. You can email me at{" "}
								<a href={`mailto:${INFO.main.email}`}>
									{INFO.main.email}
								</a>{" "}
								or get in touch via LinkedIn. Always happy to
								chat — especially if there's coffee involved.
							</p>
						</div>
					</div>

					<div className="socials-container">
						<div className="contact-socials">
							<Socials />
						</div>
					</div>
				</main>
				<Footer />
			</div>
		</React.Fragment>
	);
};

export default Contact;
