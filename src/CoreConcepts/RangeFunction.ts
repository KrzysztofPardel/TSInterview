//Write a function which implement range
//range(1, 50);  which will supposedly provide an array with num from 1 to 50

// Approach 1
interface Range {
	first: number;
	last: number;
	start: number;
	end: number;
}

const range = (first: number, last: number) => {
	let arr = [];
	do {
		arr.push(first);
		first++;
	} while (first <= last);
	return arr;
};

console.log(range(1, 50));

const rangeFor = ({ start, end }: Range) => {
	const result = [];
	for (let i = start; i <= end; i++) {
		result.push(i);
	}
};

console.log(range(1, 50));

//Intro to Approach 3
// Stage1-generate empty array of 49 elements
Array(50 - 1);
// Stage2-get an array iterator
Array(50 - 1).keys();
//Stage3- getting the amount of elements between the start and end-48 elements;- this will log [0,1,2,3,....48]
[...Array(50 - 1).keys()];
//Stage4-we arr one to every element because sometimes the first element might not be a 0 - this will log [1,2,3,....49]
[...Array(50 - 1).keys()].map((el) => el + 1);

[...Array(48 - 41).keys()].map((el) => el + 41); //[[41,42,....47]

//Approach 3
const rangeArr = (start: number, end: number) => {
	return [...Array(end - start).keys()].map((el) => el + start);
};

/*
Generates an array with length equal to 'end-start'. All of the elements are undefined.
The keys() method returns a new array iterator object that contains the keys for each index in the array.

Since the array has end - start elements, keys() will generate an iterator for the indexes from 0 to end - start - 1

.map((el) => el + start): Finally, the map function is used to transform each element el in the array. Since the array contains numbers from 0 to end - start - 1,
adding start to each element shifts the range to start at the specified start value.

Let's look at an example to make this clearer:

If start is 3 and end is 7:

1)Array(7 - 3) creates an array of length 4: [undefined, undefined, undefined, undefined].
2).keys() creates an iterator that will yield 0, 1, 2, 3.
3)[...Array(7 - 3).keys()] converts this iterator into the array [0, 1, 2, 3].
4).map((el) => el + 3) transforms this array into [3, 4, 5, 6].
*/
