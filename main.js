// console.log("hello");

// let a = 45;
// let b =50;
// let c = a+b;
// console.log(c);

// var d = 45;
// var e =50;
// var f = d+e;
// console.log(f);


// const g = 45;
// const h =50;
// const i = g+h;
// console.log(i);

// let j = 45;
// var k =50;
// const l = j+k;
// console.log(l);


// let age = 21;
// if(age>= 18){
//     console.log("You are eligible for vote")
// }
// else{
//     console.log("Not eligible")
// }

// let sym = Symbol('unique');
// console.log(typeof(sym));


// let num = null;
// console.log(typeof(num));
// let sum ;
// console.log(typeof(sum));
  
// // for loop

// let hey = "hello";

// for(let i = 1; i<=10; i++){
//     console.log(hey);
// }

// // do While loop

// let num1 = 1 ;
//  do{
//     console.log(num1);
//     num1++;
//  }while(num1<=50);

// // while loop

// let num2 =0 ;
// while(num2<=10){
//     console.log(num2);
//     num2 = num2+2;
// }

// let tab = 20;
// for (let i = 20; i <= 40; i += 2) {
//     console.log(i);
// }


// let arr = [5, 1, 4, 7, 9, 6, 3, 2]

// for(let i =0; i<= 7; i++){
//     if(arr[i] >= 3){
//         console.log(arr[i])
//     }
// }


// let arr1 = [5, 1, 4, 7, 9, 6, 3, 2]
// let max = arr1[0];
// for(let i = 1; i<=7; i++){
//     if(arr1[i] > max){
//    max = arr1[i]
        
//     }
// }
// console.log(max)


// let day = 4;
//  if(day==1){
//     console.log("Sunday");
//  }
//  else if(day==2){
//     console.log("Monday");
//  }
//  else if(day==3){
//     console.log("Tuesday");
//  }
//  else if(day==4){
//     console.log("Wednesday");
//  }
//  else if(day==5){
//     console.log("Thursday");
//  }
//  else if(day==6){
//     console.log("Friday");
//  }
//  else if(day==7){
//     console.log("Saturday");
//  }
//  else{
//     console.log("not valid Input")
//  }


//  let num1 = -17;

//  if(num1>0){
//     console.log("numbet is  Positive");
//  }
//  else if(num1<0){
//     console.log("Number is Negetive")
//  }
//  else{
//     console.log("number is zero")
//  }



//  let weather = "rainy";
//  let temprature = 10;
//  if(weather==="sunny" && temprature>30){
//     console.log("Its a hot day");
//  }
//  else if(weather==="sunny" && temprature>20){
//   console.log("Its a warm day")
//  }
//  else if(weather==="sunny" && temprature<20){
//     console.log("Its a cooler day");
//  }
//  else if(weather==="rainy" ){
//     console.log("Dont forget umbereiia");
//  }else{
//     console.log("Check the weather forcast");
//  }

const numbers = [1, 2, 3, 4, 5, 6];
const result = []; 

for (let i = 0; i < numbers.length; i++) {
    if (numbers[i] % 2 === 0) { 
        result.push(numbers[i] * numbers[i]); 
    }
}

console.log(result);


const num1 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

let evenCount = 0;
let oddCount = 0;

for (let i = 0; i < num1.length; i++) {
    if (numbers[i] % 2 === 0) {
        evenCount++;
    } else {
        oddCount++;
    }
}

console.log("Using for loop:");
console.log("Even numbers:", evenCount);
console.log("Odd numbers:", oddCount);


const number = [2, 4, 6, 8, 10];
const res = []; 

for (let i = 0; i < number.length; i++) {
    res[i] = numbers[i] * i; 
}

console.log( numbers);
console.log( result);

const array1 = [1, 2, 3];
const array2 = [4, 5, 6];

// Loop to append elements of array2 to array1
for (let i = 0; i < array2.length; i++) {
    array1[array1.length] = array2[i]; // Append element of array2 to array1
}

console.log("Merged array:", array1);



const array11 = [1, 2, 3];
const array22 = [4, 5, 6];

let arr = [...array11 , ...array22];
console.log(arr);