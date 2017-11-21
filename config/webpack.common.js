var webpack = require('webpack');
var helpers = require('./helpers');

module.exports = function (env) {
  return {
    entry: {
      'polyfills': './src/polyfills.ts',
      'vendor': './src/vendor.ts',
      'wraith-components': './src/wraith.module.ts'
    },

    resolve: {
      extensions: [
        '.js',
        '.ts'
      ]
    },

    module: {
      loaders: [
        //JS LOADER
        {
          test: /\.js$/,
          loader: 'babel-loader',
          include: [
            './src'
          ]
        },
        //TS LOADER
        {
          test: /\.ts$/,
          loaders: [
            {
              loader: 'awesome-typescript-loader',
              options: { configFileName: helpers.root('tsconfig.json') }
            },
            'angular2-template-loader'
          ]
        },
        {
          test: /\.html$/,
          loader: 'html-loader'
        },
        {
          test: /\.(png|jpe?g|gif|svg|woff|woff2|ttf|eot|ico)$/,
          loader: 'file-loader?name=assets/[name].[hash].[ext]'
        },
        {
          test: /\.(scss)$/,
          exclude: [/\.global\.scss$/],
          loaders: [
            'raw-loader',
            'sass-loader'
          ]
        },
        {
          test: /\.global\.scss$/,
          loaders: [
            'style-loader',
            'raw-loader',
            'sass-loader'
          ]
        }
      ]
    },
    plugins: [
      new webpack.ContextReplacementPlugin(
        /angular(\\|\/)core(\\|\/)@angular/,
        helpers.root('./src')
      ),
      new webpack.DefinePlugin({
        'process.env.NODE_ENV': JSON.stringify(env)
      }),
      new webpack.optimize.CommonsChunkPlugin({
        name: ['wraith-components', 'vendor', 'polyfills']
      })
    ]
  }
};
