import { Controller } from 'egg';

type ResType = {
  data?: any;
  code?: number;
  message?: string;
};

export default abstract class BaseController extends Controller {
  protected responseData(res: ResType): void {
    console.log('this', this);
    this.ctx.set('Content-Type', 'application/json');
    this.ctx.body = {
      data: res?.data ?? null,
      code: res?.code ?? 200,
      message: res?.message ?? 'success',
    };
    // console.log('this.ctx.body', this.ctx.body);
  }
}
