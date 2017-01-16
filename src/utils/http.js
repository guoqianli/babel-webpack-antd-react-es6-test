import { ajaxJq, ajaxPromise } from './common';

const curry = func => (uri, opts) => func(uri, opts);

// 通过传给curry函数不同的参数，可以自由切换jq和promise的封装方法
// const ajax = curry(ajaxJq);
const ajax = curry(ajaxPromise);

// 登录
export const loginPost = opts => ajax(`login/${opts.param.username}/post`, opts);
//获取在线用户数量
export const userCountGet = opts => ajax('session/unexpire-user-count/get', opts);