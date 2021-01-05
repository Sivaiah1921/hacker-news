import React from "react";
import "./footer.scss";
import NavigationLink from '../../molecules/NavigationLink'

const Footer = () => {
  const Links =[
    {
      link: "/guidelines",
      label: "Guidelines",
    },
    {
      link: "/faq",
      label: "FAQ",
    },
    {
      link: "mailto:hn@ycombinator.com",
      label: "Support",
      external: true,
    },
    {
      link: "https://github.com/HackerNews/API",
      label: "API",
      external: true,
    },
    {
      link: "/security",
      label: "Security",
    },
    {
      link: "/lists",
      label: "Lists",
    },
    {
      link: "/bookmarklet",
      label: "Bookmarklet",
    },
    {
      link: "http://www.ycombinator.com/legal/",
      label: "Legal",
      external: true,
    },
    {
      link: "http://www.ycombinator.com/apply/",
      label: "Apply to YC",
      external: true,
    },
    {
      link: "mailto:hn@ycombinator.com",
      label: "Contact",
      external: true,
    },
  ]
  return(<footer className="footer-wrapper">
  {Links.map((item,key) => (
    <>
    <NavigationLink  element="span" fontSize="sm" fontColor="gray" key={key} {...item}/>
    {key < Links.length - 1 && " | "}
    </>
  ))}
  </footer>)
}

export default Footer;