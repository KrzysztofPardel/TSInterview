//What will the result be?

// Question 1
console.log(foo);
foo = 1;
//error- because foo is neither devlared or defined as a variable

//Question 2
console.log(foo);
var foo = 2;
/*
the same as 
var foo;
console.log(foo);
foo = 2;
*/
//undefined

//Question 3
foo = 3;
console.log(foo);
var foo;
/*
to samo co:
var foo;
foo = 3;
console.log(foo);
*/
// 3 - correct answer
