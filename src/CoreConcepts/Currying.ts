//Wrtie a function which helps to achieve multiply(a)(b) and returns product of a and b

const multiply = (num1) => {
	return (num2) => {
		return num1 * num2;
	};
};

console.log(multiply(2)(3));
/*
the same as the above
const multiply = (num1) => (num2) => num1 * num2;
*/

//Create a curry function
//const curriedSum= curry(a,b,c)=>a+b+c;
const curry = function (fn) {
	var arity = fn.length; //arity-liczba arg w funkcji
	console.log('arity', arity);
	return function f1(...args) {
		if (args.length >= arity) {
			console.log('enough arguments');
			return fn(...args);
		} else {
			console.log('need more arguments');
			return function f2(...moreArgs) {
				var newArgs = args.concat(moreArgs);
				return f1(...newArgs);
			};
		}
	};
};
const curriedSum = curry((a, b, c) => a + b + c);
const partiallyCurriedSum = curriedSum(1);
console.log(partiallyCurriedSum(2, 3));

// usage of currying
const get = curry((property, object) => object[property]);
const getId = get('id');
const map = curry((fn, values) => values.map(fn));
const getIds = map(getId);
