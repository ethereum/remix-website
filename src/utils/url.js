import { COLOR_PARAM, REMIX_DOCS_URL } from '../constants'

/**
 * Removes the "color" parameter from the URL search params and updates the browser history.
 */
export const removeParam = (param) => {
  const { location, title } = document;
  const { pathname, origin, search, hash } = location;
  const newSearchParams = new URLSearchParams(search);
  newSearchParams.delete(param);
  const sanitizedSearch =
    newSearchParams.size < 1 ? "" : "?" + newSearchParams.toString();
  window.history.replaceState(
    origin,
    title,
    pathname + sanitizedSearch + hash
  );
}

/**
 * Returns the URL for the documentation page with the specified relative path and color mode.
 * @param {string} relativePath - The relative path of the documentation page.
 * @param {string} colorMode - The color mode to be applied to the documentation page.
 * @returns {string} The URL of the documentation page with the specified relative path and color mode.
 */
export const getDocsHref = (relativePath, colorMode) => {
  const dest = new URL(relativePath, REMIX_DOCS_URL)
  const params = new URLSearchParams(dest.search)
  params.set(COLOR_PARAM, colorMode)
  dest.search = params.toString()
  const href = dest.toString()
  return href
}

/**
 * Joins multiple path segments into a single path.
 *
 * @param {...string} args - The path segments to join.
 * @returns {string} The joined path.
 */
export const join = (...args) => args.join("/").replace(/\/+/g, "/")