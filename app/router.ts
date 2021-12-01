import { Application } from 'egg';

export default (app: Application) => {
  const { controller, router } = app;

  router.get('/user', controller.user.registerUser);
};
