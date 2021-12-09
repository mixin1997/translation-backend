import { Application } from 'egg';

export default (app: Application) => {
  const mongoose = app.mongoose;
  const Shame = mongoose.Schema;

  const UserShame = new Shame({
    name: { type: String },
    // account: { type: String, required: true, unique: true },
    // password: { type: String },
    // level: { type: Number },
    // superId: { type: String, required: false },
    email: { type: String, match: new RegExp('^[A-Za-z0-9\u4e00-\u9fa5]+@[a-zA-Z0-9_-]+(.[a-zA-Z0-9_-]+)+$') },
    phone: { type: Number, length: 11 },
  });

  return mongoose.model('user11', UserShame);
};
