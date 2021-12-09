import { Application } from 'egg';

export default (app: Application) => {
  const { controller, router } = app;

  router.get('/user', controller.user.registerUser);
  router.get('/user/add', controller.user.addUser);
};
