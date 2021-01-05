import React from "react";

// atoms
import Image from "../../atoms/Image/index";
import Text from "../../atoms/Text/index";

import LogoImg from "../../../assets/images/logo.gif";

const Logo = () => {
	return (
		<>
			<Image width={18} height={18} src={LogoImg} />
			<Text label='Hacker News' />
		</>
	);
};

export default Logo;
