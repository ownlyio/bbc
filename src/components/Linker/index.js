import React from "react";
import { HashLink } from "react-router-hash-link";

const Linker = ({ href, ...otherProps }) => {
  const isHttpLink = href?.startsWith("http");

  const Tag = isHttpLink ? "a" : HashLink;
  const props = isHttpLink ? { href, target: '_blank', rel: 'noopener noreferrer' } : { to: href, smooth: true };
  return <Tag {...props} {...otherProps}/>;
};

export default Linker;