const isURL = require("./isURL")

module.exports = (path) => {
  // If no path is provided, exit early
  if (!path) return undefined

  // If path is already a valid URL, exit early
  if (isURL(path)) return path

  const url = new URL(process.env.URL || "http://localhost:8000")

  url.pathname = path

  return url
}

