var helpers = require('./config/helpers');

module.exports = function (env) {
  const webpackConfigPath = helpers.root('./config', `webpack.${env}.js`);
  return require(webpackConfigPath)(env);
};
