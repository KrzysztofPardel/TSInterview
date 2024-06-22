//Write a function which can concatenate 2 arrays

// Approach 1
const concatFunctions = (arrOne, arrTwo) => {
	return arrOne.concat(arrTwo);
};
// Approach 2

const mergeFunctions = (arrOne, arrTwo) => {
	return [...arrOne, ...arrTwo];
};

const arrayOne = [1, 2, 3];
const arrayTwo = [4, 5, 6];

const result = concatFunctions(arrayOne, arrayTwo);
const merged = mergeFunctions(arrayOne, arrayTwo);

console.log(merged);
console.log(result);

/*
when there is need to concatenate more arrays we could do sth like this:

arrOne.concat(arrTwo,arrThree);


*/
