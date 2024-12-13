import React from "react";
import styles from "./Button.module.scss";
import classNames from "classnames/bind";
import Image, { StaticImageData } from "next/legacy/image";

const cx = classNames.bind(styles);
const Button = ({
  text,
  onClick,
  type,
  size,
  image,
  id,
  selected,
  errorMessage,
  disabled,
  customClassName,
  width,
  alignSelf,
}: IButton) => {
  const classNames = cx(
    {
      button: true,
      /**
       * Classnames by size
       */
      main: size === "main",
      small: size === "small",
      wc: size === "wc",
      /**
       * Classnames by type
       */
      white: type === "white",
      orange: type === "orange",
      blue: type === "blue",
      gold: type === "gold",
      black: type === "black",
      whiteSec: type === "white-s",
      orangeSec: type === "orange-s",
      blueSec: type === "blue-s",
      goldSec: type === "gold-s",
      error: type === "error",
      errorSec: type === "error-s",
      blackSec: type === "black-s",
      goldBlack: type === "goldBlack",
      /**
       * Classnames by state
       */
      selected: selected !== undefined && selected,
    },
    customClassName
  );
  return (
    <button
      className={classNames}
      onClick={onClick}
      id={id}
      disabled={errorMessage || disabled ? true : false}
      style={{
        width: width ? `${width}px` : "100%",
        alignSelf: alignSelf ? alignSelf : "unset",
      }}
    >
      {image && <Image src={image} alt={"img"} width={100} height={100} />}
      <span>{text}</span>
    </button>
  );
};
interface IButton {
  text: string;
  onClick?: () => void;
  type: TButton;
  size: TSize;
  id?: string;
  selected?: boolean;
  image?: StaticImageData;
  errorMessage?: string;
  disabled?: boolean;
  customClassName?: string;
  width?: number;
  alignSelf?: "flex-start" | "flex-end" | "center";
}

type TButton =
  | "blue"
  | "white"
  | "orange"
  | "gold"
  | "goldBlack"
  | "error"
  | "black"
  | "blue-s"
  | "white-s"
  | "orange-s"
  | "gold-s"
  | "error-s"
  | "black-s";
type TSize = "main" | "small" | "wc";
export default Button;
