// 1. Write a program to print all natural numbers from 1 to n. – using while
// loop


// let n = 10; 
// let i = 1; 

// while (i <= n) {
//     console.log(i); 
//     i++; 
// }


// ===========================================================

	

// 2. Write a program to print all natural numbers in reverse (from n to 1).

// let n = 1;
// let i = 10;
// while(i>=n){
//     console.log(i);
//     i--;
// }

// let currentChar = 'a'; 

// while (currentChar <= 'z') {
//     console.log(currentChar); 
//     currentChar = String.fromCharCode(currentChar.charCodeAt(0) + 1); 
// }


// 4. Write a program to print all even numbers between 1 to 100. – using
// while loop

// let n = 100;
// for(let i = 1; i<=100; i++){
//     if(i%2==0){
//         console.log(i)
//     }
// } 

let n= 10;
let sum = 0;
for(let i =1; i<=n; i++){
    if(i%2 != 0){
      sum = sum+i;
    }
}

console.log(sum);