import { useEffect, useState } from 'react';
import { LOCALES, REMIX_DOCS_URL, REMIX_DOCS_VERSION } from "../../constants"
import { getColorModeFromHTMLStyle } from '../../utils/dom';
import { join } from '../../utils/url';

const DocsLink = ({ relativePath = "", children, ...props}) => {
  const [lang, setLang] = useState("")
  useEffect(() => { setLang(document.documentElement.lang)}, [])
  // Listen and save changes to document.documentElement.lang
  useEffect(() => {
    const observer = new MutationObserver((mutationsList) => {
      for (let mutation of mutationsList) {
        if (mutation.type === 'attributes' && mutation.attributeName === 'lang') {
          setLang(document.documentElement.lang);
        }
      }
    });
    observer.observe(document.documentElement, { attributes: true });
    return () => observer.disconnect();
  }, [])
  const rtdCode = LOCALES.find(({ code }) => code === lang)?.rtdCode || LOCALES[0].rtdCode;

  const [colorMode, setColorMode] = useState("")
  useEffect(() => {
    const htmlStyle = document.documentElement.getAttribute("style");
    setColorMode(getColorModeFromHTMLStyle(htmlStyle));
  }, [])
  // Listen and save changes to document.documentElement.style
  useEffect(() => {
    const observer = new MutationObserver((mutationsList) => {
      for (let mutation of mutationsList) {
        if (mutation.type === 'attributes' && mutation.attributeName === 'style') {
          setColorMode(getColorModeFromHTMLStyle(document.documentElement.getAttribute("style")));
        }
      }
    });
    observer.observe(document.documentElement, { attributes: true });
    return () => observer.disconnect();
  }, [])

  // Join language, version ("latest") and relative path, using the Remix Docs URL as the base
  const destURL = new URL(join(rtdCode, REMIX_DOCS_VERSION, relativePath), REMIX_DOCS_URL);
  // Update query params with color continuity token
  const params = new URLSearchParams(destURL.search);
  params.set("color", colorMode);
  destURL.search = params.toString();

  return <a href={destURL.toString()} {...props}>{children}</a>
}

export default DocsLink;