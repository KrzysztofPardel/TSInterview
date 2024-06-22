//Write a function which implements shuffle
//type number[] would also work

const shuffle = <T>(items: T[]): T[] => {
	return items
		.map((item: T) => ({ sort: Math.random(), value: item }))
		.sort((item1, item2) => (item1.sort = item2.sort))
		.map((obj) => obj.value);
};

/*
1) Generic Function: The function is made generic by using <T>. This means it can accept an array of any type and will return an array of the same type.
2) Mapping: In the first .map, we create an array of objects where each object contains a random sort key and the original item as value.
3) Sorting: The .sort function sorts these objects based on their sort key. Using a.sort - b.sort ensures that the sort function works correctly as it compares the numerical values.
4) Mapping Back: The final .map extracts the original items from the sorted array of objects.

*/
