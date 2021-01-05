import React from "react";
import { storiesOf } from "@storybook/react";
import StoryRouter from "storybook-react-router";
import "../../index.scss";
import Header from "./header";
import NewsContainer from "./NewsContainer";
import CommentsContainer from "./CommentsContainer";
import Footer from "./footer";
import { ITEM_BASE_URL } from "./../../utils";
import "../../index.scss";

storiesOf("Organisms", module)
	.addDecorator(StoryRouter())
	.add("Header", () => <Header />)
	.add("NewsContainer", () => (
		<NewsContainer
			subUrl={ITEM_BASE_URL}
			newsArray={[
				24727890,
				24726793,
				24713795,
				24720353,
				24726818,
				24726008,
				24708472,
				24727302,
				24717084,
				24720607,
				24727531,
				24718365,
				24721118,
			]}
			indexStart={0}
			nextPageQuery='/news'
			isNextPage={false}
			type='news'
		/>
	))
	.add("CommentsContainer", () => (
		<CommentsContainer
			subUrl={ITEM_BASE_URL}
			commentsArray={{
				by: "noir-york",
				descendants: 41,
				id: 24727890,
				kids: [
					24728190,
					24728607,
					24728316,
					24728565,
					24728424,
					24728522,
					24728463,
					24728479,
					24728264,
					24728243,
					24728280,
				],
				score: 72,
				time: 1602231444,
				title: "Faith in government declines when mobile internet arrives",
				type: "story",
				url:
					"https://www.economist.com/graphic-detail/2020/10/10/faith-in-government-declines-when-mobile-internet-arrives",
			}}
		/>
	))
	.add("Footer", () => <Footer />);
