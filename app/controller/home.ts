import { Controller } from 'egg';
/**
 * @Controller home
 */
export default class HomeController extends Controller {
  public async index() {
    const { ctx } = this;
    ctx.body = await ctx.service.test.sayHi('egg11');
  }
}
