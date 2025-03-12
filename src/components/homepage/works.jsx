import React from "react";
import { faBriefcase } from "@fortawesome/free-solid-svg-icons";

import Card from "../common/card";

import "./styles/works.css";

const Works = () => {
	return (
		<div className="works">
			<Card
				icon={faBriefcase}
				title="Work"
				body={
					<div className="works-body">
						<div className="work">
							<img
								src="./unsw.jpeg"
								alt="unsw logo"
								className="work-image"
							/>
							<div className="work-title">UNSW</div>
							<div className="work-subtitle">
								Senior Business Consultant
							</div>
							<div className="work-duration">2021 - Present</div>
						</div>

						<div className="work">
							<img
								src="./cityuni.png"
								alt="city uni logo"
								className="work-image"
							/>
							<div className="work-title">City, University of London</div>
							<div className="work-subtitle">
								Technical Analyst/Developer
							</div>
							<div className="work-duration">2019 - 2021</div>
						</div>
					</div>
				}
			/>
		</div>
	);
};

export default Works;
