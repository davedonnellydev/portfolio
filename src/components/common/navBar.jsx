import React, { useState } from "react";
import { Link } from "react-router-dom";
import {
	faFileArrowDown,
	faBars,
	faXmark,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import INFO from "../../data/user";

import "./styles/navBar.css";

const NavBar = (props) => {
	const { active } = props;
	const [menuOpen, setMenuOpen] = useState(false);

	const toggleMenu = () => {
		setMenuOpen(!menuOpen);
		console.log(menuOpen);
	};

	return (
		<React.Fragment>
			<nav className="nav-container">
				<div className="navbar">
					<ul className="nav-list">
						<li
							className={
								active === "home"
									? "nav-item active"
									: "nav-item"
							}
						>
							<Link to="/">Home</Link>
						</li>
						<li
							className={
								active === "about"
									? "nav-item active"
									: "nav-item"
							}
						>
							<Link to="/about">About</Link>
						</li>
						<li
							className={
								active === "projects"
									? "nav-item active"
									: "nav-item"
							}
						>
							<Link to="/projects">Projects</Link>
						</li>
						<li
							className={
								active === "articles"
									? "nav-item active"
									: "nav-item"
							}
						>
							<Link to="/articles">Blog</Link>
						</li>
						<li
							className={
								active === "contact"
									? "nav-item active"
									: "nav-item"
							}
						>
							<Link to="/contact">Contact</Link>
						</li>
						<li className="download-icon nav-item">
							<a
								href={INFO.main.cv}
								target="_blank"
								rel="noopener noreferrer"
								title="Download CV"
								download
							>
								Download CV{" "}
								<FontAwesomeIcon icon={faFileArrowDown} />
							</a>
						</li>
					</ul>
				</div>
			</nav>
			<div className="menu-icon" onClick={toggleMenu}>
				<FontAwesomeIcon icon={faBars} />
			</div>
			<div className="menu-close" onClick={toggleMenu}>
				<FontAwesomeIcon icon={faXmark} />
			</div>

			<style jsx>{`
				@media (max-width: 600px) {
					.nav-list {
						display: ${menuOpen ? "flex" : "none"};
						flex-direction: column;
					}

					.menu-icon {
						display: ${menuOpen ? "none" : "block"};
					}

					.menu-close {
						display: ${menuOpen ? "block" : "none"};
					}
				}
			`}</style>
		</React.Fragment>
	);
};

export default NavBar;
