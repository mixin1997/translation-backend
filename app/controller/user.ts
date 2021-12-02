import BaseController from './base';
/**
 * @Controller user
 */

export default class UserController extends BaseController {
  // 注册用户
  public async registerUser() {
    // const { username, password } = this.ctx.request.query;
    // console.log('this.ctx.request', this.ctx.request.query.username);
    this.responseData({});
    // 注册用户
  }

  // 用户登录
  public async loginUser() {
    this.responseData({ data: ['121212'] });
    // 用户登录
  }
}
