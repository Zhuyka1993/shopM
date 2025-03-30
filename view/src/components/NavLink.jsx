import React from "react";
import { Link } from "react-router-dom";

const NavLink = ({ hrefCurt, content, isImage = false }) => {
  return (
    <Link to={hrefCurt}>
      {isImage ? <img src={content} alt="link content" /> : <span>{content}</span>}
    </Link>
  );
};

export default NavLink;
