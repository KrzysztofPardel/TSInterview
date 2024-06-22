// Write a function which get's an array and an element, and returns an array with this element at the end.
let arr = ['elephant', 'lion', 'panda', 'aplaca', 'sea lion'];
let el = 'shrimp';

const getArray = (array: string[], element: string) => {
	// array.push(el); //not safe approach becasue we are not modifying anything outside
	return [...array, element]; //safe approach
};

const appendNum = getArray(arr, el);
console.log(appendNum);
console.log(arr);

/*
Explanation
Approach 1: array.push(element)
Behavior: This method adds the element to the original array and returns the new length of the array.

Side Effects: It modifies the original array in place. This means that the original array is changed after this operation.

Mutability: This approach is not considered safe in terms of immutability because it directly modifies the input array. If the input array is used elsewhere in the code, those changes will be reflected there as well, potentially causing unintended side effects.

Approach 2: [...array, element]
Behavior: This method creates a new array that contains all the elements of the original array plus the new element at the end.

Side Effects: It does not modify the original array. Instead, it returns a new array with the new element added.

Immutability: This approach is considered safer in terms of immutability because it does not change the original array. It creates a new array, leaving the original one intact. This helps prevent unexpected side effects, especially in larger and more complex applications where maintaining the state of objects is crucial.
*/
