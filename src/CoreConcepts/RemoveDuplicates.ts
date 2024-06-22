//Remove all duplicates from an array
let withDuplicates = [1, 2, 3, 4, 5, 5, 3, 4, 6, 7, 2, 1];

// Approach 1
const uniqueArr = <T>(array: T[]): T[] => {
	return [...new Set(array)]; //set removes duplicate values by default
};
console.log(uniqueArr(withDuplicates));

// Approach 2
const removeDuplicates = <T>(array: T[]): T[] => {
	let filteredArray: T[] = [];
	array.filter((el) => {
		if (!filteredArray.includes(el)) {
			filteredArray.push(el);
		}
	});
	return filteredArray;
};
console.log(removeDuplicates(withDuplicates));

//Approach 3
const uniqArr = <T>(array: T[]): T[] => {
	return array.reduce((acc: T[], el: T) => {
		return acc.includes(el) ? acc : [...acc, el];
	}, []); //
};
/*
Initial Value ([]): The second argument to reduce is the initial value for acc. 
This is crucial because it defines the starting point for the accumulation. 
Here, the initial value is an empty array ([]), meaning the accumulation starts with an empty array.
*/

console.log(uniqArr(withDuplicates));
