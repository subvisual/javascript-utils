const environment = process.env.NODE_ENV || 'development'

module.exports = {
  ...require('./config/webpack/common')(__dirname),
  ...require('./config/webpack/' + environment)(__dirname)
}
