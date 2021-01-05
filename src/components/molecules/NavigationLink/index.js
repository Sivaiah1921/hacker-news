import React from "react";

import Link from '../../atoms/Link/index';
import Text from '../../atoms/Text';
import {NavLink} from "react-router-dom";

const NavigationLink = ({link,label,external=false,className = "",
activeClass = "",
element = "text",
fontSize = "base",
fontWeight = "400",
fontColor = "black",
children}) => {
  return (external? ( <Link path={link} label={label}/>)  : (<NavLink activeClassName={activeClass} className={`${className}`} to={link}>
  {children}
  {label && (
    <Text
      fontColor={fontColor}
      fontSize={fontSize}
      fontWeight={fontWeight}
      element={element}
      label={label}
    />
  )}
</NavLink>));
}
export default NavigationLink;
