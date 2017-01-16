// async await
// var sleep = time => {
//     return new Promise(resolve => {
//         setTimeout(() => {
//             // 返回 ‘ok’
//             resolve('ok');
//         }, time);
//     });
// };
// var start = async () => {
//     const result = await sleep(3000);
//     console.log(result); // 收到 ‘ok’
// };
// start();
// // object rest
// console.log({ ...{ a: 1, b: 2 }, a: 3, c: 4 }); // { a: 3, b: 2, c: 4 }

// var a =[];
// for (let i = 0; i < 10; i++) {
//     a[i] = function () {
//         console.log(i);
//     }
// }
// a[6]();

// function bar(x = 2, y = x) {
//     console.log([x, y]);
// }

// bar();

// function f1() {
//     let n = 5;
//     if (true) {
//         let n = 10;
//     }
//     console.log(n);
// }
// f1();

// function f() {
//     console.log('i am outside!');
// }
// (function () {
//     function f() {
//         console.log('i am inside!');
//     }
//     if (false) {}
//     f();
// }());

// const [a, b, c] = [1,2,3];
// console.log(a)

// let [fpp, [[bar], baz]] = [1, [[2], 3]];
// console.log(bar);

// let [head, ...tail] = [1,2,3,4];
// console.log(tail);

// let [x, y, ...z] = ['a'];
// console.log(z)

// let [a, [b], d] = [1, [2, 3], 4]
// console.log(a,b,d)

// var [foo = true] = [];
// console.log(foo)

// var [x, y = 'b'] = ['a'];
// console.log(y)

// function f() {
//     console.log('aaa');
// }
// let [x = f()] = [1];
// console.log(x)

// let [x =1, y = x] = [1, 2]
// console.log(x,y)

// var { bar, foo, baz } = { foo: 'aaa', bar: 'bbb' };
// console.log(bar, foo, baz)

// let obj = { first: 'hello', last: 'world' };
// let { first: f, last: l } = obj;
// console.log( f, l);

// var obj = {
//     p: [
//         'Hello',
//         { y: 'world' }
//     ]
// };
// var { p: [x, { y }] } = obj;
// console.log(x, y)

// var node = {
//     loc: {
//         start: {
//             line: 1,
//             column: 5
//         }
//     }
// };
// var { loc: { start: { line } } } = node;
// console.log(line)
// console.log(loc);
// console.log(start);

// var { x, y =5 } = { x: 1 };
// console.log(x, y);

// var {x:y = 3} = { x:5 };
// console.log(y)

// var arr = [1, 2, 3];
// var {0: first, [arr.length - 1]: last} = arr;
// console.log(first, last);

// const [a, b, c, d, e] = 'hello';
// console.log(a, b, c, d, e);

// let {length: len} = 'hello';
// console.log(len)

// function add([x, y]) {
//     return x + y;
// }
// console.log(add([1,2]));

// const tt = [[1, 2], [3, 4]].map(([a, b]) => a + b);
// console.log(tt)

// function move({x = 0, y = 0} = {}) {
//     return [x, y]
// }

// console.log(move({x: 3, y: 8}));
// console.log(move({x: 3}));
// console.log(move({}));
// console.log(move())

// function move({x, y} = { x: 0, y: 0}) {
//     return [x, y];
// }
// console.log(move({x: 3, y: 8}));
// console.log(move({x: 3}));
// console.log(move({}));
// console.log(move())

// const aa = [1, undefined, 3].map((x = 'yes') => x);
// console.log(aa);

// function example() {
//     return [1, 2, 3];
// }
// var [a, b, c] = example();
// console.log(a,b,c)

// function example() {
//     return {
//         foo: 1,
//         bar: 2
//     };
// }
// var { foo, bar } = example();
// console.log(foo,bar);

// var jsonData = {
//     id: 42,
//     status: 'ok',
//     data: [890, 9090]
// };
// let { id, status, data: number } = jsonData;
// console.log(id, status, number);

// jQuery.ajax = function(url, {
//     asny: true,
//     beforSend = function () {},
//     cache = true,
//     complete = function () {},
//     crossDomain = false,
//     global  = true
// }) {

// }

// var map = new Map();
// map.set('first', 'hello');
// map.set('second', 'world');
// for (let [key, value] of map) {
//     console.log(key + ' is ' + value);
// }

// var s = 'Hello world!';
// console.log(s.startsWith('world', 6));
// console.log(s.endsWith('Hello', 5));
// console.log(s.includes('Hello', 5));

// console.log('x'.padStart(5, 'ab'));
// console.log('x'.padEnd(5, 'ab'));

// const tmpl = addrs => `
//   <table>
//   ${addrs.map(addr => `
//     <tr><td>${addr.first}</td></tr>
//     <tr><td>${addr.last}</td></tr>
//   `).join('')}
//   </table>
// `;
// const data = [
//     { first: '<Jane>', last: 'Bond' },
//     { first: 'Lars', last: '<Croft>' },
// ];

// console.log(tmpl(data));

// console.log(String.raw`Hi\n${2+3}!`)

// function codePointLength(text) {
//     var result = text.match(/[\s\S]/gu);
//     return result ? result.length : 0;
// }
// var s = '囍囍';
// console.log(s.length);
// console.log(codePointLength(s));

// const TOKEN_Y = /\s*(\+|[0-9]+)\s*/y;
// const TOKEN_G  = /\s*(\+|[0-9]+)\s*/g;

// function tokenize(TOKEN_REGEX, str) {
//   let result = [];
//   let match;
//   while (match = TOKEN_REGEX.exec(str)) {
//     result.push(match[1]);
//   }
//   return result;
// }

// console.log(tokenize(TOKEN_Y, '3 + 4'))
// console.log(tokenize(TOKEN_G, '3 + 4'))


// console.log(Array.from('hello'));

// console.log(Array.from([1,2,3]));

// function foo(a) {
//     var args = [...arguments];
//     console.log(args);
// }
// foo(1);

// let namesSet = new Set(['a', 'b']);
// console.log(Array.from(namesSet));

// console.log(Array.from({ length: 3 }))

// console.log(Array.from([1,2,3], (x) => x*x));

// console.log(Array.from([1,,2,,3], (n) => n || 0))


// console.log([1, 2, 3, 4, 5].copyWithin(0, 3, 1));

// var i32a = new Int32Array([1,2,3,4,5]);
// console.log(i32a.copyWithin(0,2))

// [1, 4, -5, 10].find((n) => n < 0)

// for (let index of ['a', 'b'].keys()) {
//     console.log(index);
// }

// for (let elem of ['a', 'b'].values()) {
//     console.log(elem);
// }

// const contain = (() =>
//     Array.prototype.includes
//     ? (arr, value) => arr.includes(value)
//     : (arr, value) => arr.some(el => el ===value)
// )();
// contain(['foo', 'bar'], 'baz');

// function log(x, y = 'world') {
//     console.log(x, y);
// }
// console.log('hello');
// console.log('hello', 'china');
// console.log('hello', '')

// function foo({x, y = 5}) {
//     console.log(x, y);
// }
// console.log(foo({}));
// console.log(foo({x: 1}));
// console.log(foo({x: 1, y: 2}));
// console.log(foo());

// function fetch(url, { body = '', method = 'GET', headers = {} }) {
//     console.log(method);
// }

// fetch('http://example.com', {})

// function fetch(url, { method = 'GET' } = {}) {
//     console.log(method);
// }
// fetch('http://example.com')

// function m1({ x = 0, y = 0 } = {}) {
//     console.log([x, y]);
// }

// function m2({ x, y } = { x: 0, y: 0 }) {
//     console.log([x, y]);
// }

// m1()
// m2()
// m1({x: 3, y: 8})
// m2({x: 3, y: 8})
// m1({x: 3})
// m2({x: 3})
// m1({})
// m2({})
// m1({z: 3})
// m2({z: 3})

// console.log((function (a) {}).length)
// console.log((function(a = 5) {}).length)
// console.log((function(a, b, c = 5 ){}).length)

// let foo = 'outer';
// function bar(func = x => foo) {
//     let foo = 'inner';
//     console.log(func())
// }
// bar()

// var x = 1;
// function foo(x, y = function() { x = 2; console.log(x) }) {
//     var x= 3;
//     y();
//     console.log(x);
// }
// foo()

// function add(...values) {
//     let sum = 0;
//     for (var val of values) {
//         sum += val;
//     }
//     console.log(sum);
// }
// add(2,4,5);

// const sortNumber = (...numbers) => numbers.sort();
// console.log(sortNumber(3,1,5,2));

// function push(array, ...items) {
//     items.forEach(function(item) {
//         array.push(item);
//         console.log(item);
//     });
// }
// var a = [];
// push(a, 1, 3, 4)

// console.log(...[1, 2, 3])
// console.log(1, ...[2, 3, 4])

// var arr1 = [1, 2, 3];
// var arr2= [4, 3, 5];
// console.log(arr1.push(...arr2))
// console.log(arr1)

// var arr1 = ['a', 'b'];
// var arr2 = ['c'];
// var arr3 = ['d', 'e'];
// console.log([...arr1, ...arr2, ...arr3]);

// let arrayLike = {
//     '0': 'q',
//     '1': 'b',
//     '3': 'c',
//     length: 3
// };
// let arr = [...arrayLike];
// console.log(arr)

// let map = new Map([
//     [1, 'one'],
//     [2, 'two'],
//     [3, 'three']
// ]);
// let arr = [...map.keys()];
// console.log(arr)

// var go = function*(){
//     yield 1;
//     yield 2;
//     yield 4;
// };
// console.log([...go()])

// var fun1 = function() {};
// console.log(fun1.name)

// function foo() {
//     setTimeout(() => {
//         console.log('id:', this.id);
//     }, 100)
// }
// var id = 21;
// foo.call({ id: 42 })

// function Timer() {
//     this.s1 = 0;
//     this.s2 = 0;
//     setInterval(() => this.s1++, 1000);
//     setInterval(function () {
//         this.s2++;
//     },1000);
// }
// var timer = new Timer();
// setTimeout(() => console.log('s1: ', timer.s1), 3100);
// setTimeout(() => console.log('s2:', timer.s2), 3100)

// function foo() {
//     return () => () => () => {
//         console.log('id:', this.id);
//     }
// }
// var f = foo.call({id: 1});
// f.call({id: 2})()();
// f().call({id: 3})();
// f()().call({id: 4});


// function foo() {
//     setTimeout(() => {
//         console.log('args:', arguments);
//     }, 100);
// }
// foo(2,4,6,8);

// const plus1 = a => a + 1;
// const mults = a => a * 2;
// mults(plus1(5));

// var o = {
//     method() {
//         return 'hello';
//     }
// }


// var birth = '2000/01/01';
// var Person = {
//     name: '张三',
//     birth,
//     hello() {
//         console.log('我的名字是：',this.name);
//     }
// } 
// console.log(Person)

// function getPoint() {
//     var x = 1;
//     var y = 10;
//     return {x, y};
// }
// console.log(getPoint());

// var ms = {};
// function getItem(key) {
//     return key in ms ? ms[key] : null;
// }

// function setItem(key, value) {
//     ms[key] = value;
// }

// function clear() {
//     ms = {};
// }

// module.export = { getItem, setItem, clear };


// var lastWord = 'last word';

// var a = {
//     'first word': 'hello',
//     [lastWord]: 'world'
// };

// console.log(a['first world']);
// console.log(a[lastWord]);
// console.log(a['last word'])

// var person = {
//     sayName() {
//         console.log(this.name);
//     },
//     get firstName() {
//         return 'Nicholas';
//     }
// };
// console.log(person.sayName.name)
// console.log(person.firstName.name)
// console.log((new Function()).name)

// var v1 = 'abc';
// var v2 = true;
// var v3 = 12;
// var obj = Object.assign({}, v1, v2, v3);
// console.log(obj);

// let proto = {};
// let obj = { x: 10 };
// Object.setPrototypeOf(obj, proto);
// proto.y = 20;
// proto.z = 40;

// console.log(obj.x)
// console.log(obj)

// let {keys, values, entries} = Object;
// let obj = {a: 1, b: 2, c: 3};
// for(let key of keys(obj)) {
//     console.log(key);
// }
// for(let value of values(obj)) {
//     console.log(value);
// }
// for(let [key, value] of entries(obj)) {
//     console.log([key, value]);
// }

// var obj = {100: 'a', 2: 'b', 7: 'c'}
// console.log(Object.values(obj))

// let {x, y, ...z} = {x: 1, y: 2, a: 3, b: 4}
// console.log(z)


// var s = new Set();
// [2, 3, 4, 5, 1, 2, 3].map(x => s.add(x));
// for (let i of s) {
//     console.log(i);
// }

// let set = new Set(['red', 'green', 'blue']);

// for(let item of set.keys()) {
//     console.log(item)
// }

// for(let item of set.values()) {
//     console.log(item)
// }

// var serialize = require('serialize-javascript');
// console.log(serialize({a: '1', b: '2'}))


// class A {
//     p() {
//         return 2;
//     }
// }

// class B extends A {
//     constructor() {
//         super();
//         console.log(super.p());
//     }
// }

// let b = new B();

// class A {
//     constructor() {
//         this.p = 2;
//     }
// }

// class B extends A {
//     get m() {
//         return super.p;
//     }
// }
// let b = new B();
// console.log(b.m);


// class A {}
// A.prototype.x = 2;

// class B extends A {
//     constructor() {
//         super();
//         console.log(super.x);
//     }
// }
// let b = new B();


// class A {
//     constructor() {
//         this.x = 1;
//     }
//     print() {
//         console.log(this.x);
//     }
// }
// class B extends A {
//     constructor() {
//         super();
//         this.x = 2;
//     }
//     m() {
//         super.print();
//     }
// }
// let b = new B();
// b.m();

class A {
    constructor() {
        this.x = 1;
    }
}
class B extends A {
    constructor() {
        super();
        this.x = 2;
        super.x = 3;
        console.log(super.x);
        console.log(this.x);
    }
}
let b = new B();