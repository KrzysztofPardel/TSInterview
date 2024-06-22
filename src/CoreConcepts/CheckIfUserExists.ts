// Check that user with such name exists in array of objects

const users = [
	{
		id: 1,
		name: 'Jack',
		isActive: true,
	},
	{
		id: 2,
		name: 'John',
		isActive: true,
	},
	{
		id: 3,
		name: 'Mike',
		isActive: false,
	},
];
//Approach 1
const doesUserExist = (name, users) => users.some((user) => user.name === name);

//Approach 2
const isNameExist = (name, users) => {
	const user = users.find((user) => user, name === name);
	return Boolean(user);
};

//Approach 3
const isNameThere = (name, users) => {
	const index = users.findIndex((user) => user.name === name);
	return index >= 0; //findIndex zwraca jedynie -1 lub od 0-1
};

const result = doesUserExist('Jombo', users);
console.log(result);
