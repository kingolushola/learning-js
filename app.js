// // console.log('hello world');
// // console.log('welcome to class');
// // console.log('first class');


// // // JAVASCRIPT VARAIABLES AND VALUES
// // let x = 2;
// // const y = 4;
// // console.log(x);
// // console.log(y);

// // // // Convention in naming variables(var)
// // // // have a logical var name
// // // const b = 'Mubarak'
// // // const Firstname = 'Mubarak'
// // // // compound names - camelcasing
// // // const lastName = 'Funsho'
// // // // // illegal ( you can not start with number but you can start with dolars($)
// // // // const 1year = 2003(wrong)
// // // // const $year = 2003(right)

// // // // let country = 'nigeria'
// // // // const state = 'lagos'
// // // // console.log(country);
// // // // console.log(state);

// // const country = 'Nigeria'
// // let state = 'lagos'
// // console.log(country);
// // console.log(state);

// // // javascript data types-( primitive data type amd complex datatype)
// // // strings- text-quotes-strings
// // const firstName = "john";
// // const lastName = 'Doe';
// // const middleName = "owen";
// // const currentJob = "product Manager";
// // const email = "olusholaabiodun01@gmail.com";
// // //  string concatenation - joining of string
// // const fullname = firstName + " " + middleName + " " +  lastName;
// // console.log(fullname);
// // // you can message me on this email,olusholaabiodun01@gmail.com
// // const Email = " you can message me on this email " + email
// // console.log(Email);
// // // Getting Characters -
// // console.log(middleName[1]);
// // //  string lenght
// // console.log(firstName.length);
// // // String Method
// // // transform
// // console.log(fullname.toUpperCase());
// // console.log(fullname.toLowerCase());

// // // extracting parts of a string - slice substring
// // const email2 = "olushola@tevhstudio.com";
// // // string.slice[0, 8]
// // console.log(email2.slice(0, 8));
// // console.log(email2.slice(5, 12));

// // // string.substring(start,count of cters)
// // console.log(email2.substr(0, 12));

// // // replace string content - replace replaceALL
// // console.log(email2.replace("a", "$"));
// // console.log(email2.replaceAll("a", "$"));

// // // includes,indexof, lastindexof, trim,concat,
// // // trimStart, trimend, StartsWith, Endswith

// // console.log(email2.includes("olushola"));
// // console.log(email2.indexOf("a"));
// // console.log(email2.lastIndexOf("a"));
// // const user = "       olushola    ";
// // const password = "       12334568   ";
// // console.log(user.length, password.length);
// // const formattedUser = user.trim();
// // console.logformattedpassword = password.trimStart();
// // console.log("formattedpassword.length");
// // console.log(email2.startsWith("o"));
// // console.log(email2.endsWith(".com"));

// // // concat -appendix end eg
// // const job = "frontend"
// // // frontend developer
// // console.log(job.concat(" ", "Developer", " is Rare"));


// // //  template literal //zainab
// // const author = "Chinua Achebe";
// // const book = " Things Fall Apart";
// // const years = 1996;
// // // The book things Fall apart was wrtten by Chinua Achebe in the year 1996
// // const bookdescription =" The book " + book + " was written by " + author + " in the year " + years

// // console.log(bookdescription);
// // const bookdescription2 = `The book ${book} was written by ${author} in the year ${years}`

// // // // numbers
// // // maths operators- + - * / ** %
// // console.log(6 % 2); // 0
// // console.log(5 % 2); // 1

// // console.log(5 / 2); //2.5
// // // order of operation
// // // increase the value of total by 10
// // let total = 50;
// // total = total + 10;
// // console.log(total);

// // let likes = 0;
// // likes += 1;
// // likes += 1;
// // likes += 1;
// // likes++;
// // likes--;
// // console.log(likes);

// // // // boolean -True and false
// // console.log(true);

// // const country = "nigeria"
// // const continent = " africa"
// // let population = "106447400000"
// // console.log(country, continent, population);
// // const isIsland = false
// // const language = "English";
// // population /= 2;
// // console.log(population);
// // population++;
// // console.log(population);

// // // template literals
// // // description nigeria is in africa and its population of 106447400000 people speaks english

// // const description = ` ${country} is in ${continent} and its population of ${population} people speaks ${language} `
// // console.log(description);
// // // nigeria as a country speaks english
// // const descript = `${country} as a country speaks majorly ${language}`;
// // console.log(descript);
// // //   logical operators - < > <= >= ==
// // // = assignment
// // // == loose equality, ===strict

// // // logical operators and &&  or || not !
// // console.log(5 > 6 && 2 == 2);

// // console.log(6 > 7 || 2 === 2);


// // // type conversion and con coercion
// // // strings to numbers
// // const str = "90";
// // console.log(typeof str);
// // const converted = Number(str);
// // console.log(typeof converted);

// // //  numbers to strings
// // const num = 900000;
// // console.log(typeof num);
// // const converted2 = String(num);
// // console.log(typeof converted2);

// // // type coercion
// // const num1 = 8;
// // const num2 = 2;
// // const result = num1 / num2

// // console.log(num1 + num2);

// //  Null
// //  Undefined - undefined
// // let age = null
// // console.log(age, );



// // truthy and falsy value
// // truthy -
// //  and falsy values 0, null, undefined

// // control flow
// // conditional statement

// // // if(condition){code}
// // const password = "12345678"
// // if (password.length > 6) {
// // //     console.log("your password is strong");
// // }

// // if else
// // if(condition){
//     // code 1
// //}else{
// //code 2
// // }
// //
// // if (passsword.length > 6)
    
    
    

// // const country = "nigeria";
// // const continent = "africa";
// // const population = 5000000;
// // const isIsland = false;
// // const language = "english";

// // // sarah speaks english has less than 50 people and is not an island
// // // you should live in portugal
// // // portugal does not meet your criteria
// // if (language === "english" && population < 5000000000 && !isIsland) {
// //     console.log(`you should live in ${country}`);
// // } else {
// //     console.log(`${country} does not meet your criteria`);
// // }

// // const age = 18;
// // // >= 18
// // if (age >= 18) { console.log("you are an adult"); } else {
// //     console.log("you are not one");
// // }

// //
// //  if (condition)else if(another condition)else if(condition){}else{}

// const password = "23345566@";

// const numb = 9
// if (numb >= 0) console.log( `${numb} is a positive number`);
// else if (numb < 0) { console.log(`${numb} is a negative number`); }
// else { console.log("this is zero"); }

// //  EVEN OR ODD

// if (numb % 2 === 0) {
//     console.log("this is even");
// } else {
//     console.log("this is odd");
// }

// const agee = 34
// if (agee < 18) { console.log("welcome to the baby section"); }
// else if (agee <= 50) { console.log("welcome to the club"); }
// else
// { console.log("welcome to the vip section"); }

// // SWITCH STATEMENT
// const day = 7;
// switch (day) {
//     case 1:
//         console.log("MONDAY");
//         break;
//     case 2:
//         console.log("TUESDAY");
//         break;
//     case 3:
//         console.log("WEDNESDAY");
//         break;
//     case 4:
//         console.log("THURSDAY");
//         break;
//     case 5:
//         console.log("FRIDAY");
//         break;
//     case 6:
//         console.log("SATURDAY");
//         break;
//     case 7:
//         console.log("SUNDAY");
//         break;
//         default:
//         console.log("NOT A VALID DAY");
//         break;
// }
    

// const grade = "a";
// switch (grade) {
//     case "A":
//     case "a":
//         console.log("EXCELLENT");
//         break;
//     case "B":
          
//         console.log("VERY GOOD");
//         break;
//     case "C":
         
//         console.log("GOOD");
//         break;
//     case "D":
         
//         console.log("FAIR");
//         break;
//     case "E":
        
//         console.log("POOR");
//         break;
//     default:
//         console.log("NOT A VALID GRADE");
//         break;
    
// bmi = mass / height ** 2

// const marksHeight = 1.69;
// const marksWeight = 78;
// const johnsHeight = 1.95;
// const johnsWeight = 92;

// const marksBmi = marksWeight / marksHeight ** 2;
// const johnsBmi = johnsWeight / johnsHeight ** 2;
// console.log(marksBmi, johnsBmi);
// const markHigherBmi = marksBmi > johnsBmi;
// console.log(markHigherBmi);

// if (marksBmi > johnsBmi) {
//     console.log(`Mark's BMI ${marksBmi.toFixed(2)}`);
// }
// else {
//     console.log(
//         `john's BMI ${johnsBmi.toFixed(2)} is higher than marks ${marksBmi.toFixed(2)}`);

    
        // 5 +7 + 8 / 3
//             const avgDolphin = (96 + 108 + 89) / 3;
//             const avgKaola = (88 + 91 + 110) / 3;
//             console.log(avgDolphin, avgKaola);
//             if (avgDolphin > avgKaola) {

            
            
            
            
        
//                 let koalasScore = (88 + 91 + 110)
//             let y = koalasScore / 3
//             if (x > y) { console.log("the average of dolphin is greater than kaola average"); }
//             else if (x < y) { console.log("the average of koals is greater than the average of dolphin"); }
//             else { console.log(draw); }
//         } 



        // ternary operators
        // if(condition){code 1}else{code2}
        // condition ? action 1: action 2 
//         15 > 7 ? console.log('yes') : console.log('NO');
//         const num2 = 47;
//         num2 % 2 === 0
//             ? console.log('This is an EVEN number')
//             : console.log("This is an ODD number");
    
// // LOOPS -repitive tasks -for,while,do.. while loop
// // for (initializer let i = 0; condition i <5; increment i++ ){code} 
// for (let i = 0; i < 5; i++) {
//     console.log(`in the loop $(i)`);
// }
// console.log('outside the loop');


// // sum of
// let sum = 0;
// for ( let i = 0; i <= 5; i++) {
//     sum += i;
// }
// // for while statement
// let x = 0
// while (x < 20) {
//     console.log("HELLO");
//     x++;

// }
// // Do while loop statement
// let y = 50
// do {
//     console.log("HEY");
//     y++;
// } while (y < 5);

// // // functions
// const var1 = "john";

// //function declaration
// function myFunction() {
//     console.log("HELLO CLASS");
//     console.log(" YOU ARE WELCOME");
// }
// myFunction();
// function greet(name,age) {
//     console.log("WELCOME " + name + age);
// }
// greet("john", 76);
// greet("Sandra", 5);
// greet("EMMANUEL", 78)
// greet();
// greet("ola");
// // calculate the ag of users
// // 2023 - year;

// function calcAge(year) {
//     const age = 2023 - year;
//     console.log(`your age is &{age}`);
// }
// calcAge(1960);
// calcAge(2000);
// function sumNums(a, b) {
//     console.log(`the sum of ${a} and ${b} is ${a + b}`);
// }
// sumNums(4.5, 78);
// sumNums(-45, 87);

// function countrydescription(country, population,capitalCity) {
//     console.log(`${country} has ${population} million people and its capital city is ${capitalCity}`);
//     countrydescription("france, 6, paris");
//     countrydescription("egypt, 7, cairo");
//     countrydescription("nigeria, 78, abuja");
    
// }
// // checks if an email is valid or not

// checkEmail("test@gmail.com");
// function checkEmail(email) {
//     if (email.includes("@")) {
//         console.log(`${email} is a valid email address`);
//     } else {
//         console.log(`${email} is not a valid email address`);
//     }
// }
// checkEmail("abcgoogle.com")
//     ?? HOISTING
// // function expression
// const myAge = 90;
// console.log(myAge);

// // myFunction2(4,5)
// const myFunction2 = function (a, b) {
//     console.log("anything");
//     console.log(a + b);
// };

// my

// // create a function tat calc average of the two teams
// // d - 103,98,89
// // k - 110, 87,95

// const calcAverage = function (a, b, c) {
//     const avg = (a + b + c) / 3;
//     //return avg.tofixed(2);
//     return Number(avg.toFixed(2));

// };
// const avgDolphin2 = calcAverage(123, 98, 89);
// const avgKaola2 = calcAverage(110, 87, 95);
// console.log((avgDolphin2, avgKaola2));

// function checkWinner(teamA, teamB) {
//     if (teamA > teamB) {
//     console.log("First Team won");
//     } else if (teamB > teamA) { 
//         console.log("Second Team won");
//     } else {
//         console.log("NO winner");
//     }
// }

// checkWinner(avgDolphin2, avgKoala2)

// // ARROW FUNCTION 
// const name = ()=>{}

// const logger = (a, b, c) => {
//     const total = a + b + c;
//     return total;
// };

// console.log(logger(4, 5, 7));

// // const difference = (a, b) => {
// // return a - b;
// //};
// const a = 5;
// console.log(a);

// const local = () => {
//     const a = 7;
//     const b = 8;
//     console.log(a);
// };
// local();
// // console.log(b);
// console.log(a);


//ARRAYS [elements,elememnts,null,boolean,arrays]

// const students = ["Mofe", "Precious", "sheu"];
// console.log(students);

// // arrays properties and methods
// console.log(students.length);

// // get element in an array
// console.log(students[0]);
// console.log(students[students.length - 1]);

// // converting an afray to string = tsring, join
// console.log(students.toString());
// console.log(students.join(" "));

// // adding elements to an array to the back - push
// students.push("ola");
// console.log(students);

// // adding elements to an array to the front - unshift
// students.unshift("ebuka")
// console.log(students);

// // removing elements from an array from the back - pop
// students.pop()
// console.log(students);
// students.pop()
// console.log(students);

// // removing elements from an array from the front -shift
// students.shift()
// console.log(students);
// console.log(students.sort());
// // to reverse elements in an array
// console.log(students.reverse());
// // to check may be an elements is in array
// console.log(students.includes("ola"));
// console.log(students.includes("Mofe"));

// // indexof lastindexOf
// const anotherStudents = ["Toyin", "Zainab"];
// console.log(students.concat(anotherStudents, ["Ayo", "Ade", "Ade"]));



// const countries = ["spain", "france", "morocco", "scotland"];
// console.log(countries.length);
// countries.length > 5 ? console.log(`the countries is greater than 5`) : console.log(`is not greater than 5`);

// let savings = 500000
// const transaction = [5000, -5000, -100]
// transaction.push(-2000)
// transaction.push(5000)
// transaction.push(-3000)
// transaction.pop()
// let credit = 0;
// let debit = 0;
// console.log(transaction);
// for (i = 0; i < transaction.length; i++) {
//     //console.log(transaction[i]);
//     //savings = savings + transcations[i]
//     savings += transaction[i];
//     if (transaction[i] < 0) {
//         debit += transaction[i];
//         console.log(`you have been Debited ${transaction[i]}`);
//     } else {
//         credit += transaction[i];
//         console.log(`you have been credited ${transaction[i]}`);
//     }
// }

// console.log(`The total debit is ${debit}`);
// console.log(`The total credit is ${credit}`);
// console.log((`your account balance is ${savings}`));

// //filter, find, map, forEach
// // higher order function. callback function
// const friends = ["john", "jane", "Adams", "Jennifer", "Owen"];
// friends.includes("Lester");

// friends.forEach((friend,index) => {
//     console.log(`${index} The name of my friend is ${friend}`);
// });
// friends.forEach((f, index) => {
//     console.log(f, index);
// });

// //map

// friends.map((val, index) => {
//     console.log(index);
//     if (val === "jane") {
//         console.log(`${val} is my best friend`);
//     } else {
//         console.log(`${val} is just my friend`);
//     }
// });

// // filter find

// const filteredfriends = friends.filter ((friend) => {
//      // return friends.startsWith("a")
//     return friend.length > 3
// })
// console.log(filteredfriends);

// //find

// const founduser = friends.find((friend) => {
//     const user = "Anon";
//     return friend.startsWith("j");
// });
// console.log(founduser);

// const result = friends.filter((friend) => friend.length > 6);
// const result2 = friends.find((f) => f.startsWith("A"));


// console.log(result, result2);

// // reduce function
// //  accumulator

// const movement = [300, -50, 700, 400, -300];
// const total = movement.reduce((acc, val) => {
//     return acc + val;
// }, 0);
// console.log(`your Total bill is ${total}`);

// // OBJECT - propeties,methods
// // car key-value
// const user = {
//     firstName: "james",
//     lastName: "Bond",
//     age: 40,
//     job: "Actor",
//     friends:["Angela","Nelly","joe",]
// }
// console.log(user);

// // ACCESS properties from am object
// // dot notation,bracket
// console.log(user.firstName.toUpperCase());
// console.log(user.age);

// // objName['propertyName']
// console.log(user["friends"].includes('steven'));
// const nameKey = "Name";
// console.log(user["last" + nameKey]);

// // adding properties to an array
// user.hasAcar = true
// user.status = "Married"
// console.log(user);

// //remove

// // delete
// delete user.friends;
// console.log(user);

// const book = {
//     title: "Rich Dad Poor Dad",
//     author: "Robert Kiyosaki",
//     year: 2001,
//     pages: 207,
//     similarBooks: [
//         "Richest Man in Babylon",
//         "The Monk who sold his Ferrari",
//         "Think and Grow Rich",
//     ],
//     publisher: "Macmillan",
//     getSummary: function () {
//         return`The title of the book is ${this.title} written by ${this.author} in the ${this.year}`
//         console.log(this.author, this.year);
//     },

// };
// console.log(book);

// //object method
// book.getSummary();
// console.log(this);

// // object
// // const {propertyNames} = objName

// // publisher, author,year
// const { publisher, author, pages, year } = book;
// console.log(publisher, author, pages, 2001);

// const users = [
//     { name: "John", userName: "johnny123", password: "76792", age: 32 },
//     { name: "Jane", userName: "janee", password: "7dg2", age: 30 },
//     { name: "mario", userName: "mar123", password: "2", age: 15 },
//     { name: "kemi", userName: "kemo786", password: "76792", age: 69 },
    
// ];
// const canView = users.filter((user) => {
//     return user.age >= 18;

// });
// console.log(canView);

// const search = users.filter((user) => {
//     return user.name.includes("j") || user.userName.includes("j");
// });
// console.log(search);

// // rest(lhs) and spread operator(rhs) 
// const ages = [32, 54, 16, 65, 89];
// const newAge = [2, ...ages, 76, 80]
// console.log(newAge);

// // const [varNames] = arrName
// const [...rest] = ages;


// // console.log(h);
// console.log(rest);

// // MATH OBJECT - 8 math constants
// //console.log(math.PI);

// // math methods
// // sqrt, trunc, round, random, ceil, floor,
// // sqrt
// console.log(Math.sqrt(25));

// // trunc
// console.log(Math.trunc(25.77087));

// // round
// console.log(Math.round(25.77087));

// // ceil- ceiling round the figure up
// console.log(Math.ceil(25.77087));

// // floor- floor round the figure down
// console.log(Math.floor(25.77087));

// // random- it generate number between 0 and 1
// console.log(Math.random() * 2 + 1);


// // random games
// const computer = ["rocks", "paper", "scissor"];
// const randomNum = Math.trunc(Math.random() * 3);
// const randomChoice = computer[randomNum];
// console.log(randomChoice);
// const playerChoice = prompt("Enter a choice (rock, paper, scissors):");
// const computerChoice = computer[randomNum];

// const checkWin = function (computer, player) {
//     if (computer === player) {
//         return "This is a tie";
//     } else if (player === "rock") {
//         if (computer === "scissors") {
//             return "Rock smashes scissors, You win! ";
//         } else {
//             return "paper covers rock, You lose! ";
//         }
//     } else if (player === "paper") {
//         if (computer === "rock") {
//             return "paper covers rock, you Win!";
//         } else {
//             return "scissor cuts paper, You Lose!";
//         }
//     } else if (player === "scissors") {
//         if (computer === "paper") {
//             return "scissors cut paper, You Win!";
//         } else {
//             return "Rock smashes scissors,you lose!";
//         }
//     }
// };
// const result5 = checkWin(computerChoice, playerChoice);
// console.log(result5);


// // ASYBCHRONOUS   JS
// asynchronouslog
console.log(1);
// taking time log(take time)
console.log(2);

// for ( i = 0; i < 10000; i++) {
// console.log(i);
// }
// console.log("ANOTHER THING");
// console.log("first");
// setTimeout(() => {
//     console.log("second");
// }, 15000);
// setInterval(() => {
    
// }, console.log("I am in the interval");

//  non blocking code
console.log("A");
console.log("B");
console.log("C");
setTimeout(() => {
    console.log("IN THE TIMEOUT");
}, 5000);
console.log("C after the timeout");
const myInterval = setInterval(() => {
    console.log("Welcome user");
}, 3000);

setTimeout(() => {
    clearInterval(myInterval);
},);

// FETCHING DATA - API - application programming interface

// promises - is a container for future value

const url = "https://jsonplaceholder.typicode.com/users";

//fetch function- is used to fetch external function

fetch(url).then((response) => {
    console.log(response);
    return response.json();
})
    .then((users) => {
        console.log(users);
    });

    // to use multiple data and url
    // fetch data or for useable function

const fetchData = (url) => {
    fetch(url)
        .then((response) => response.json())
        .then((data) => console.log(data));
};

//catch

fetchData("https://jsonplaceholder.typicode.com/posts");

//async /await

//try and catch block
try {
    console.log(retyu);
} catch (error) {
    console.log(error);
}

// async await
const getData = async(url) => {
    try {
        const response = await fetch(url);
        const data = await response.json();
        console.log(data);
    } catch (error) {
        console.log(error);
    }
};

// storage api
// localStorage.setItem, getItem, removeItem, clear, length
localStorage.setItem("name", "Ola Ola");
localStorage.setItem("token", "123456789");

const result = localStorage.getItem("name");
console.log(result);

localStorage.removeItem("token");

const length = localStorage.length;
console.log(length);
//localStorage.clear()







// // DOM        
