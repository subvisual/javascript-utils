const fs = require('fs')
const path = require('path')

// Each file in ./src is an entry

module.exports = {
  mode: 'production',
  entry: fs.
    readdirSync(path.resolve(__dirname, 'src'), { withFileTypes: true }).
    filter(dirent => dirent.isFile && dirent.name.match(/\.js$/)).
    reduce((acc, dirent) => {
      const { name } = dirent
      const absolutePath = path.resolve(__dirname, 'src', name)
      const basename = path.basename(name, ".js")

      return { ...acc, [basename]: absolutePath }
    }, {})
}
