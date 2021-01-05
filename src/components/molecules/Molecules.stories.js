import * as React from "react";
import { storiesOf } from "@storybook/react";
import StoryRouter from "storybook-react-router";

import "../../index.scss";
import Logo from "./Logo/index";
import NavigationLink from "./NavigationLink/index";
import NewsCard from "./NewsCard/index";
import CommentCard from "./CommentCard";
import { ITEM_BASE_URL } from "../../utils";

storiesOf("Molecules", module)
	.addDecorator(StoryRouter())
	.add("Logo", () => <Logo />)
	.add("NavigationLink", () => (
		<NavigationLink
			link='https://www.robosoftin.com/'
			label='Robosoft'
			external={true}
		/>
	))
	.add("NewsCard", () => (
		<NewsCard index={1} key={1} subUrl={`${ITEM_BASE_URL}/23734093.json`} />
	))
	.add("CommentCard", () => (
		<CommentCard id={23734093} subUrl={ITEM_BASE_URL} />
	));
