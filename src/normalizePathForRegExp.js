function normalizePathForRegExp(path) {
  return path
    .replace(new RegExp("/", "g"), "\\/")
    .replace(new RegExp("\\.", "g"), "\\\\.")
}

module.exports = normalizePathForRegExp
