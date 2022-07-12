

// Addition. Write a program that calculates the sum of numbers from 1 to 20.
 
var i = 1
var sum = 0  

while (i<=20) { 
    console.log (sum = sum + i)
    i++
}

// There are [i] bottles of beer on the table. Write a program that will execute the above mentioned statement until i equals to 5. 
// for example: "There is 1 bottle of beer on the table." "There are 2 bottles of beer on the table." and so on.. until the last one:
// "There are 5 bottles of beer on the table."

// for (var n=1; n<=5; x++) {
//     if (n = 1) {
//             console.log("There is 1 bottle of beer on the table.");
//     }
//     else if (n<=5) {
//             console.log("There is " + n + "bottle of beer on the table.");   
//     }
// }


// The odd/even reporter. Write a program that will iterate from 0 to 20 (counting from 0 to 20 while executing a specific statement). For each iteration, it will check if the current number is even or odd and display a message to the screen. e.g. ("2 is even") or (" 3 is odd")

for (var x=0; x<=20; x++) {
    if (x%2 === 0) {
            console.log(x +  " is even");
    }
    else {
            console.log(x + " is even");   
    }

}



// Multiplication Tables. Write a program that will iterate from 0 to 10. For each iteration of the for loop, it will multiply the number by 9 and display the result.e.g. ("2 * 9 = 18"). Bonus: Use a nested for loop to show the tables for every multiplier from 1 to 10 (100 results total).

for (var m=0; m <= 10; m++) {
    var result = 9 * m;
    console.log ('9 * ' + m + ' =', result)
}




// Fizz Buzz Write a program which iterates the integers from 1 to 100. But for multiples of three, print "Fizz" in addition to the number and for the multiples of five, print "Buzz" in addition to the number. For numbers which are multiples of both three and five print "FizzBuzz" in addition to the number.


for (var n = 1; n <= 15; n++)

if (n%3 == 0 && n%5 == 0) {
    console.log("FizzBuzz");
}
else if (n%3 == 0) {
    console.log("Fizz");
}
else if (n%5 == 0) {
    console.log("Buzz");
}
else {
    console.log(n)
}

// Sum of Multiples Write a program to calculate the sum of the multiples of 3 and 5 under 1000.

let sum1000 = 0 
for(let i = 1; i<1000; i++){ 
 if(i%3==0 || i%5==0){ 
 sum1000 = sum1000+i 
 } 
} 
console.log(sum1000) 



// Write programs that produce the following outputs:

// 100 200 300 400 500 600 700 800 900 1000

for(let p = 1; p<=1000; p++){ 
    if(p % 100 == 0){ 
        console.log(p) 
    } 
   } 

// 0 2 4 6 8 10 

for(let r = 0; r<=10; r++){ 
    if(r % 2 == 0){ 
        console.log(r) 
    } 
   } 


// 3 6 9 12 15


for(let k = 1; k<=15; k++){ 
    if(k % 3 == 0){ 
        console.log(k) 
    } 
   } 

// 9 8 7 6 5 4 3 2 1 0

var l = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9]
var rev =l.reverse();
let con = rev.join (' ')
console.log(con);

// 1 1 1 2 2 2 3 3 3 4 4 4

for(let o = 1; o<=4; o++){ 
        console.log(o) 
        console.log(o) 
        console.log(o) 
    } 
   

// 0 1 2 3 4 0 1 2 3 4 0 1 2 3 4

for(let s = 0; s<=4; s++){ 
    console.log(s, s, s);
} 






 

