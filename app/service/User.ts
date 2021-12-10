import { Service } from 'egg';
import {} from 'egg-mongoose';

// 增删

export default class User extends Service {
  async login() {
    // this.ctx.model.User.
    // this.ctx.model.User.insertMany();
    // await
  }

  async add() {
    this.ctx.model.User.insertMany([{ name: 'mixin', email: 'mixin@yolanda.hk', phone: 15798089155 }]);
  }
}
