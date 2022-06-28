
const port = process.env.PORT || 3300;
type a = {a: string};
type b =  {b: number};
type c = a | b;
let san: c = {a: 'jk;'}
san.a = 'ljk;'
console.log(san)
function row(obj: Object): Object {
  return obj;
}
console.log(row({a: 123}))
let test: string = "hello world"; test = '23';
 function func(a: number, b: number){ return a+b }
 func(1,2)
 console.log(typeof san.a)
 const symbol = Symbol('kj;j')
 let bool: any;
 console.log(typeof bool)
 let person: [string, number] = ["Alan", 20];
 console.log(typeof person)
 let big = BigInt(12334)
 console.log(typeof big)

 let arr: number[] = [1, 2, 3];

//  enum Month { Jan, Feb, Mar, Apr }

//  enum Month { Jan=1, Feb=2, Mar=3, Apr=5 }

// enum Month = { Jan, Feb, Mar=3, Apr }

// enum Month { Jan='Янв', Feb='Фев', Mar, Apr='Апр' }

// enum Month { Jan=1, Feb=2, Mar, Apr=5 }

// enum Month { Jan, Feb='Фев', Mar, Apr='Апр' }

// enum Month = { Jan, Feb='Фев', Mar='Мар', Apr='Апр' }

enum Month { Jan=1, Feb=2, Mar, Apr='Апр' }
