import { EggPlugin } from 'egg';

const plugin: EggPlugin = {
  // mongodb
  mongoose: {
    enable: true,
    package: 'egg-mongoose',
  },
};

export default plugin;
