import { host } from './config';

// export function $(id) {
//     return document.getElementById(id);
// }

// 封装一下 $.ajax，暴露一个公用的 ajaxJq 方法出去
export const ajaxJq = (uri, opts = {}) => {
  $.ajax({
    type: opts.type || 'POST',
    url: host + uri,
    headers: { Authentication: opts.sid },
    dataType: 'json',
    data: opts.param,
    success: res => {
      opts.success.call(this, res);
    }
  });
};

// 用Promise封装$.ajax
export const ajaxPromise = (uri, opts = {}) => {
  return new Promise((resolve, reject) => {
    $.ajax({
      type: opts.type || 'POST',
      url: host + uri,
      headers: { Authentication: opts.sid },
      dataType: 'json',
      data: opts.param,
      success: res => {
        resolve(res);
      }
    });
  });
};


export const Promise = (fn) => {
  let state = 'pending';
  let value = null;
  const deferreds = [];

  const handle = (deferred) => {
    if (state === 'pending') {
      deferreds.push(deferred);
      return;
    }
    let cb = state === 'fulfilled' ? deferred.onFulfilled : deferred.onRejected;
    let ret = null;
    if (cb === null) {
      cb = state === 'fulfilled' ? deferred.resolve : deferred.reject;
      cb(value);
      return;
    }
    try {
      ret = cb(value);
      deferred.resolve(ret);
    } catch (e) {
      deferred.reject(e);
    }
  };

  this.then = (onFulfilled, onRejected) => {
    return new Promise((resolve, reject) => {
      handle({
        onFulfilled: onFulfilled || null,
        onRejected: onRejected || null,
        resolve,
        reject
      });
    });
  };

  const finale = () => {
    setTimeout(() => {
      deferreds.forEach((deferred) => {
        handle(deferred);
      });
    }, 0);
  };


  const resolve = (newValue) => {
    if (newValue && (typeof newValue === 'object' || typeof newValue === 'function')) {
      const then = newValue.then;
      if (typeof then === 'function') {
        // 把then方法给newValue用，并传入resolve参数
        then.call(newValue, resolve);
        return;
      }
    }
    value = newValue;
    state = 'fulfilled';
    finale();
    // 防止还没执行then先执行resolve，deferreds空无一物，会出错
  };

  const reject = (reason) => {
    state = 'rejected';
    value = reason;
    finale();
  };

  fn(resolve, reject);
};
