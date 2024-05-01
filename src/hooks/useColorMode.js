import { useEffect, useState } from "react";
import { COLOR_CHOICES, COLOR_MODES, LS_COLOR_SCHEME } from "../constants";


/**
 * Removes the "color" parameter from the URL search params and updates the browser history.
 */
const removeColorParam = () => {
  const { location, title } = document;
  const { pathname, origin, search, hash } = location;
  const newSearchParams = new URLSearchParams(search);
  newSearchParams.delete("color");
  const sanitizedSearch =
    newSearchParams.size < 1 ? "" : "?" + newSearchParams.toString();
  window.history.replaceState(
    origin,
    title,
    pathname + sanitizedSearch + hash
  );
}

/**
 * Retrieves the color mode preference.
 * @returns {string} The color mode preference: 'light' | 'classic' | 'dark'
 */
const getColorMode = () => {
  // Check localStorage for existing color scheme preference
  const urlParams = new URLSearchParams(window.location.search);

  if (urlParams.size > 0) {
    // This is used for color mode continuity between the main Remix site and the docs
    const colorSchemeParam = urlParams.get("color");
    // Remove "color" search param from URL
    removeColorParam();
    if (COLOR_CHOICES.includes(colorSchemeParam)) return colorSchemeParam;
  }

  const lsMode = localStorage.getItem(LS_COLOR_SCHEME);
  return COLOR_CHOICES.includes(lsMode) ? lsMode : COLOR_CHOICES[0];
}

/**
 * Custom hook for managing color mode in the application.
 * @returns {Object} An object containing the current color mode, a function to set the color mode, and the current icon for the color mode.
 */
export const useColorMode = () => {
  const [colorMode, setColorMode] = useState(getColorMode());

  useEffect(() => {
    // Set the color scheme based on the new mode
    localStorage.setItem(LS_COLOR_SCHEME, colorMode);
    
    // Select document and set the style attribute to denote color-scheme attribute
    document.documentElement.setAttribute("style", `--color-scheme: ${colorMode}`);
  }, [colorMode]);

  console.log({ colorMode })
  const currentIcon = COLOR_MODES.find(({ value }) => value === colorMode).icon;

  return {
    colorMode,
    setColorMode,
    currentIcon,
  }
}