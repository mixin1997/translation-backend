import BaseController from './base';
// user模版
// TODO - 增删改查
/**
 * 增加用户
 * 删除用户
 * 更新用户
 * 用户权限
 * 用户鉴权
 * swagger配置
 */
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
  // 进行权限验证
  public async loginUser() {
    this.responseData({ data: ['121212'] });
    // 用户登录
  }

  /**
   * 新增用户
   */
  public async addUser() {
    // helper 自动添加到原型链上面
    // this.ctx.helper.jwtVerify()
    await this.service.user.add();
    this.responseData({ data: '新增用户成功！' });
  }

  /**
   * 删除用户
   */
  public async deleteUser() {
    // 删除用户相关操作
  }

  /**
   * 编辑用户
   */
  public async editorUser() {
    // 编辑用户
  }
}
