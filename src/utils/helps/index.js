import bcrypt from "bcryptjs-react";

const has = Object.prototype.hasOwnProperty

/**
 * Checks if a given value is empty.
 * A value is considered empty if it is:
 * - null
 * - undefined
 * - an empty string, array, or object
 * - the string "null" (case-insensitive)
 *
 * @param {*} prop - The value to check.
 * @returns {boolean} - True if the value is empty, false otherwise.
 */
export const isEmpty = (prop) => {
  return (
    prop === null ||
    prop === undefined ||
    (has.call(prop, 'length') && prop.length === 0) ||
    (prop.constructor === Object && Object.keys(prop).length === 0) ||
    `${prop}`.toLocaleLowerCase() === 'null'
  )
}

/**
 * Hashes a string using bcrypt.
 * 
 * @param {*} prop: string. 
 * @returns {string}: The hashed string.
 */
export const hashString = (prop) => {
  return bcrypt.hashSync(prop, 10)
}

/**
 * Retrieves the base URL of the server from environment variables or the current window location.
 *
 * @returns {string|null} - The server base URL or the current window origin if not defined.
 */
export const getServerBaseUrl = () => {
  if (!isEmpty(process.env.REACT_APP_SERVER_BASE_URL)) {
    return process.env.REACT_APP_SERVER_BASE_URL
  }

  return null
}

/**
 * Constructs a full URL for a static file, removing any internal path prefixes.
 *
 * @param {string} path - The path to the static file.
 * @returns {string} - The full URL to the static file.
 */
export const getFullUrlStaticFile = (path) => {
  // set server url
  const server_url = getServerBaseUrl()
  let url = `${path}`
    .replace('_internal\\', '')
    .replace('_internal/', '')
    .replace('server\\', '')
    .replace('server/', '')
    .replace('src\\', '')
    .replace('src/', '')

  if (server_url) {
    url = `${server_url}/${url}`
  }

  // set x_api_key
  const x_api_key = hashString(process.env.REACT_APP_API_KEY)
  return `${url}?sign=${x_api_key}`
}

/**
 * Find a page by its path.
 *
 * @param {string} currentPath - The current path to match against.
 * @param {Array} pages - The array of pages to search through.
 * @returns {Object|null} The page object if found, null otherwise.
 */
export const findPageByPath = (currentPath, pages = []) => {
  const page = pages.find(page => {
    const path = new RegExp("^" + page.path.replace(/:[^/]+/g, "([^/]+)") + "$")
    return path.test(currentPath)
  })
  return page
}

/**
 * Constructs a full URL for a static file, removing any internal path prefixes.
 *
 * @param {string} path - The path to the static file.
 * @returns {string} - The full URL to the static file.
 */
export const getRouterParams = (path, params) => {
  if (!isEmpty(params)) {
    Object.keys(params).forEach(key => {
      path = path.replace(`:${key}`, params[key])
    })
  }

  return path
}

/**
 * Converts query parameters to a string.
 *
 * @param {string} routerPath - The path to the router.
 * @param {Object} query - The query parameters to convert.
 * @returns {string} - The query parameters as a string.
 */
export const convertQueryToString = (routerPath, query) => {
  if (typeof query === 'object' && !isEmpty(query)) {
    const querys = [];
    Object.keys(query).forEach(key => {
      querys.push(`${key}=${query[key]}`)
    });
    return `${routerPath}?${querys.join('&')}`
  }
  if (typeof query === 'string') {
    return `${routerPath}${query}`
  }
  return routerPath
};