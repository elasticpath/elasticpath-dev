module.exports = function (context, options) {
  return {
    name: 'custom-loaders',
    configureWebpack(config, isServer) {
      return {
        module: {
          rules: [
            {
              test: /\.m?js/,
              resolve: {
                fullySpecified: false
              }
            },
          ],
        },
      };
    },
  };
};
