import { EggPlugin } from 'egg';

const plugin: EggPlugin = {
  // mongodb
  mongoose: {
    enable: true,
    package: 'egg-mongoose',
  },
  // swaggerdoc swagger 文档
  swaggerdoc: {
    enable: false,
    package: 'egg-swagger-doc',
  },
};

export default plugin;
