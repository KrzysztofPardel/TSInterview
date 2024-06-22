//Create a counter function which has increment and getValue functionality

const privateCounter = () => {
	let count = 0; //provate value

	return {
		//the API of the function
		increment: (val) => {
			count += val;
		},
		getValue: () => {
			return count;
		},
	};
};

// How can we see 'closure' working here? increment and getValue have access to count even though it is not defined in them but in privateCounter.
// Closure has access to all the properties that were defined in itself and also before.

const counter = privateCounter(); //0
console.log(counter.getValue());
counter.increment(10); //
console.log(counter.getValue()); //

/*
You can check console.dir(counter.getValue()) in the console and see that inside it shows Scopes(3)

*/

// Task 2 Create a function storing a secret string, which shows it when the function is called
const privateSecret = () => {
	const secret = 'foo';
	return () => secret; //we do it so that secret is available outside
};

const getSecret = privateSecret(); //becasue we store our function privateSecret() in additional property, our const secret is a closure
console.log(getSecret());
