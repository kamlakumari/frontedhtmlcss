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


let arr = [5, 1, 4, 7, 9, 6, 3, 2]

for(let i =0; i<= 7; i++){
    if(arr[i] >= 3){
        console.log(arr[i])
    }
}


let arr1 = [5, 1, 4, 7, 9, 6, 3, 2]
let max = arr1[0];
for(let i = 1; i<=7; i++){
    if(arr1[i] > max){
   max = arr1[i]
        
    }
}
console.log(max)
