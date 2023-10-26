import React from "react";

const sizeClasses = {
  txtPoppinsRegular45: "font-normal font-poppins",
  txtOutfitSemiBold48: "font-outfit font-semibold",
  txtOutfitBold60: "font-bold font-outfit",
  txtOutfitBold73: "font-bold font-outfit",
  txtOutfitMedium26: "font-medium font-outfit",
  txtOutfitBold65: "font-bold font-outfit",
  txtRobotoRomanSemiBold22: "font-roboto font-semibold",
  txtOutfitBold26: "font-bold font-outfit",
  txtRobotoRomanRegular36: "font-normal font-roboto",
  txtOutfitSemiBold55: "font-outfit font-semibold",
  txtPoppinsRegular28: "font-normal font-poppins",
};

const Text = ({ children, className = "", size, as, ...restProps }) => {
  const Component = as || "p";

  return (
    <Component
      className={`text-left ${className} ${size && sizeClasses[size]}`}
      {...restProps}
    >
      {children}
    </Component>
  );
};

export { Text };
