/* @flow */
import * as React from "react";

/**
 * @param {Object} opts
 * @param {string} opts.src - The first string
 * @param {string} opts.alt - The second string
 * @param {string} opts.className - The third string
 */
const Image = ({ src, alt = "", className = "", ...rest }) => {
	return <img src={src} alt={alt} className={className} {...rest} />;
};

export default Image;
