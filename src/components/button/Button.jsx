import classNames from "classnames";
import React from "react";
import styles from "./Button.module.scss";

const Button = ({
  type = "button",
  secondary = false,
  bgColor,
  fgColor,
  width,
  ...restProps
}) => {
  const coposeClasses = classNames(
    styles.button,
    secondary ? styles.secondary : styles.primary
  );

  const style = {
    backgroundColor: bgColor || "",
    color: fgColor || "",
    width: width || "",
  };

  return (
    <button
      className={coposeClasses}
      type={type}
      style={style}
      {...restProps}
    ></button>
  );
};

export default Button;
