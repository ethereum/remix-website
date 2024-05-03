import { useCallback, useEffect, useState } from "react";
import { COLOR_CHOICES, COLOR_MODES, LS_COLOR_SCHEME } from "../constants";

/**
 * Custom hook for managing color mode in the application.
 * @returns {Object} An object containing the current color mode getter/setter, mode cycler, and current mode icon
 */
export const useColorMode = () => {
  const [colorMode, _setColorMode] = useState(COLOR_CHOICES[0]); // getColorMode()

  // Customize setter to update localStorage as well
  const setColorMode = useCallback((mode) => {
    document.documentElement.setAttribute("style", `--color-scheme: ${mode}`);
    localStorage.setItem(LS_COLOR_SCHEME, mode);
    _setColorMode(mode);
  }, [])

  const cycleColorMode = useCallback(() => {
    const currentIndex = COLOR_CHOICES.indexOf(colorMode);
    setColorMode(COLOR_CHOICES[(currentIndex + 1) % COLOR_CHOICES.length])
  }, [colorMode, setColorMode])

  // Keyboard shortcut for cycling color mode (Ctrl/Cmd + \)
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.metaKey && e.code === 'Backslash') cycleColorMode()
    }

    document.addEventListener("keydown", handleKeyDown);

    return () => document.removeEventListener("keydown", handleKeyDown);
  }, [cycleColorMode]);

  const ThemeIcon = COLOR_MODES.find(({ value }) => value === colorMode).icon;

  return {
    colorMode,
    setColorMode,
    cycleColorMode,
    ThemeIcon,
  }
}
