"use strict";
const port = process.env.PORT || 3300;
let san = { a: 'jk;' };
san.a = 'ljk;';
console.log(san);
function row(obj) {
    return obj;
}
console.log(row({ a: 123 }));
let test = "hello world";
test = '23';
function func(a, b) { return a + b; }
func(1, 2);
console.log(typeof san.a);
const symbol = Symbol('kj;j');
let bool;
console.log(typeof bool);
let person = ["Alan", 20];
console.log(typeof person);
let big = BigInt(12334);
console.log(typeof big);
let arr = [1, 2, 3];
//  enum Month { Jan, Feb, Mar, Apr }
//  enum Month { Jan=1, Feb=2, Mar=3, Apr=5 }
// enum Month = { Jan, Feb, Mar=3, Apr }
// enum Month { Jan='Янв', Feb='Фев', Mar, Apr='Апр' }
// enum Month { Jan=1, Feb=2, Mar, Apr=5 }
// enum Month { Jan, Feb='Фев', Mar, Apr='Апр' }
// enum Month = { Jan, Feb='Фев', Mar='Мар', Apr='Апр' }
var Month;
(function (Month) {
    Month[Month["Jan"] = 1] = "Jan";
    Month[Month["Feb"] = 2] = "Feb";
    Month[Month["Mar"] = 3] = "Mar";
    Month["Apr"] = "\u0410\u043F\u0440";
})(Month || (Month = {}));
