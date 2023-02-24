//Write a function that takes a user's age and determines if they are old enough to vote (age 18 or older).
// console.log(isEligibleToVote(20)) // Eligible to vote
// console.log(isEligibleToVote(18)) // Eligible to vote
// console.log(isEligibleToVote(17)) // Not eligible to vote
const isEligibleToVote = (age) => {
    if(age >= 18){
        console.log("yes you are eligible to vote");
    }
    else{
        console.log("no you are not eligible to vote");
    }
}
console.log(isEligibleToVote(20));
console.log(isEligibleToVote(18));
console.log(isEligibleToVote(17));
// Write a function that takes two numbers as input and determines which one is greater.
// console.log(isGreater(2, 5)) // 5 is greater than 2
// console.log(isGreater(10, 5)) // 10 is greater than 5
const isGreater = (number1,number2) => {
    const result = (number1>number2?`${number1} is greater than ${number2}`:`${number2}  is greater than ${number1}`)
    return result;
}
console.log(isGreater(2,5));
console.log(isGreater(10,5));
// Write a function that takes a number as input and determines if it is positive or negative.
// console.log(checkNum(9)) // Positive Number
// console.log(checkNum(-8)) // Negative Number
// console.log(checkNum(22)) // Positive Number
const checkNum = inputNumber => {
    const result = (inputNumber>0?"Positive Number":"Negative Number");
    return result;
}
console.log(checkNum(9));
console.log(checkNum(-8));
console.log(checkNum(22));
//Write a function that takes a number as input and determines if it is even or odd.
// console.log(isEvenOdd(5)) // Odd Number
// console.log(isEvenOdd(8)) // Even Number
// console.log(isEvenOdd(10)) // Even Number
const isEvenOdd = numberInput => {
    const result = (numberInput%2===0?"Even Number":"Odd Number");
    return result;
}
console.log(isEvenOdd(5));
console.log(isEvenOdd(8));
console.log(isEvenOdd(10));
// Write a function that takes a string as input and determines if it contains the letter 'a' or ‘A’.
    // console.log(checkForAlphabetA("Tanay")) // Includes a 
    // console.log(checkForAlphabetA("Jeep")) // Does not include a 
    // console.log(checkForAlphabetA("Jane")) // Includes a 
const checkForAlphabetA = stringInput => stringInput.includes("A") ||stringInput.includes("a")?"Includes a":"Does not include a"
console.log(checkForAlphabetA("Tanay"))
console.log(checkForAlphabetA("Jeep"))
console.log(checkForAlphabetA("Jane"))

// Write a function that takes a string as input and determines if it is longer than 5 characters.
// console.log(checkLength("Programming")) // more than 5 characters 
// console.log(checkLength("Jeep")) // less than 5 characters 
const checkLength = stringInput => stringInput.length > 5?"more than 5 characters":"less than 5 characters"
console.log(checkLength("Programming")) ;
console.log(checkLength("Jeep"));

// Write a function that takes a number as input and determines if it is between 1 and 10.
    // console.log(isBetweenOneAndTen(5)); // true
    // console.log(isBetweenOneAndTen(11)); // false
const isBetweenOneAndTen = numberInput =>  numberInput > 0 && numberInput <10  
console.log(isBetweenOneAndTen(5));
console.log(isBetweenOneAndTen(11));
// Write a function that takes a string as input and determines if it contains the word "hello".
// console.log(isHelloPresent("Hello World")) // true
// console.log(isHelloPresent("World")) // false
const isHelloPresent = inputString => inputString.includes(("Hello") ||("hello"))
console.log(isHelloPresent("Hello World"))
console.log(isHelloPresent("World"))
// Write a function that takes a number as input and determines if it is a multiple of 3.
const isMultipleOfThree = numberInput => numberInput%3 == 0;
console.log(isMultipleOfThree(5)); 
console.log(isMultipleOfThree(9));
// Write a function which takes in a number as input and returns it after multiplying by 10.
const multiplyByTen = numberInput => numberInput*10;
console.log(multiplyByTen(20));
console.log(multiplyByTen(40));
// Console individual values of the product object using object destructuring.
const product = {
    title: "iPhone",
    price: 5999,
    description: "The iPhone is a smartphone developed by Apple"
  }
const {title,price,description} = product;
console.log(title);
console.log(price);
console.log(description);
// Create an object book with properties title, author, and pages. Create a function getBookDetails that takes a book object as a parameter and returns if the book has more than 100 pages.
const book = {
    title:"Ejs",
    author:"xyz",
    pages:500
}
const getBookDetails = (object1) => object1.pages> 100
console.log(getBookDetails(book));
// Create a function changeOccupation that takes an object person and a string newOccupation as parameters, and changes the occupation property of the person object to the newOccupation. Log the person object to the console before and after calling the function.
const person = {
    name : 'Amit',
    age : 25,
    occupation : 'software engineer'
}
const changeOccupation = (object2,newOcupation) => {
    object2.occupation = newOcupation;
    //console.log(object2.occupation);
    return object2;
}
console.log(changeOccupation(person,'product manager'));
// Given an array numbers containing the numbers 1, 2, and 3. Use array destructuring to log each number to the console.
const numbers = [1,2,3];
const [a,b,c] = numbers;
console.log(a);
console.log(b);
console.log(c);
// Convert the given function into ES6 with least amount of characters.
const defaultParamsFunc = (a,b,c=4) => a*b*c;
console.log(defaultParamsFunc(3,1));
console.log(defaultParamsFunc(3,10)); 
// Create an object person with two properties, "name" and "age" and then updates the "age" property to a new value. Initial age should be 30.
//using object-shorthand notation
const name1 = "Shresta";
const age1 = 30;
const person1 = { name1, age1:35 };
console.log(person1.age1);
// Write a function that takes an object car and returns true if the car is a sports car (i.e. has a horsepower property greater than or equal to 300)
const isSportsCar = object3 => object3.horsepower  >= 300;
const car1 = { make: 'Porsche', model: '911', horsepower: 450 };
const car2 = { make: 'Toyota', model: 'Camry', horsepower: 200 };
console.log(isSportsCar(car1));
console.log(isSportsCar(car2)); 
// Write a function that takes an object person and a number num as arguments and returns true if the person's age plus num is greater than or equal to 21. Otherwise, it should return false.
const isEligible = (person2,num) => person2.age + num >= 22;
const person3 = { name: 'Ajay', age: 20 };
console.log(isEligible(person3, 1)); 
console.log(isEligible(person3, 2)); 
// Write a function that takes an object blog and returns true if the blog has more than 1000 views (i.e. has a views property greater than 1000)
const getViews = blog => blog.views > 1000;
const blog1 = {title: 'How to Learn JavaScript', author: 'John Doe', views: 1430};
const blog2 = {title: '10 Reasons to Start a Blog', author: 'Jane Smith', views: 500};
console.log(getViews(blog1));
console.log(getViews(blog2));
// Swap the values of two variables using array destructuring.
let a1 = 1;
let b1 = 2;
[a1,b1] = [b1,a1];
console.log(a1);
console.log(b1);
// Convert this function into ES6 with least amount of characters.
const add = (a=30,b=0) => a+b;
console.log(add(2,3));
// Write an ES6 function combineObjects with least amount of characters which merges two objects into one.
const combineObj = (obj1,obj2) => ({...obj1,...obj2});
const obj1 = {a: 1, b: 2};
const obj2 = {c: 3, d: 4};
console.log(combineObj(obj1,obj2));
// 8. Convert the function getData, into an ES6 function with last amount of characters. Hint: Destructuring
const getData = object4 => {
    const {name,address} = object4;
       console.log(name,address.city)}
const person2 = {
    name: 'John Doe',
    address: {
      city: 'New York',
      state: 'NY',
    },
  };
getData(person2);

// Write a function that takes a string as input and returns the string in all uppercase letters.
const stringToUpperCase = stringInput => stringInput.toUpperCase();
console.log(stringToUpperCase("hello")); // "HELLO"
// Write a function that takes two strings as input and concatenates them together.
const concatenateStrings = (input1,input2) => `${input1}${input2}`;
console.log(concatenateStrings("hello", "world")); 
// Write a function that takes an array and returns the last element in the array.
const lastElement = array => array.pop();
console.log(lastElement([1,2,3,4,5]));
// Write a function that takes an array and returns the first element of the array.
const firstElement = array => array.shift();
console.log(firstElement([1,2,3,4,5]));
// Write a function that takes an array and a number and returns the sum of first element and the number.
const sumFirstElement = (array,number) => number+array.shift();
console.log(sumFirstElement([1, 2, 3], 5)); 
// Write a function that takes an array and returns the sum of first and last element.
const sumFirstAndLast = (array) => array.shift() + array.pop();
console.log(sumFirstAndLast([1, 2, 3, 4, 8])); 
// Write a function that takes an object representing a person's information (name, age, occupation) and returns a template literal that includes the person's name and age in a sentence.
const personInfo = object => `${object.name} is ${object.age} years old`;
const person4 = { name: 'John', age: 25, occupation: 'Software Engineer' }
const person5 = { name: 'Jane', age: 45, occupation: 'Data Analyst' }
console.log(personInfo(person4));
console.log(personInfo(person5)); 
// Create a function that takes an array of strings as an argument and returns a string that includes the number of items in the array and the first and last items.
const formatArray = items =>{
    let numberOfArrayElements=0 ;
    for(let i=0;i<items.length;i++){
        numberOfArrayElements+=1;  
    }
    const message = `The array has ${numberOfArrayElements} items,and the first item is "${items[0]}", and the last item is "${items[numberOfArrayElements-1]}"  `;
    return message;
}
const items = ['apple', 'banana', 'orange'];
const message = formatArray(items);
console.log(message);
// Create a function that takes a product object as an argument and returns a string that includes the product name, price, and a message based on whether it is in stock or not.
const formatProduct = product =>{
    const {name,price,inStock} = product;
   const message =  `${name} costs INR ${price} and is in stock`;
   return message;
}
const product1 = {
    name: 'Socks',
    price: 249,
    inStock: true,
  };
  
  const message1 = formatProduct(product1);
  console.log(message1);
//   Write a function findPerson that takes an array of person objects and a name as parameters and returns the object with the matching name, or null if not found.
const findPerson = (arrayOfObjects,name2) => {
for(let i=0;i<arrayOfObjects.length;i++){
    if(name2 === arrayOfObjects[i].name){
        return arrayOfObjects[i];
    }
}
return null;
}
console.log(findPerson([{ name: 'Amay', age: 25 }, { name: 'Akhil', age: 25 }], "Akhil"))
// Write a function that uses destructuring to extract the first two elements from an array, and returns them in an object with keys 'first' and 'second'.
const pickFirstAndSecond = array => {
    const [first,second] = array;
    const obj3 = {first,second};
    return obj3;

}
console.log(pickFirstAndSecond(["orange", "banana", "apple"]));
// Convert the following code to ES6+ syntax with minimum number of characters.
const startsWithA = str => str.charAt(0) === 'A';
console.log(startsWithA("Akshita"));
console.log(startsWithA("Jeena"));
// Write an ES6 function to return only the first character of the given array.
const printFirstCharacter = array1 => array1[0];
console.log(printFirstCharacter([1, 2, 3, 5, 8]));
// Write a function to return the last 5 characters as an array from the given array.
const printLastFive = array2 => array2.slice(array2.length-5);
console.log(printLastFive([0, 1, 1, 2, 3, 5, 8]));
// Write an ES6 function to return the second element of the given array by multiplying 20 to it.
const printSecondCharacter = array3 => array3[1]*20;
console.log(printSecondCharacter([1, 2, 3, 5, 8]));
// Write an ES6 function to return the second element of the given array by adding “Hello” before it.
const sayHello = array4 => `Hello ${array4[1]}`;
console.log(sayHello(["Akshay", "Sweta", "Prerana", "Vinay"]));
// Write an ES6 function to return sum of all numbers at even indices of the given array.
const sumOfEvenIndices = array5 =>{
    let sum =0;
   for(let i=0;i<array5.length;i++){
    if(i%2 === 0){
        sum += array5[i];
    }
   }
   return sum;
}
console.log(sumOfEvenIndices([2, 4, 3, 7, 1, 5])) 
console.log(sumOfEvenIndices([12, 14, 3, 27, 15, 25])) 
// Write an ES6 function to return the sum of only first 2 elements of the array 
const sumFirstTwoElements = array5 => array5[0]+array5[1];
console.log(sumFirstTwoElements([10, 4, 3, 7, 1, 5])) 
console.log(sumFirstTwoElements([12, 14, 3, 27, 15])) 
// Write an ES6 function to return the first element which is a multiple of 5 in the given array.
const printMultipleOfFive = array6 => {
    for(let i=0;i<array6.length;i++){
        if(array6[i]%5 ==0){
            return array6[i];
        }
    }
}
console.log(printMultipleOfFive([7, 4, 10, 7, 5, 3]))
console.log(printMultipleOfFive([7, 5, 10, 7, 15, 3]))
// Create a function which takes in the given object and returns another object only with the properties postalCode and city in it.
const getAddress = obj4 => {
    const {postalCode , city} = obj4;
    const obj5 = {postalCode,city};
    return obj5;
}
const userData = {
    name: 'Jane Doy',
    postalCode: '12134',
    city: 'Germany',
  }
  
  console.log(getAddress(userData));
const getUserData = obj6 => {
    let {  name, age, email} = obj6;
     name = name ?? "unknown";
     age = age ?? 0
     email = email ??  "no email provided";
     const obj7 = {name,age,email};
     return obj7;
}
const userData1 = {
    name : null,age:null,email:"" ,
}
console.log(getUserData(userData1));









