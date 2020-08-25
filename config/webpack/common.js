const fs = require('fs')
const path = require('path')

module.exports = appRoot => ({
  entry: fs.
    readdirSync(path.resolve(appRoot, 'src'), { withFileTypes: true }).
    filter(dirent => dirent.isFile && dirent.name.match(/\.js$/)).
    reduce((acc, dirent) => {
      const { name } = dirent
      const absolutePath = path.resolve(appRoot, 'src', name)
      const basename = path.basename(name, ".js")

      return { ...acc, [basename]: absolutePath }
    }, {}),
  module: {
    rules: [
      { test: /\.js$/, exclude: /node_modules/, loader: "babel-loader" }
    ]
  }
})

