import React from "react";

const Button = ({
  isDisabled = false,
  btnType = "button",
  className = "",
  textStyle = "",
  title,
  rightIcon,
  handleClick,
}) => {
  return (
    <button
      disabled={isDisabled}
      type={btnType}
      className={`${className}`}
      onClick={handleClick}
    >
      <span className="flex-1">{title}</span>
      {rightIcon && <div className="relative w-6 h-6">{rightIcon}</div>}
    </button>
  );
};

export default Button;
