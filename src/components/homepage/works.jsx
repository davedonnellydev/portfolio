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
							<div className="work-title">UNSW - Registrar & Student Services</div>
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
							<div className="work-title">City, University of London - IT</div>
							<div className="work-subtitle">
								Technical Analyst/Developer
							</div>
							<div className="work-duration">2019 - 2021</div>
						</div>

                        <div className="work">
							<img
								src="./cityuni.png"
								alt="city uni logo"
								className="work-image"
							/>
							<div className="work-title">City, University of London - Journalism Dept.</div>
							<div className="work-subtitle">
								Course Officer - BA Journalism
							</div>
							<div className="work-duration">2016 - 2019</div>
						</div>

                        <div className="work">
							<img
								src="./unsw.jpeg"
								alt="unsw logo"
								className="work-image"
							/>
							<div className="work-title">UNSW - School of Arts & Media</div>
							<div className="work-subtitle">
								Administrative Assistant
							</div>
							<div className="work-duration">2011 - 2016</div>
						</div>

					</div>
				}
			/>
		</div>
	);
};

export default Works;
