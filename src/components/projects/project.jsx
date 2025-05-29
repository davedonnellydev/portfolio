import React from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLink } from "@fortawesome/free-solid-svg-icons";

import "./styles/project.css";

const Project = (props) => {
	const { logo, title, description, linkText, link, createdDate, updatedDate } = props;

	return (
		<React.Fragment>
			<div className="project">
				<Link to={link} target="_blank" rel="noopener noreferrer">
					<div className="project-container">
						<div className="project-logo">
							<img src={logo} alt="logo" />
						</div>
						<h3 className="project-title">{title}</h3>
						<div className="project-date">{`Created: ${createdDate.toLocaleDateString(
							"en-AU",
							{
								year: "numeric",
								month: "long",
								day: "numeric",
							}
						)}`}</div>
						<div className="project-date">{`Updated: ${updatedDate.toLocaleDateString(
							"en-AU",
							{
								year: "numeric",
								month: "long",
								day: "numeric",
							}
						)}`}</div>
						<div className="project-description">{description}</div>
						<div className="project-link">
							<div className="project-link-icon">
								<FontAwesomeIcon icon={faLink} />
							</div>

							<div className="project-link-text">{linkText}</div>
						</div>
					</div>
				</Link>
			</div>
		</React.Fragment>
	);
};

export default Project;
