// import jwt from 'jsonwebtoken';
// import { IHelper } from 'egg';

export default {
  jwtSign() {
    /**
     * payload 是一个json对象或者是一个可以json化的buffer或字符串 这个对象可以存储用户id,会话信息等,这里的信息都是可以使用
     * secretOrPrivateKey是加密的key或者叫做密匙,不知道密匙是无法解析payload参数的.
     * options 参数 是一个json对象
     * expiresIn : 表示有效期  不带单位默认为秒  如带单位如: "2 days", "10h", "7d"
     */
    // jwt.sign(payload, secretOrPrivateKey, [options, callback])
  },
  jwtVerify() {
    /**
     * token 请求中拿到的接口参数
     * secretOrPublicKey 是加密的key或者叫做密匙,不知道密匙是无法解析payload参数的.
     */
    // jwt.verify(token, secretOrPublicKey, [options, callback])
  },
};
