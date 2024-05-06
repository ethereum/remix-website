import { useCallback, useEffect, useState } from 'react'
import { LOCALE_CHOICES, LOCALES, LS_LANG_PREF } from '../constants'

export const useIntl = () => {
  // locale: { code: string, name: string, localeName: string, messages: object }
  const [locale, _setLocale] = useState(LOCALES[0])

  // Update DOM, LS, queryParam and state new locale
  const setLocale = useCallback((locale) => {
    document.documentElement.lang = locale.code
    localStorage.setItem(LS_LANG_PREF, locale.code)
    // Update current query params: set lang to new locale
    const searchParams = new URLSearchParams(window.location.search)
    searchParams.set('lang', locale.code)
    const newUrl = `${window.location.pathname}?${searchParams.toString()}`
    window.history.replaceState({}, '', newUrl)
    // Update state
    _setLocale(locale)
  }, [])

  useEffect(() => {
    // Look for `lang`  param (ie. ?lang=en|zh|etc)
    const searchParams = new URLSearchParams(document.location.search)
    // lang: string
    const lang = searchParams.get('lang')
    // If available and valid, set locale and return
    if (lang && LOCALE_CHOICES.includes(lang)) {
      setLocale(LOCALES.find(({ code }) => code === lang))
      return
    }
    // Look for localStorage lang pref
    const lsLangPref = localStorage.getItem(LS_LANG_PREF)
    if (lsLangPref && LOCALE_CHOICES.includes(lsLangPref)) {
      // If available and valid, set locale and return
      setLocale(LOCALES.find(({ code }) => code === lsLangPref))
      return
    }
    // If no param, and no LS, set to default and return
    setLocale(LOCALES[0])
  }, [setLocale])

  return { locales: LOCALES, locale, setLocale }
}