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
          loader: require.resolve('./svg-placeholder-loader'),
        }
      }
    ],
  },
};
