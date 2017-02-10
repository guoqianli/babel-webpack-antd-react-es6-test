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
