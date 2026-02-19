পর্যায় ১: JavaScript এর ভিত্তি (Foundation)
১. Variables (var, let, const) এবং Data Types
বিস্তারিত ব্যাখ্যা:
প্রশ্ন: Variable কি? উত্তর: Variable হলো একটি container যেখানে আমরা data সংরক্ষণ করি। এটি একটি নাম যার মাধ্যমে আমরা data কে চিনি এবং ব্যবহার করি।
JavaScript এ তিন ধরনের variable declaration আছে:
1.	var - পুরাতন পদ্ধতি (এখন আর ব্যবহার করা হয় না)
2.	let - যেই variable এর value পরে পরিবর্তন হতে পারে
3.	const - যেই variable এর value কখনো পরিবর্তন হবে না
উদাহরণ:
// var (এখন ব্যবহার করবেন না)
var name = "রহিম";

// let (value পরিবর্তন করা যায়)
let age = 25;
age = 26; // এটি কাজ করবে

// const (value পরিবর্তন করা যাবে না)
const country = "Bangladesh";
// country = "India"; // এটি error দেবে
Data Types: JavaScript এ মূলত দুই ধরনের data type:
Primitive Types:
1.	String - টেক্সট ডাটা: "Hello", 'World'
2.	Number - সংখ্যা: 10, 3.14, -5
3.	Boolean - সত্য/মিথ্যা: true, false
4.	Undefined - যখন variable declare করা কিন্তু value দেয়া হয়নি
5.	Null - ইচ্ছাকৃতভাবে খালি value
6.	Symbol - Unique identifier (advanced)
7.	BigInt - বড় সংখ্যা (advanced)
let userName = "করিম";           // String
let userAge = 30;                 // Number
let isStudent = true;             // Boolean
let grade;                        // Undefined
let salary = null;                // Null
ভাইবা বোর্ড প্রশ্ন-উত্তর:
প্রশ্ন ১: var, let এবং const এর মধ্যে পার্থক্য কি? উত্তর:
•	var function-scoped, re-declare করা যায়, hoisting হয়
•	let block-scoped, re-declare করা যায় না, value পরিবর্তন করা যায়
•	const block-scoped, re-declare করা যায় না, value পরিবর্তনও করা যায় না
প্রশ্ন ২: typeof operator কি এবং কেন ব্যবহার করি? উত্তর: typeof দিয়ে কোনো variable এর data type জানা যায়।
console.log(typeof "Hello");  // "string"
console.log(typeof 42);       // "number"
console.log(typeof true);     // "boolean"
প্রশ্ন ৩: undefined এবং null এর পার্থক্য কি? উত্তর:
•	undefined মানে variable declare করা হয়েছে কিন্তু value assign করা হয়নি
•	null মানে intentionally খালি value দেয়া হয়েছে
প্রশ্ন ৪: Variable naming এর rules কি কি? উত্তর:
•	Letter, digit, underscore (_), বা dollar sign ($) দিয়ে শুরু করতে হবে
•	Digit দিয়ে শুরু করা যাবে না
•	Reserved keywords ব্যবহার করা যাবে না (let, const, if, etc.)
•	Case-sensitive (name এবং Name আলাদা)
প্রাকটিস চ্যালেঞ্জ:
চ্যালেঞ্জ ১: একটি variable তৈরি করুন যেখানে আপনার নাম সংরক্ষণ করবেন। console.log করে দেখান।
const myName = "আপনার নাম";
console.log(myName);
চ্যালেঞ্জ ২: তিনটি variable তৈরি করুন: আপনার বয়স (let), আপনার দেশ (const), এবং আপনার পেশা (let)। তারপর বয়স পরিবর্তন করুন।
let myAge = 25;
const myCountry = "Bangladesh";
let myProfession = "Student";

myAge = 26; // এটি কাজ করবে
console.log(myAge);
চ্যালেঞ্জ ৩: বিভিন্ন data type এর ৫টি variable তৈরি করুন এবং typeof দিয়ে তাদের type চেক করুন।
let name = "রহিম";
let age = 30;
let isMarried = false;
let salary = null;
let bonus;

console.log(typeof name);      // string
console.log(typeof age);       // number
console.log(typeof isMarried); // boolean
console.log(typeof salary);    // object (null এর জন্য)
console.log(typeof bonus);     // undefined
ভবিষ্যতে কোথায় ব্যবহার হবে:
•	Web Development: User input সংরক্ষণ, form data handle করা
•	React/Vue: Component state manage করা
•	API Integration: Server থেকে আসা data সংরক্ষণ
•	Database Operations: User information, product details সংরক্ষণ
•	Game Development: Score, player name, level সংরক্ষণ
________________________________________
২. Operators (arithmetic, comparison, logical)
বিস্তারিত ব্যাখ্যা:
প্রশ্ন: Operator কি? উত্তর: Operator হলো বিশেষ symbol যা value এর উপর operation করে।
A. Arithmetic Operators (গাণিতিক অপারেটর):
let a = 10;
let b = 3;

console.log(a + b);  // 13 (যোগ)
console.log(a - b);  // 7  (বিয়োগ)
console.log(a * b);  // 30 (গুণ)
console.log(a / b);  // 3.333... (ভাগ)
console.log(a % b);  // 1  (ভাগশেষ/Modulus)
console.log(a ** b); // 1000 (ঘাত/Power)

// Increment/Decrement
let count = 5;
count++;  // count = count + 1 = 6
count--;  // count = count - 1 = 5
B. Comparison Operators (তুলনা অপারেটর):
let x = 5;
let y = "5";

console.log(x == y);   // true (শুধু value চেক করে)
console.log(x === y);  // false (value এবং type উভয় চেক করে)
console.log(x != y);   // false
console.log(x !== y);  // true
console.log(x > 3);    // true
console.log(x < 10);   // true
console.log(x >= 5);   // true
console.log(x <= 4);   // false
C. Logical Operators (যুক্তি অপারেটর):
let age = 20;
let hasLicense = true;

// AND (&&) - সব condition true হতে হবে
console.log(age >= 18 && hasLicense);  // true

// OR (||) - যেকোনো একটি condition true হলেই হবে
console.log(age >= 18 || hasLicense);  // true

// NOT (!) - উল্টা করে দেয়
console.log(!hasLicense);  // false
ভাইবা বোর্ড প্রশ্ন-উত্তর:
প্রশ্ন ১: == এবং === এর পার্থক্য কি? উত্তর:
•	== শুধু value তুলনা করে (type conversion হয়)
•	=== value এবং type উভয় তুলনা করে (strict equality)
5 == "5"   // true
5 === "5"  // false
প্রশ্ন ২: Modulus operator (%) কি কাজে লাগে? উত্তর: ভাগশেষ বের করতে। জোড়-বিজোড় number চেক করতে খুব কাজে লাগে।
10 % 2 === 0  // জোড় সংখ্যা
11 % 2 === 1  // বিজোড় সংখ্যা
প্রশ্ন ৩: && এবং || operator কিভাবে কাজ করে? উত্তর:
•	&& (AND): সব condition true হলে true return করে
•	|| (OR): যেকোনো একটি true হলে true return করে
প্রশ্ন ৪: ++ এবং -- operator এর পার্থক্য কি? উত্তর:
•	++ value 1 বাড়ায়
•	-- value 1 কমায়
let num = 5;
num++;  // num = 6
num--;  // num = 5
প্রাকটিস চ্যালেঞ্জ:
চ্যালেঞ্জ ১: দুটি number নিয়ে সব arithmetic operation করুন।
let num1 = 20;
let num2 = 6;

console.log("যোগ:", num1 + num2);
console.log("বিয়োগ:", num1 - num2);
console.log("গুণ:", num1 * num2);
console.log("ভাগ:", num1 / num2);
console.log("ভাগশেষ:", num1 % num2);
console.log("ঘাত:", num1 ** 2);
চ্যালেঞ্জ ২: একটি number জোড় না বিজোড় check করুন।
let number = 15;
if (number % 2 === 0) {
    console.log("জোড় সংখ্যা");
} else {
    console.log("বিজোড় সংখ্যা");
}
চ্যালেঞ্জ ৩: একজন ব্যক্তি ভোট দিতে পারবে কিনা check করুন (বয়স >= 18 এবং নাগরিক হতে হবে)।
let age = 20;
let isCitizen = true;

if (age >= 18 && isCitizen) {
    console.log("ভোট দিতে পারবে");
} else {
    console.log("ভোট দিতে পারবে না");
}
ভবিষ্যতে কোথায় ব্যবহার হবে:
•	Form Validation: Age check, password match করা
•	E-commerce: Price calculation, discount apply করা
•	User Authentication: Login credentials verify করা
•	Game Logic: Score calculation, win/lose condition check
•	Data Filtering: Search results filter করা
________________________________________
৩. Console.log এবং Basic Input/Output
বিস্তারিত ব্যাখ্যা:
প্রশ্ন: Console.log কি? উত্তর: Console.log হলো JavaScript এর একটি method যা browser এর console এ output দেখায়। এটি debugging এর জন্য অত্যন্ত গুরুত্বপূর্ণ।
Console.log এর বিভিন্ন ব্যবহার:
// Simple text print
console.log("Hello World");

// Variable print
let name = "করিম";
console.log(name);

// Multiple values
let age = 25;
console.log("নাম:", name, "বয়স:", age);

// Template literals (modern way)
console.log(`আমার নাম ${name} এবং বয়স ${age}`);

// Mathematical operations
console.log(10 + 20);  // 30

// Object/Array print
let person = {name: "রহিম", age: 30};
console.log(person);
Other Console Methods:
console.error("এটি একটি error message");
console.warn("এটি একটি warning message");
console.table([{name: "করিম", age: 25}, {name: "রহিম", age: 30}]);
console.clear(); // Console clear করে
Input নেওয়ার পদ্ধতি:
Browser এ (prompt ব্যবহার করে):
// User থেকে input নেয়া
let userName = prompt("আপনার নাম কি?");
console.log("হ্যালো " + userName);

// Number input
let userAge = prompt("আপনার বয়স কত?");
userAge = Number(userAge); // String কে Number এ convert
console.log("আপনার বয়স:", userAge);

// Confirm dialog (Yes/No)
let isConfirmed = confirm("আপনি কি নিশ্চিত?");
console.log(isConfirmed); // true বা false
HTML Form থেকে Input (Real-world):
<input type="text" id="nameInput">
<button onclick="greet()">Submit</button>

<script>
function greet() {
    let name = document.getElementById("nameInput").value;
    console.log("হ্যালো " + name);
}
</script>
ভাইবা বোর্ড প্রশ্ন-উত্তর:
প্রশ্ন ১: Console.log কেন ব্যবহার করি? উত্তর:
•	Code debug করার জন্য
•	Variable এর value check করার জন্য
•	Program এর flow বুঝার জন্য
•	Error খুঁজে বের করার জন্য
প্রশ্ন ২: Template literals কি এবং কেন ভালো? উত্তর: Template literals (backticks ``) ব্যবহার করে string এর মধ্যে variable সহজে embed করা যায়।
// পুরাতন পদ্ধতি
console.log("নাম: " + name + ", বয়স: " + age);

// নতুন পদ্ধতি (ভালো)
console.log(`নাম: ${name}, বয়স: ${age}`);
প্রশ্ন ৩: prompt() এর সমস্যা কি? উত্তর:
•	এটি সবসময় string return করে
•	User experience ভালো না
•	Modern web app এ ব্যবহার হয় না
•	HTML form ব্যবহার করা উচিত
প্রশ্ন ৪: String কে Number এ convert করার পদ্ধতি কি? উত্তর:
let str = "123";
let num1 = Number(str);
let num2 = parseInt(str);
let num3 = +str;  // Shorthand
প্রাকটিস চ্যালেঞ্জ:
চ্যালেঞ্জ ১: বিভিন্ন ধরনের data console.log করুন।
let name = "করিম";
let age = 25;
let isStudent = true;

console.log("String:", name);
console.log("Number:", age);
console.log("Boolean:", isStudent);
console.log(`Template: আমার নাম ${name}, বয়স ${age}`);
চ্যালেঞ্জ ২: User থেকে নাম এবং বয়স input নিয়ে একটি message দেখান।
let userName = prompt("আপনার নাম কি?");
let userAge = Number(prompt("আপনার বয়স কত?"));

console.log(`হ্যালো ${userName}! আপনার বয়স ${userAge} বছর।`);
চ্যালেঞ্জ ৩: দুটি number input নিয়ে তাদের যোগফল দেখান।
let num1 = Number(prompt("প্রথম সংখ্যা দিন:"));
let num2 = Number(prompt("দ্বিতীয় সংখ্যা দিন:"));
let sum = num1 + num2;

console.log(`যোগফল: ${sum}`);
ভবিষ্যতে কোথায় ব্যবহার হবে:
•	Debugging: Code এর bug খুঁজে বের করা
•	Development: Feature test করার সময়
•	API Testing: Server response check করা
•	User Interaction: Form data process করা
•	Error Tracking: Error messages show করা
________________________________________
৪. Comments এবং Code Structure
বিস্তারিত ব্যাখ্যা:
প্রশ্ন: Comment কি এবং কেন ব্যবহার করি? উত্তর: Comment হলো code এর মধ্যে লেখা নোট যা browser execute করে না। এটি code বুঝতে এবং maintain করতে সাহায্য করে।
Comment এর প্রকারভেদ:
// এটি Single-line comment
// Browser এই লাইন ignore করবে

/* 
   এটি Multi-line comment
   একাধিক লাইনে লেখা যায়
   Code explain করার জন্য ভালো
*/

let name = "করিম"; // Variable declare করা হলো

/*
function greet() {
    console.log("Hello");
}
*/
// উপরের function টি comment out করা আছে, execute হবে না
Good Comment Practice:
// ভালো Comment - কেন করা হচ্ছে তা বলে
// User এর বয়স 18+ হলে access দিবো
if (age >= 18) {
    allowAccess();
}

// খারাপ Comment - কি করছে তা বলে (এটা code দেখেই বুঝা যায়)
// age 18 এর সমান বা বড় কিনা check করছি
if (age >= 18) {
    allowAccess();
}

// Complex logic এর জন্য comment
// Facebook API থেকে user data fetch করে
// তারপর database এ save করে
fetchUserData().then(saveToDatabase);
Code Structure Best Practices:
// 1. Meaningful Variable Names
let userName = "করিম";  // ভালো
let x = "করিম";         // খারাপ

// 2. Proper Indentation
if (age >= 18) {
    console.log("Adult");
    if (hasLicense) {
        console.log("Can drive");
    }
}

// 3. Spacing
let sum = a + b;      // ভালো
let sum=a+b;          // পড়তে কষ্ট হয়

// 4. Line Breaks
let firstName = "করিম";
let lastName = "রহমান";
let age = 25;

// 5. Consistent Naming Convention
let userName = "করিম";     // camelCase (JavaScript standard)
let user_name = "করিম";    // snake_case (Python এ ব্যবহৃত)
let UserName = "করিম";     // PascalCase (Class এর জন্য)
Code Organization:
// Variable Declarations একসাথে
let name = "করিম";
let age = 25;
let city = "Dhaka";

// Functions একসাথে
function greet() {
    console.log("Hello");
}

function calculate() {
    return 10 + 20;
}

// Main Code
greet();
let result = calculate();
console.log(result);
ভাইবা বোর্ড প্রশ্ন-উত্তর:
প্রশ্ন ১: Comment কখন ব্যবহার করা উচিত? উত্তর:
•	Complex logic explain করার জন্য
•	Future reference এর জন্য
•	TODO list লেখার জন্য
•	Temporarily code disable করার জন্য
•	Team collaboration এর জন্য
প্রশ্ন ২: Single-line এবং Multi-line comment এর পার্থক্য? উত্তর:
•	// একটি লাইনের জন্য
•	/* */ একাধিক লাইনের জন্য
// Single line

/*
Multiple
lines
*/
প্রশ্ন ৩: Good code structure কেন গুরুত্বপূর্ণ? উত্তর:
•	Code পড়তে সহজ হয়
•	Bug খুঁজে পাওয়া সহজ হয়
•	Team এ কাজ করতে সুবিধা
•	Maintenance সহজ হয়
প্রশ্ন ৪: camelCase কি এবং কেন ব্যবহার করি? উত্তর: camelCase হলো একটি naming convention যেখানে প্রথম শব্দ lowercase এবং পরবর্তী শব্দগুলো uppercase দিয়ে শুরু হয়। JavaScript এ এটি standard practice।
let myVariableName = "value";
let userName = "করিম";
let totalPrice = 1000;
প্রাকটিস চ্যালেঞ্জ:
চ্যালেঞ্জ ১: নিচের code এ proper comment যোগ করুন।
// User information সংরক্ষণ
let userName = "করিম";
let userAge = 25;

// Age check করে message দেখানো
if (userAge >= 18) {
    console.log("Adult user"); // 18+ users
} else {
    console.log("Minor user"); // 18 এর নিচে
}
চ্যালেঞ্জ ২: নিচের messy code কে proper structure এ লিখুন।
// Before (Messy)
let a="করিম";let b=25;if(b>=18){console.log("Adult");}

// After (Clean)
// User information
let userName = "করিম";
let userAge = 25;

// Age verification
if (userAge >= 18) {
    console.log("Adult");
}
চ্যালেঞ্জ ৩: একটি simple calculator এর code লিখুন proper comment এবং structure সহ।
// Calculator Program
// Takes two numbers and performs addition

// Input numbers
let num1 = 10;
let num2 = 20;

// Perform calculation
let sum = num1 + num2;

// Display result
console.log(`যোগফল: ${sum}`);
ভবিষ্যতে কোথায় ব্যবহার হবে:
•	Professional Projects: Team এ কাজ করার সময়
•	Open Source: অন্যরা code বুঝতে পারবে
•	Documentation: Code explain করার জন্য
•	Debugging: Problem identify করতে
•	Code Review: Code quality maintain করতে
________________________________________
পর্যায় ১ সম্পন্ন!
এই পর্যায়ে আপনি শিখলেন: ✅ Variables (let, const) এবং Data Types ✅ Operators (Arithmetic, Comparison, Logical) ✅ Console.log এবং Input/Output ✅ Comments এবং Code Structure
এই পর্যায়ের সামগ্রিক প্রাকটিস প্রজেক্ট:
প্রজেক্ট: Simple Age Calculator
// Age Calculator Program
// This program calculates user's age based on birth year

// Get current year
const currentYear = 2024;

// Get user's birth year
let birthYear = Number(prompt("আপনার জন্ম সাল লিখুন:"));

// Calculate age
let age = currentYear - birthYear;

// Display result with condition
console.log(`আপনার বয়স: ${age} বছর`);

if (age >= 18) {
    console.log("আপনি প্রাপ্তবয়স্ক!");
} else {
    console.log("আপনি অপ্রাপ্তবয়স্ক!");
}

// Check voting eligibility
let canVote = age >= 18 && age <= 100;
console.log("ভোট দিতে পারবেন:", canVote);
________________________________________

