import * as React from "react";

import { storiesOf } from "@storybook/react";

import "../../index.scss";

import Text from "./Text/index";
import Image from "./Image/index";
import Link from "./Link/index";

import logoImage from "../../assets/images/logo.gif";

storiesOf("Atoms", module)
	.add("Text", () => <Text label='Hello' />)
	.add("Link", () => <Link label='Click Me' path='https://www.google.com/' />)
	.add("Image", () => <Image src={logoImage} />);
