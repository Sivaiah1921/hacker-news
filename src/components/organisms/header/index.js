import React from "react";
import "./header.scss";
import NavigationLink from '../../molecules/NavigationLink';
import Logo from '../../molecules/Logo/index';

const Header = () => {
  const Links =[
    {
      link: "/newest",
      label: "new",
    },
    {
      link: "/ask",
      label: "ask",
    },
    {
      link: "/show",
      label: "show",
    },
    {
      link: "/jobs",
      label: "jobs",
    },
  ]
  return(<table className="header-wrapper">
  <tbody>
    <tr>
      <td className="header-wrapper__logo">
        <NavigationLink link="/">
          <Logo/>
        </NavigationLink>
      </td>
      {Links.map((item, key) => (
        <td key={key}>
          <NavigationLink activeClass="header-wrapper__active" {...item} />{" "}
          {key < Links.length - 1 && "|"}
        </td>
      ))}
    </tr>
  </tbody>
</table>)
}

export default Header;