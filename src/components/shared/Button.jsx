import React from "react";

function Button({
  children,
  version = "primary",
  type = "button",
  isDisabled = false,
}) {
  return (
    <button type={type} disabled={isDisabled} className={`btnbtn-${version}`}>
      {children}
    </button>
  );
}

export default Button;
