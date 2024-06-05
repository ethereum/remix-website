import { useEffect } from 'react'
import { COLOR_CHOICES, COLOR_PARAM, LS_COLOR_SCHEME } from '../constants'
import { removeParam } from '../utils/url'

/**
 * Get preferred color scheme from query param on initial load, then remove param
 * This will be passed from Remix RTD site to maintain color mode across sites
 */
export const useColorContinuity = (setColorMode) => {
  useEffect(() => {
    const searchParams = new URLSearchParams(document.location.search)
    // Look for `color`  param (ie. ?color=light|dark|black)
    const color = searchParams.get(COLOR_PARAM) // Could be '' or invalid value
    if (color && COLOR_CHOICES.includes(color)) {
      setColorMode(color)
      // Update URL with color search query removed
      removeParam(COLOR_PARAM)
    } else {
      const lsColorMode = localStorage.getItem(LS_COLOR_SCHEME)
      if (lsColorMode && COLOR_CHOICES.includes(lsColorMode)) {
        setColorMode(lsColorMode)
      }
    }
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])
}
