import classNames from "classnames/bind";
import React from "react";
import styles from "./Typography.module.scss";
const cx = classNames.bind(styles);
const Typography = ({
  text,
  type,
  color = "white",
  offSet,
  onClick,
  whiteSpace,
  alignSelf,
}: ITypography) => {
  const typographyClass = cx({
    isClickable: onClick,
    h1Light: type === "h1-light",
    subText: type === "subtext",
    subTextBold: type === "subtext-bold",
    buttonText: type === "button",
    bodyTextBig: type === "body-text-big",
    h0: type === "h0",
  });
  return (
    <>
      {type === "h1" && (
        <h1
          style={{
            color: `var(--${color})`,
            transform: `translateY(${offSet}px)`,
            cursor: onClick && "pointer",
            alignSelf: alignSelf ? alignSelf : "unset",
            whiteSpace: whiteSpace ? whiteSpace : "normal",
          }}
          onClick={onClick}
          className={typographyClass}
        >
          {text}
        </h1>
      )}
      {type === "h1-light" && (
        <h1
          style={{
            color: `var(--${color})`,
            transform: `translateY(${offSet}px)`,
            cursor: onClick && "pointer",
            alignSelf: alignSelf ? alignSelf : "unset",
            whiteSpace: whiteSpace ? whiteSpace : "normal",
          }}
          className={typographyClass}
          onClick={onClick}
        >
          {text}
        </h1>
      )}
      {type === "h2" && (
        <h2
          style={{
            color: `var(--${color})`,
            transform: `translateY(${offSet}px)`,
            cursor: onClick && "pointer",
            alignSelf: alignSelf ? alignSelf : "unset",
            whiteSpace: whiteSpace ? whiteSpace : "normal",
          }}
          onClick={onClick}
          className={typographyClass}
        >
          {text}
        </h2>
      )}
      {type === "h3" && (
        <h3
          style={{
            color: `var(--${color})`,
            transform: `translateY(${offSet}px)`,
            cursor: onClick && "pointer",
            alignSelf: alignSelf ? alignSelf : "unset",
            whiteSpace: whiteSpace ? whiteSpace : "normal",
          }}
          className={typographyClass}
          onClick={onClick}
        >
          {text}
        </h3>
      )}
      {type === "h4" && (
        <h4
          style={{
            color: `var(--${color})`,
            transform: `translateY(${offSet}px)`,
            cursor: onClick && "pointer",
            alignSelf: alignSelf ? alignSelf : "unset",
            whiteSpace: whiteSpace ? whiteSpace : "normal",
          }}
          className={typographyClass}
          onClick={onClick}
        >
          {text}
        </h4>
      )}
      {type === "h5" && (
        <h5
          style={{
            color: `var(--${color})`,
            transform: `translateY(${offSet}px)`,
            cursor: onClick && "pointer",
            alignSelf: alignSelf ? alignSelf : "unset",
            whiteSpace: whiteSpace ? whiteSpace : "normal",
          }}
          className={typographyClass}
        >
          {text}
        </h5>
      )}
      {type === "h6" && (
        <h6
          style={{
            color: `var(--${color})`,
            transform: `translateY(${offSet}px)`,
            cursor: onClick && "pointer",
            alignSelf: alignSelf ? alignSelf : "unset",
            whiteSpace: whiteSpace ? whiteSpace : "normal",
          }}
          className={typographyClass}
          onClick={onClick}
        >
          {text}
        </h6>
      )}
      {type === "body" && (
        <p
          style={{
            color: `var(--${color})`,
            transform: `translateY(${offSet}px)`,
            cursor: onClick && "pointer",
            alignSelf: alignSelf ? alignSelf : "unset",
            whiteSpace: whiteSpace ? whiteSpace : "normal",
          }}
          className={typographyClass}
          onClick={onClick}
        >
          {text}
        </p>
      )}
      {type === "subtext" && (
        <span
          className={typographyClass}
          style={{
            color: `var(--${color})`,
            transform: `translateY(${offSet}px)`,
            cursor: onClick && "pointer",
            alignSelf: alignSelf ? alignSelf : "unset",
            whiteSpace: whiteSpace ? whiteSpace : "normal",
          }}
          onClick={onClick}
        >
          {text}
        </span>
      )}
      {type === "subtext-bold" && (
        <span
          className={typographyClass}
          style={{
            color: `var(--${color})`,
            transform: `translateY(${offSet}px)`,
            cursor: onClick && "pointer",
            alignSelf: alignSelf ? alignSelf : "unset",
            whiteSpace: whiteSpace ? whiteSpace : "normal",
          }}
          onClick={onClick}
        >
          {text}
        </span>
      )}
      {type === "button" && (
        <span
          className={typographyClass}
          style={{
            color: `var(--${color})`,
            transform: `translateY(${offSet}px)`,
            cursor: onClick && "pointer",
            alignSelf: alignSelf ? alignSelf : "unset",
            whiteSpace: whiteSpace ? whiteSpace : "normal",
          }}
          onClick={onClick}
        >
          {text}
        </span>
      )}
      {type === "body-text-big" && (
        <span
          className={typographyClass}
          style={{
            color: `var(--${color})`,
            transform: `translateY(${offSet}px)`,
            cursor: onClick && "pointer",
            alignSelf: alignSelf ? alignSelf : "unset",
            whiteSpace: whiteSpace ? whiteSpace : "normal",
          }}
          onClick={onClick}
        >
          {text}
        </span>
      )}
      {type === "h0" && (
        <h1
          className={typographyClass}
          style={{
            color: `var(--${color})`,
            transform: `translateY(${offSet}px)`,
            cursor: onClick && "pointer",
            alignSelf: alignSelf ? alignSelf : "unset",
            whiteSpace: whiteSpace ? whiteSpace : "normal",
          }}
          onClick={onClick}
        >
          {text}
        </h1>
      )}
    </>
  );
};

interface ITypography {
  text: string;
  type: TypographyType;
  color?: Colors;
  offSet?: number;
  onClick?: () => void;
  whiteSpace?: "pre-line" | "normal" | "nowrap" | "pre-wrap" | "initial" | "inherit";
  alignSelf?: "center" | "flex-start" | "flex-end" | "baseline" | "stretch" | "inherit" | "initial";
}

type TypographyType =
  | "h0"
  | "h1"
  | "h1-light"
  | "h2"
  | "h3"
  | "h4"
  | "h5"
  | "h6"
  | "body"
  | "subtext"
  | "subtext-bold"
  | "button"
  | "body-text-big";

export type Colors =
  | "white"
  | "white-50"
  | "white-75"
  | "black"
  | "black-30"
  | "neutral"
  | "mm-orange"
  | "mm-orange-secondary"
  | "gold"
  | "gold-50"
  | "gold-75"
  | "blue"
  | "success"
  | "transparent"
  | "error"
  | "error-30";
export default Typography;
