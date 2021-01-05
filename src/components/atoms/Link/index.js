import * as React from "react";

/**
 * @param {Object} opts
 * @param {string} opts.label - The first string
 * @param {string} opts.path - The second string
 * @param {string} opts.className - The third string
 */
const Link = ({ label = "", path = "", className = "", ...rest }) => {
	return (
		<a href={path} className={className} {...rest}>
			{" "}
			{label}{" "}
		</a>
	);
};

export default Link;
