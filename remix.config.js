/**
 * @type {import('@remix-run/dev/config').AppConfig}
 */
module.exports = {
  appDirectory: "app",
  // 浏览器文件构建的路径
  assetsBuildDirectory: "public/build",
  publicPath: "/build/",
  // 公共路径，浏览器用来查找静态文件的路径
  serverBuildDirectory: "build",
  // 用于开发 websocket 服务器的端口号。默认为 8002
  devServerPort: 8002,
  // 忽略
  ignoredRouteFiles: [".*"],

  // 定义自定义路由的函数，除了那些已经使用 app/routes. 两组路由将被合并
  routes: async (defineRoutes) => {
    return defineRoutes((route) => {
      route("/action/getdata/*", "./action/getdata.ts");
    });
  },
};
