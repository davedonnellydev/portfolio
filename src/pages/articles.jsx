import React, { useEffect } from "react";
import { Helmet } from "react-helmet";

import NavBar from "../components/common/navBar";
import Footer from "../components/common/footer";
import Logo from "../components/common/logo";
import Article from "../components/articles/article";

import INFO from "../data/user";
import SEO from "../data/seo";
import myArticles from "../data/articles";

import "./styles/articles.css";

const Articles = () => {
	useEffect(() => {
		window.scrollTo(0, 0);
	}, []);

	const currentSEO = SEO.find((item) => item.page === "articles");

	const today = new Date();

	const visibleArticles = myArticles
		.filter(
			(article) => article().date <= today && article().published === true
		)
		.reverse();

	return (
		<React.Fragment>
			<Helmet>
				<title>{`Articles | ${INFO.main.title}`}</title>
				<meta name="description" content={currentSEO.description} />
				<meta
					name="keywords"
					content={currentSEO.keywords.join(", ")}
				/>
			</Helmet>

			<div className="page-content">
				<NavBar active="articles" />
				<main className="content-wrapper">
					<div className="articles-logo-container">
						<div className="articles-logo">
							<Logo width={46} />
						</div>
					</div>

					<div className="articles-main-container">
						<h1 className="title articles-title">Blog</h1>

						<div className="subtitle articles-subtitle">
							<p>
								This is where I share things I've learned,
								challenges I've tackled, and tips I'd give my
								past self. Some posts are quick dev notes,
								others dive into projects or frontend concepts
								I've been exploring. If you're curious about how
								I work or think through problems, this is a good
								place to start.
							</p>
						</div>

						<div className="articles-container">
							<div className="articles-wrapper">
								{visibleArticles.map((article, key) => (
									<div className="articles-article" key={key}>
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
							</div>
						</div>
					</div>
				</main>
				<Footer />
			</div>
		</React.Fragment>
	);
};

export default Articles;
