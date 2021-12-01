import { Application } from 'egg';

export default (app: Application) => {
  const mongoose = app.mongoose;
  const Shame = mongoose.Schema;

  const UserShame = new Shame({
    password: { type: 'string' },
    username: { type: 'string' },
  });

  return mongoose.model('User', UserShame);
};
