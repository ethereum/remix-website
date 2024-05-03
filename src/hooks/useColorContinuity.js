import { useEffect } from 'react'
import { COLOR_CHOICES, LS_COLOR_SCHEME } from '../constants'
import { useColorMode } from './useColorMode'
import { removeColorParam } from '../utils/url'

/**
 * Get preferred color scheme from query param on initial load, then remove param
 * This will be passed from Remix RTD site to maintain color mode across sites
 */
export const useColorContinuity = () => {
  const { setColorMode } = useColorMode()
  useEffect(() => {
    const searchParams = new URLSearchParams(document.location.search)
    // Look for `color`  param (ie. ?color=light|classic|dark)
    const color = searchParams.get('color') // Could be '' or invalid value
    if (color && COLOR_CHOICES.includes(color)) {
      setColorMode(color)
      // Update URL with color search query removed
      removeColorParam()
    } else {
      const lsColorMode = localStorage.getItem(LS_COLOR_SCHEME)
      if (lsColorMode && COLOR_CHOICES.includes(lsColorMode)) {
        setColorMode(lsColorMode)
      }
    }
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])
}
