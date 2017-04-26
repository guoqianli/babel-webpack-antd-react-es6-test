import { ajaxJq, ajaxPromise } from './common';

const curry = func => (uri, opts) => func(uri, opts);

// 通过传给curry函数不同的参数，可以自由切换jq和promise的封装方法
// const ajax = curry(ajaxJq);
const ajax = curry(ajaxPromise);

// 登录
export const loginPost = opts => ajax(`login/${opts.param.username}/post`, opts);
//获取在线用户数量
export const userCountGet = opts => ajax('session/unexpire-user-count/get', opts);

export const getUserId = () => {
  return new Promise((resolve, reject) => {
    Y.io('/userid', {
      on: {
        success: (id, res) => {
          const o = JSON.parse(res);
          if (o.status === 1) {
            resolve(o.id);
          } else {
            // 请求失败，返回错误信息
            reject(o.errorMsg);
          }
        }
      }
    });
  });
};

export const getUserMobileById = (id) => {
  return new Promise((resolve) => {
    Y.io(`/usermobile/${id}`, {
      on: {
        success: (i, o) => {
          resolve(JSON.parse(o).mobile);
        }
      }
    });
  });
};

getUserId.then((id) => {
  getUserMobileById(id);
  // do sth with id
}, (error) => {
  console.log(error);
}).then((mobile) => {
  console.log(mobile);
  // do sth else with id
}, (error) => {
  // getUserId或者getUerMobileById时出现的错误
  console.log(error);
});
