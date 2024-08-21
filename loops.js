/* Problem 1:
Create a function that takes two number as input and return true if one 
of them is 15 or their summation is 15
Example: 1. Input: 5 15 --> Output: true
2. Input: 10 5 --> Output: true
3. Input: 5 5 --> Output: false */

// function checkFifteen(a, b) {
//     if (a == 15 || b == 15 || (a + b) == 15) {
//         console.log("true");
//     } else {
//         console.log("false");
//     }
// }

// checkFifteen(a = +prompt("Please enter first number"),b = +prompt("Please enter second number"));

//____________________________________________________________________________________________________________________

/* Problem 2:
Function to check if the given number is a perfect square or not.
(Search for what is perfect square is.) */

// function is_perfect_square(number){
//     for(i = 0 ; i <= number ; i++){
//         if((i*i) == number){

//             return  console.log("number is perfect square");
//         }
//     }
//     return console.log("False");

// }
// is_perfect_square(number = +prompt("Please enter a number"));

//____________________________________________________________________________________________________________________

/* Problem 3:
You have five variables x1, x2, x3, x4, x5 their values are initially (1, 2, 3, 
4, 5). One of these variables is replaced with 0. You need to make a 
function that takes these five variables and checks which of them is 
replaced.
Example: Input: 1, 2, 0, 4, 5 --> Output: 3
Input: 0, 2, 3, 4, 5 --> Output: 1 */

// function where_is_zero(x1, x2, x3, x4, x5) {
//   let arr = [x1, x2, x3, x4, x5];
//   for (i = 0; i < 5; i++) {
//     if(arr[i] == 0){
//         return console.log(i+=1);
//     }
//   }
// }
// where_is_zero(x1 = +prompt("Please enter first number"),x2 = +prompt("Please enter second number"),x3 = +prompt("Please enter third number"),x4 = +prompt("Please enter forth number"),x5 = +prompt("Please enter fifth number"));

//____________________________________________________________________________________________________________________

/* Problem 4:
Given a letter. If the letter is lowercase print this letter after converting it 
to uppercase. And if the letter is uppercase print this letter after 
converting it to lowercase.
Example: Input: a --> A
Input: A --> a  */

// function lower_upper_converter(str){
// if (str === str.toLowerCase()){
//     console.log(str.toUpperCase());
// }
// else{
//     console.log(str.toLowerCase());
// }
// }
// lower_upper_converter(str = prompt("Please enter a letter"));

//____________________________________________________________________________________________________________________

/* Problem 5:
Create function that takes two numbers as input to calculate the sum of 
odd numbers greater than the first numbers and less than the second 
number.
Example: 1. Input: 10 30 --> Output: 200
2. Input: 0 10 --> Output: 25 */

// function sum_of_odds(num1,num2){
//     let sum = 0;
//     for(i = num1 ; i <= num2 ; i++){
//         if(i%2 == 1){
//             sum+=i;
//         }
//         else{
//             continue;
//         }
//     }
//     console.log(sum);
// }
// sum_of_odds(num1 = +prompt("Please enter first number"),num2 = +prompt("Please enter second number"));

//____________________________________________________________________________________________________________________

/* Problem 6:
Function that takes a number n and then takes n numbers from the user 
(using prompt) and if the numbers that the user will enter contains 4 or 7 
then log to the console “It’s your lucky day” otherwise log “It’s not your 
lucky day”.
Example: 
1. Input: 5 --> The number that will be passed to the function
 1 2 3 4 5 
Output: “It’s your lucky day”
 2. Input: 3 
 1 3 6
Output: “It’s not your lucky day” */

// function is_lucky_day(num1){
//     let m = "";
//     for (let i = 0; i < num1; i++) {
//     let finalNumber = prompt(`Enter number ${i + 1}:`);
//     m = m.concat(`${finalNumber}`);
//     }
//     if(m.includes("4") || m.includes("7")){
//         console.log("It’s your lucky day");
//     }else{
//         console.log("It’s not your lucky day");
//     }
// }

// is_lucky_day(num1 = prompt("Please enter a number"));

//____________________________________________________________________________________________________________________

/* Problem 7:
Function that takes number N and then print all the divisors of this 
number. (You can search for what is the divisors is).
Example: 1. Input: 6 --> Output: 1 2 3 6
2. Input: 12 --> Output: 1 2 3 4 6 12  */

// function all_divisors(n){
//     x = [];
//     for (i = 1 ; i <= n ; i++){
//         if(n%i == 0){
//             x.push(i);
//         }
//     }
//     console.log(x);
// }
// all_divisors(n = prompt("Please enter a number"));

//____________________________________________________________________________________________________________________

/* Problem 8:
Given number N you have to print all prime number between 1 and n
(Prime numbers are the number that are inly divisible by 1 and it self)
Example: 1. Input: 5 --> Output: 2 3 5
2. Input: 10 --> Output: 2 3 5 7 */

// function prime_numbers(n){
//     y = [];
//     for (i = 2 ; i <= n ; i++){
//         let x=[];
//         for(j = 1 ; j <= i; j++){
//             if(i%j == 0){
//                 x.push(j);
//             }else{
//                 continue;
//             }
//         }
//         if(x.length = 2){
//                 y.push(i);
//         }
//         else{
//             continue;
//         }
//     }
//     console.log(y);
// }
// prime_numbers(n = prompt("Please enter a number"));

//____________________________________________________________________________________________________________________

/* Problem 9:
Function that takes a number n and then takes n numbers from the user 
(using prompt) and count the sum of these numbers, how many odd 
numbers, how many even numbers. */

// function sum(n){
//     let x = 0;
//     let even = 0;
//     let odd = 0;
//     y = [];
//     for (i = 0; i < n; i++) {
//        let summition = +prompt(`Enter number ${i + 1}:`);
//        if(i%2 == 0){
//         even++;
//        }
//        else{
//         odd++;
//        }
//        x = x + summition;
       
//     }
//     console.log(`Summition = ${x}`);
//     console.log(`there are ${even} even numbers`);
//     console.log(`there are ${odd} even numbers`);
// }
// sum(n = prompt("Please enter a number"));

//____________________________________________________________________________________________________________________

/* Problem 10:
Function takes number n, log to console n lines that describe PUM game.
Example: Input: 3
Output:
1 2 3 PUM
5 6 7 PUM
9 10 11 PUM */

// function PUM_Game(n) {
//     let i = 1;
//     for (let j = 1; j <= n; j++) {
//         console.log(`${i} ${i + 1} ${i + 2} PUM`);
//         i = (i+2) + 2;
//     }
// }
// PUM_Game(n = prompt("Please enter a number"));

//____________________________________________________________________________________________________________________

/* Problem 11:
Create function that takes two numbers that have to determine if the 
product of these two numbers will be positive or negative or zero.
Example: 1. Input: -1 3 --> Output: negative
2. Input: 2 5 --> Output: positive */

// function product_of_two_numbers_positive_or_negative(num1,num2){
//     if((num1 * num2) >= 0 ){
//         if ((num1*num2) == 0){
//             console.log("Number is zero");
//         }else{
//             console.log("Positive");
//         }
        
//     }else{
//         console.log("Negative");
//     }
// }
// product_of_two_numbers_positive_or_negative(num1 = +prompt("Please enter a number"),num2 = +prompt("Please enter a number"));

//____________________________________________________________________________________________________________________

/* Problem 12: 
Create a function finalGrade(), which calculates the final grade of a
student depending on two parameters: a grade for the exam and the 
number of completed projects.
This function should take two arguments: grade for exam (from 0 to 100), 
number of completed projects (from 0 and above).
This function should return a number (final grade). There are four types 
of final grades:
• 100, if a grade for the exam is more than 90 or if the number of 
completed projects more than 10.
• 90, if a grade for the exam is more than 75 and if the number of 
completed projects is minimum 5.
• 75, if a grade for the exam is more than 50 and if the number of 
completed projects is minimum 2.
• 0, in other cases
Example: 1. Input: 100 12 --> Output: 100
2. Input: 85 5 --> Output: 90 */

// function finalGrade(examGrade, completedProjects) {
//     if ((examGrade >= 90 && examGrade <= 100) || completedProjects > 10) {
//         return console.log("100");
//     } else if (examGrade >= 75 && examGrade < 90 && completedProjects >= 5) {
//         return console.log("90");
//     } else if (examGrade > 50 && examGrade < 75 && completedProjects >= 2) {
//         return console.log("75");
//     } else {
//         return console.log("0");
//     }
// }
// finalGrade(examGrade = +prompt("Please enter exam grade"),completedProjects = +prompt("Please enter completed Projects"))
