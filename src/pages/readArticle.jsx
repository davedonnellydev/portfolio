import React, { useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { Helmet } from "react-helmet";
import styled from "styled-components";

import { faCircleArrowLeft } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import NavBar from "../components/common/navBar";
import Footer from "../components/common/footer";
import Logo from "../components/common/logo";
import Notfound from "./404";

import INFO from "../data/user";
import myArticles from "../data/articles";

import "./styles/readArticle.css";

let ArticleStyle = styled.div``;

const ReadArticle = () => {
	const navigate = useNavigate();
	let { slug } = useParams();

	const today = new Date();

	const visibleArticles = myArticles.filter(
		(article) => article().date <= today && article().published === true
	);

	const articleArray = visibleArticles.filter(
		(article) => article().articleNumber.toString() === slug
	);
	const article = articleArray[0];

	useEffect(() => {
		window.scrollTo(0, 0);
	}, [article]);

	if (article === undefined) {
		return <Notfound />;
	}

	ArticleStyle = styled.div`
		${article().style}
	`;

	return (
		<React.Fragment>
			<Helmet>
				<title>{`${article().title} | ${INFO.main.title}`}</title>
				<meta name="description" content={article().description} />
				<meta name="keywords" content={article().keywords.join(", ")} />
			</Helmet>

			<div className="page-content">
				<NavBar />

				<main className="content-wrapper">
					<div className="read-article-logo-container">
						<div className="read-article-logo">
							<Logo width={46} />
						</div>
					</div>

					<div className="read-article-container">
						<div className="read-article-back">
							<FontAwesomeIcon
								icon={faCircleArrowLeft}
								size="2xl"
								alt="back"
								className="read-article-back-button"
								onClick={() => navigate(-1)}
							/>
						</div>

						<div className="read-article-wrapper">
							<div className="read-article-date-container">
								<div className="read-article-date">
									{article().date.toLocaleDateString(
										"en-AU",
										{
											year: "numeric",
											month: "long",
											day: "numeric",
										}
									)}
								</div>
							</div>

							<h1 className="title read-article-title">
								{article().title}
							</h1>

							<div className="read-article-body">
								<ArticleStyle>{article().body}</ArticleStyle>
							</div>
						</div>
					</div>
				</main>
				<Footer />
			</div>
		</React.Fragment>
	);
};

export default ReadArticle;
