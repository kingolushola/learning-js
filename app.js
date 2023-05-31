// console.log('hello world');
// console.log('welcome to class');
// console.log('first class');


// // JAVASCRIPT VARAIABLES AND VALUES
// let x = 2;
// const y = 4;
// console.log(x);
// console.log(y);

// // // Convention in naming variables(var)
// // // have a logical var name
// // const b = 'Mubarak'
// // const Firstname = 'Mubarak'
// // // compound names - camelcasing
// // const lastName = 'Funsho'
// // // // illegal ( you can not start with number but you can start with dolars($)
// // // const 1year = 2003(wrong)
// // // const $year = 2003(right)

// // // let country = 'nigeria'
// // // const state = 'lagos'
// // // console.log(country);
// // // console.log(state);

// const country = 'Nigeria'
// let state = 'lagos'
// console.log(country);
// console.log(state);

// // javascript data types-( primitive data type amd complex datatype)
// // strings- text-quotes-strings
// const firstName = "john";
// const lastName = 'Doe';
// const middleName = "owen";
// const currentJob = "product Manager";
// const email = "olusholaabiodun01@gmail.com";
// //  string concatenation - joining of string
// const fullname = firstName + " " + middleName + " " +  lastName;
// console.log(fullname);
// // you can message me on this email,olusholaabiodun01@gmail.com
// const Email = " you can message me on this email " + email
// console.log(Email);
// // Getting Characters -
// console.log(middleName[1]);
// //  string lenght
// console.log(firstName.length);
// // String Method
// // transform
// console.log(fullname.toUpperCase());
// console.log(fullname.toLowerCase());

// // extracting parts of a string - slice substring
// const email2 = "olushola@tevhstudio.com";
// // string.slice[0, 8]
// console.log(email2.slice(0, 8));
// console.log(email2.slice(5, 12));

// // string.substring(start,counnt of cters)
// console.log(email2.substr(0, 12));

// // replace string content - replace reolaceALL
// console.log(email2.replace("a", "$"));
// console.log(email2.replaceAll("a", "$"));

// // includes,indexof, lastindexof, trim,concat,
// // trimStart, trimend, StartsWith, Endswith

// console.log(email2.includes("olushola"));
// console.log(email2.indexOf("a"));
// console.log(email2.lastIndexOf("a"));
// const user = "       olushola    ";
// const password = "       12334568   ";
// console.log(user.length, password.length);
// const formattedUser = user.trim();
// console.logformattedpassword = password.trimStart();
// console.log("formattedpassword.length");
// console.log(email2.startsWith("o"));
// console.log(email2.endsWith(".com"));

// // concat -appendix end eg
// const job = "frontend"
// // frontend developer
// console.log(job.concat(" ", "Developer", " is Rare"));


// //  template literal //zainab
// const author = "Chinua Achebe";
// const book = " Things Fall Apart";
// const years = 1996;
// // The book things Fall apart was wrtten by Chinua Achebe in the year 1996
// const bookdescription =" The book " + book + " was written by " + author + " in the year " + years

// console.log(bookdescription);
// const bookdescription2 = `The book ${book} was written by ${author} in the year ${years}`

// // numbers
// maths operators- + - * / ** %
console.log(6 % 2); // 0
console.log(5 % 2); // 1

console.log(5 / 2); //2.5
// order of operation
// increase te value of total by 10
let total = 50;
total = total + 10;
console.log(total);

let likes = 0;
likes += 1;
likes += 1;
likes += 1;
likes++;
likes--;
console.log(likes);

// // boolean -True and false
console.log(true);

const country = "nigeria"
const continent = " africa"
let population = "106447400000"
console.log(country, continent, population);
const isIsland = false
const language = "English";
population /= 2;
console.log(population);
population++;
console.log(population);

// template literals
// description nigeria is in africa and its population of 106447400000 people speaks english

const description = ` ${country} is in ${continent} and its population of ${population} people speaks ${language} `
console.log(description);
// nigeria as a country speaks english
const descript = `${country} as a country speaks majorly ${language}`;
console.log(descript);
//   logical operators - < > <= >= ==
// = assignment
// == loose equality, ===strict

// logical operators and &&  or || not !
console.log(5 > 6 && 2 == 2);

console.log(6 > 7 || 2 === 2);


// type conversion and con coercion
// strings to numbers
const str = "90";
console.log(typeof str);
const converted = Number(str);
console.log(typeof converted);

//  numbers to strings
const num = 900000;
console.log(typeof num);
const converted2 = String(num);
console.log(typeof converted2);

// type coercion
const num1 = 8;
const num2 = 2;
const result = num1 / num2

console.log(num1 + num2);





// // Null
// // Undefined
