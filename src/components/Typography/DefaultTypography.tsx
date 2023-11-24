// import { TypographyProps } from "./types"
import { twMerge } from "tailwind-merge";
export interface TypographyProps
  extends React.HTMLAttributes<HTMLParagraphElement> {
  variant?: "h1" | "h2" | "h3" | "h4" | "h5" | "h6";
  textClass?: string;
  color?:
    | "navy"
    | "orange"
    | "white"
    | "gray"
    | "gray04"
    | "gray06"
    | "black"
    | "blue"
    | "error"
    | "default";
}

const DefaultTypography = (props: TypographyProps) => {
  const { variant, textClass, color, children, ...otherProps } = props;

  const renderClassTextColor = () => {
    switch (color) {
      case "navy":
        return "text-navy";
      case "orange":
        return "text-orange";
      case "white":
        return "text-white";
      case "gray04":
        return "text-gray-04";
      case "gray06":
        return "text-gray-06";
      case "gray":
        return "text-gray";
      case "black":
        return "text-black";
      case "blue":
        return "text-blue";
      case "error":
        return "text-error";
      default:
        return "text-gray";
    }
  };

  const defaultStyle = (styles: string) =>
    twMerge(styles, renderClassTextColor(), textClass);

  switch (variant) {
    case "h1":
      return (
        <h1 className={defaultStyle("font-bold text-4xl")} {...otherProps}>
          {children}
        </h1>
      );
    case "h2":
      return (
        <h2 className={defaultStyle("font-bold text-3xl")} {...otherProps}>
          {children}
        </h2>
      );
    case "h3":
      return (
        <h3 className={defaultStyle("font-bold text-2xl")} {...otherProps}>
          {children}
        </h3>
      );
    case "h4":
      return (
        <h4 className={defaultStyle("font-bold text-xl")} {...otherProps}>
          {children}
        </h4>
      );
    case "h5":
      return (
        <h5 className={defaultStyle("font-normal text-lg")} {...otherProps}>
          {children}
        </h5>
      );
    case "h6":
      return (
        <h6 className={defaultStyle("font-normal text-base")} {...otherProps}>
          {children}
        </h6>
      );
    default:
      return (
        <p
          className={`${
            textClass ?? "text-sm"
          } font-normal ${renderClassTextColor()}`}
          {...otherProps}
        >
          {children}
        </p>
      );
  }
};

export default DefaultTypography;
