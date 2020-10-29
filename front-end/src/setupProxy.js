// const { createProxyMiddleware } = require('http-proxy-middleware');

// module.exports = function(app) {
//    app.use(
//     "/",
//     createProxyMiddleware({
//       target: 'http://localhost:5000',
//       changeOrigin: true,
//     })
//   );

//   app.use(
//     "/socket.io",
//     createProxyMiddleware({
//       target: 'ws://localhost:5000',
//       changeOrigin: true,
//       ws: true
//     })
//   );

//   app.use(
//     "/sockjs-node",
//     createProxyMiddleware({
//       target: 'ws://localhost:5000',
//       changeOrigin: true,
//       ws: true
//     })
//   );

// };