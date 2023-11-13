import { toAbsoluteUrl } from "../helpers/assetHelper";
import SVG from "react-inlinesvg";

const KTSVG = ({
  className = "",
  path,
  svgClassName = "mh-50px",
  fill,
  stroke,
  color,
}) => {
  return (
    <span className={className}>
      <SVG
        src={toAbsoluteUrl(path)}
        className={svgClassName}
        fill={fill}
        color={color}
        stroke={stroke}
      />
    </span>
  );
};

export default KTSVG;
