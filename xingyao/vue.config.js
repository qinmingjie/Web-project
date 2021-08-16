module.exports = {
  devServer: {
    open: true,
    hot: true,
    port: 3000
  },
  publicPath: process.env.NODE_ENV === 'production' ? '/' : '/'
}