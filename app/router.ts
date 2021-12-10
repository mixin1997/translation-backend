import { Application } from 'egg';

export default (app: Application) => {
  const { controller, router } = app;

  // 对路由的封装
  // egg-router-plus 重新封装路由
  router.get('/user', controller.user.registerUser);
  router.get('/user/add', controller.user.addUser);
};
