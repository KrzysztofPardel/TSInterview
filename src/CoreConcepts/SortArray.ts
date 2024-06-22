//Sort the array

//Approach 1
let arrNum = [1, 2, 4, 5, 6, 3, 7, 9, 8, 0];
const sortNumber = (arr) => {
	arr.sort((a, b) => a - b);
	return arr;
};

console.log(arrNum);
console.log(sortNumber(arrNum));

//Sort the array of objects by author's lastname
//
const books = [
	{ name: 'Harry Potter', author: 'Joanne Rowling' },
	{ name: 'Warcross', author: 'Marie Lu' },
	{ name: 'The Hunger Games', author: 'Suzanne Collins' },
];

books.sort((book1, book2) => {
	const authorLastName1 = book1.author.split('')[1];
	const authorLastName2 = book2.author.split('')[1];
	return authorLastName1 < authorLastName2 ? -1 : 1;
});

console.log(books);

//Zostanie posegregowane według alfabetycznie według nazwisk
