import { COLOR_CHOICES, HTML_COLOR_SCHEME } from "../constants";

export const getColorModeFromHTMLStyle = (style) =>
  style?.includes(HTML_COLOR_SCHEME)
    ? style.split(":")[1].trim()
    : COLOR_CHOICES[0].value;