import React from "react";
import PropTypes from "prop-types";

const shapes = { round: "rounded-[18px]" };
const variants = {
  outline: {
    indigo_A700: "border-[3px] border-indigo-A700 border-solid text-white-A700",
    purple_600: "border-4 border-purple-600 border-solid text-white-A700",
  },
  fill: { blue_gray_700: "bg-blue_gray-700 text-white-A700" },
};
const sizes = { xs: "p-[7px]", sm: "p-2.5" };

const Button = ({
  children,
  className = "",
  leftIcon,
  rightIcon,
  shape = "",
  size = "",
  variant = "",
  color = "",
  ...restProps
}) => {
  return (
    <button
      className={`${className} ${(shape && shapes[shape]) || ""} ${
        (size && sizes[size]) || ""
      } ${(variant && variants[variant]?.[color]) || ""}`}
      {...restProps}
    >
      {!!leftIcon && leftIcon}
      {children}
      {!!rightIcon && rightIcon}
    </button>
  );
};

Button.propTypes = {
  className: PropTypes.string,
  children: PropTypes.node,
  shape: PropTypes.oneOf(["round"]),
  size: PropTypes.oneOf(["xs", "sm"]),
  variant: PropTypes.oneOf(["outline", "fill"]),
  color: PropTypes.oneOf(["indigo_A700", "purple_600", "blue_gray_700"]),
};

export { Button };
