import BaseController from './base';
/**
 * @Controller home
 */
export default class HomeController extends BaseController {
  public async index() {
    const { ctx } = this;
    ctx.body = await ctx.service.test.sayHi('egg111111');
  }
}
