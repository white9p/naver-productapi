const {createProxyMiddleware} = require('http-proxy-middleware')
module.exports = function(app) {
    app.use(
      '/v1/search',
      createProxyMiddleware({
        target:'https://openapi.naver.com',
        changeOrigin: true
      })
    ),
    app.use(
      '/mobile/ac',
      createProxyMiddleware({
      target:'https://mac.search.naver.com',
      changeOrigin: true
    }),
    )
}
