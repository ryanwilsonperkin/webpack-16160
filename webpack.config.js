var ImageMinimizerPlugin = require("image-minimizer-webpack-plugin");

module.exports = {
  cache: {
    type: 'filesystem',
  },
  module: {
    rules: [
      {
        test: /\.svg$/,
        type: "asset/resource",
        use: {
          loader: ImageMinimizerPlugin.loader,
          options: {
            minimizer: {
              implementation: ImageMinimizerPlugin.imageminMinify,
              options: {
                plugins: ["svgo"],
              },
            },
          },
        },
      },
    ],
  },
};
