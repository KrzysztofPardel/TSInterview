// 1. Write code to get array of names from given array of users
// 2. Get back only active users
// 3. Sort users by age descending

const users = [
	{
		id: 1,
		name: 'Jack',
		isActive: true,
		age: 20,
	},
	{
		id: 2,
		name: 'John',
		isActive: true,
		age: 18,
	},
	{
		id: 3,
		name: 'Mike',
		isActive: false,
		age: 30,
	},
];

//Part 1

let userNames = [];
let addNames = users.forEach((element) => {
	userNames.push(element.name);
});

console.log(userNames);

//Part 2

let activeUsers = [];
let addActive = users.map((element) => {
	if (element.isActive) {
		activeUsers.push(element.name);
	}
	return activeUsers;
});

console.log(activeUsers);

//Part 3
let ageOfUsers = [];

let sortAge = users.map((element) => {
	ageOfUsers.push(element.age);
	ageOfUsers.sort((a, b) => b - a);
	return ageOfUsers;
});

console.log(ageOfUsers);
