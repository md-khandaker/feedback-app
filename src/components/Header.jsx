import React from "react";
import PropTypes from "prop-types";

function Header({
  text = "Feedback App",
  bgColor = "blue",
  textColor = "purple",
}) {
  const headerStyle = {
    backgroundColor: bgColor,
    color: textColor,
  };
  return (
    <header style={headerStyle}>
      <div className="container">{text}</div>
    </header>
  );
}
Header.propTypes = {
  text: PropTypes.string,
  bgColor: PropTypes.string,
  textColor: PropTypes.string,
};
export default Header;
