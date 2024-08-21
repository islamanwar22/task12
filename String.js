/* Problem 1:
Make a function that accepts one string and return it reversed. */

// function reverseString(str2){
//     console.log(str2.split('').reverse().join(''));
// }
// reverseString(str1 = prompt("Please enter a string"));

//___________________________________________________________________________________

/* Problem 2:
Function that accepts two string and check if they are equal or not (not 
case sensitive)
Example: 1. (Eraa, eraa) => true
2. (Mohamed, Moamen) => false */

// let str1 = prompt("Please enter first string");
// let str2 = prompt("Please enter Second string");
// function isEqual(str1 , str2){
//     str1 = str1.toLowerCase();
//     str2 = str2.toLowerCase();
//     if (str1 === str2){
//         console.log("Two strings are equal")
//     }
//     else{
//         console.log("Two string are not equal")
//     }
// }
// isEqual(str1,str2);

//___________________________________________________________________________________

/* Problem 3:
Function that takes a string and check if this string is all uppercase or not.*/

// let str = prompt("Please enter string");
// isUpperCase(str);
// function isUpperCase(str) {
//     if(str === str.toUpperCase()) {
//         console.log("The string is uppercase");
//     }
//     else{
//         console.log("The string is not uppercase");
//     }
// }

//___________________________________________________________________________________

/* Problem 4:
Function that takes a string and two positions as numbers and return the 
part of the string between these two positions. (Make two different 
solutions).
Example: “Moamen” “1” “4” => “oame”*/

// let str = prompt("Please enter string");
// let num1 = +prompt("Please enter first number");
// let num2 = +prompt("Please enter second number");
// function takeSlice(str , num1 , num2){
//     console.log(str.slice(num1,num2));
// }
// takeSlice(str , num1 , num2);

//___________________________________________________________________________________

/* Problem 5:
Make a function that accepts 3 names as a parameter first one is 
firstName second is middleName and third lastName.
And then the function should return one string containing all three 
names separated by a space without using (+) operator.*/

// let str1 = prompt("Please enter your first name");
// let str2 = prompt("Please enter your middleName name");
// let str3 = prompt("Please enter your lastName name");
// concatName(str1,str2,str3);
// function concatName(str1,str2,str3){
//     let name = str1.concat(" ",str2," ", str3);
//     console.log(name);
// }

//___________________________________________________________________________________

/* Problem 6:
Function that accepts a string and then checks if it is palindrome or not.
(Search for what palindrome string is if you don’t know). */

// function isPalindrome(str2){
//     let reversedString = str2.split('').reverse().join('') ;
//     if (str2.toLowerCase() === reversedString.toLowerCase()){
//         console.log("String is palindrome");
//     }
//     else{
//         console.log("String is not palindrome");
//     }
// }
// isPalindrome(str2 = prompt("Please enter your first string"));

//___________________________________________________________________________________

/* Problem 7:
Function that accepts a string and remove the extra spaces at the start 
and the end of this string */

// function removeWhiteSpaces(str2){
//     console.log(str2.trim());
// }
// removeWhiteSpaces(str1 = prompt("Please enter a string"));

//___________________________________________________________________________________

/* Problem 8:
In specific location all URLs start with (ww.) and ends with (.eraa).
Make a function that accepts a URL and check if it’s from this location or 
not.
Example: 1. (ww.moamen.eraa) => true
2. (w3w.sherif.err) => false  */

// function isURL(str2){
//     if(str2.includes("ww.",0) && str2.endsWith(".eraa")) {
//         console.log("Valid URL");
//     }
//     else{
//         console.log("Invalid URL");
//     }
// }
// isURL(str1 = prompt("Please enter URL"));

//___________________________________________________________________________________

/* Problem 9:
Function that takes a string and remove the ‘o’ letter from it (Capital and 
small)
Example: 1. “Eraoa” => “Eraa”
2. “oMOamen” => Mamen */

// function remove_o_letter(str2){
//     let str3 = str2.split("");
//     let goal = [];
//     let num = str3.length; 
//     for(i = 0 ; i < num; i++){
//         if(str3[i] == "o" || str3[i] == "O"){
//             continue;
//         }else{
//             goal.push(str3[i]);
//         }
//     }
//     console.log(goal.join(""));
// }
// remove_o_letter(str1 = prompt("Please enter string"));

//___________________________________________________________________________________

/* Problem 10:
Function that accepts three strings. Check if the second and the third 
strings are a substring of the first one.
(Substring means that the string is a part of another string).
Example: 1. “SoWhatYesOhh”, “What”, “Ohh” => true
2. “SoWhatYesOhh”, “So”, “Ah” => false 
 (“Ah” not in the string) */

//  function isSubString(str1,str2,str3){
//     if (str1.includes(str2) && str1.includes(str3)){
//         console.log("Second and third string is substring from first string");
//     }
//     else{
//         console.log("False");
//     }

//  }
//  isSubString(str1 = prompt("Please enter first string"),str2 = prompt("Please enter second string"),str3 = prompt("Please enter third string"));
