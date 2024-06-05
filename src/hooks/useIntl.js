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
    // Check for `lang` param (ie. ?lang=en|zh|etc)
    const searchParams = new URLSearchParams(document.location.search)
    const lang = searchParams.get('lang')
    if (lang && LOCALE_CHOICES.includes(lang)) {
      setLocale(LOCALES.find(({ code }) => code === lang))
      return
    }
    // Check if lang matches an RTD lang code (user routed from docs)
    const rtdCodeChoices = LOCALES.map(({ rtdCode }) => rtdCode)
    if (lang && rtdCodeChoices.includes(lang.toLowerCase())) {
      setLocale(LOCALES[rtdCodeChoices.indexOf(lang.toLowerCase())])
      return
    }

    // Look for localStorage lang pref
    const lsLangPref = localStorage.getItem(LS_LANG_PREF)
    if (lsLangPref && LOCALE_CHOICES.includes(lsLangPref)) {
      // If available and valid, set locale and return
      setLocale(LOCALES.find(({ code }) => code === lsLangPref))
      return
    }

    // Check if users browser lang is supported
    const browserLang = navigator.language.split('-')[0]
    if (LOCALE_CHOICES.includes(browserLang)) {
      // If available and valid, set locale and return
      setLocale(LOCALES.find(({ code }) => code === browserLang))
      return
    }

    // If no param, LS, or browser preference, set to default
    setLocale(LOCALES[0])
  }, [setLocale])

  return { locales: LOCALES, locale, setLocale }
}