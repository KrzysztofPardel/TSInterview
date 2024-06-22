//Find the number of occurences of minimum value in the list
// 1.Find the minimum value inside an array
// 2. Calculate how many times it is present in the array

let arr1 = [1, 1, 2, 3, 4, 5, 6, 2, 1, 1];

export const occurencesCounter = (arr: number[]) => {
	//Find the smallest value in the array
	const minValue = Math.min(...arr);

	//Calculate how many times it is present in the array
	const numOccurences = arr.filter((el: number) => el === minValue).length;
	return numOccurences;
	/*
	// let numOccurences = [];
	// const occurences = arr.forEach((el: number) => {
	// 	el === minValue ? numOccurences.push(el) : null;
	// });
	// return numOccurences.length;
	*/
};

console.log(occurencesCounter(arr1));
