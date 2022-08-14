module.exports = {
  webpack: (config, { isServer }) => {
    if (isServer) {
      return config;
    }

    const ImageminWebP = require("imagemin-webp");
    const ImageminPlugin = require("imagemin-webpack-plugin").default;
    const CopyWebpackPlugin = require("copy-webpack-plugin");

    config.plugins.push(
      // from: path.join(__dirname, 'node_modules/widget-editor/dist/images'),
      // to: path.join(__dirname, 'static/images/widget-editor/')
      new CopyWebpackPlugin({
        from: "./images/**/**",
        to: "./public/photos/[name].webp",
      })
    );
    config.plugins.push(
      new ImageminPlugin({
        // imagemin-webp docs: https://github.com/imagemin/imagemin-webp
        plugins: [ImageminWebP({ quality: 50 })],
      })
    );

    return config;
  },
};
