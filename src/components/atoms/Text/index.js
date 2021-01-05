/* @flow */
import * as React from "react";
import "./text.scss";

/**
 * @param {Object} opts
 * @param {string} opts.label - The first string
 * @param {string} opts.fontClass - The second string
 * @param {string} opts.fontColor - The third string
 * @param {string} opts.fontWeight - The fourth string
 * @param {string} opts.className - The fifth string
 */
const Text = ({
	label = "",
	className = "",
	fontSize = "base",
	fontWeight = "400",
	fontColor = "black",
	...rest
}) => {
	let fontClass = `text--${fontSize} text--${fontColor} text--${fontWeight}`;
	let mainClass = `${fontClass} ${className}`;
	return (
		<span className={mainClass} {...rest}>
			{label}
		</span>
	);
};

export default Text;
