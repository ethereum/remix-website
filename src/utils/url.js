/**
 * Removes specified parameter from the URL search params and updates the browser history.
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
 * Joins multiple path segments into a single path.
 *
 * @param {...string} args - The path segments to join.
 * @returns {string} The joined path.
 */
export const join = (...args) => args.join("/").replace(/\/+/g, "/")