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

// const numbers = [1, 2, 3, 4, 5, 6];
// const result = []; 

// for (let i = 0; i < numbers.length; i++) {
//     if (numbers[i] % 2 === 0) { 
//         result.push(numbers[i] * numbers[i]); 
//     }
// }

// console.log(result);


// const num1 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

// let evenCount = 0;
// let oddCount = 0;

// for (let i = 0; i < num1.length; i++) {
//     if (numbers[i] % 2 === 0) {
//         evenCount++;
//     } else {
//         oddCount++;
//     }
// }

// console.log("Using for loop:");
// console.log("Even numbers:", evenCount);
// console.log("Odd numbers:", oddCount);


// const number = [2, 4, 6, 8, 10];
// const res = []; 

// for (let i = 0; i < number.length; i++) {
//     res[i] = numbers[i] * i; 
// }

// console.log( numbers);
// console.log( result);

// const array1 = [1, 2, 3];
// const array2 = [4, 5, 6];

// // Loop to append elements of array2 to array1
// for (let i = 0; i < array2.length; i++) {
//     array1[array1.length] = array2[i]; // Append element of array2 to array1
// }

// console.log("Merged array:", array1);



// const array11 = [1, 2, 3];
// const array22 = [4, 5, 6];

// let arr = [...array11 , ...array22];
// console.log(arr);

// arr = [5,5,6,2,1]

// for(i=0; i<arr.length; i++){
//    console.log(arr[i+1]);
// }


// Arr2 = [2,3,4,7,6]; 
// let target = 7;
// for(i=0; i<Arr2.length; i++){
//    if(Arr2[i]===target){
//       console.log(`Matched ${target}` )
//    }
// }


// find sum of inner array fom the main array value/

//    let Arr1 =[5,6,4,8,[4,6,20,15,45,88,96,44],9,3,2,1]
// let sum = 0;
//    for(i in Arr1){
//       if(Array.isArray(Arr1[i])){
//          console.log(Arr1[i]);
//        for(j of Arr1[i]){
//          sum = sum + j;
//        }
//       }
     
//    }
//    console.log(Array.isArray(Arr1))
//    console.log(sum)


   // find the squre root of element and find the string in the array and make the string in the upper case

//    Arrar1 = [2,1,3,[12, 21, 11, 10], "kamla", "Jaipur"]
//   let sum1 = 0;
//    for(a in Arrar1[i]){
//       if(typeof a=== "number"){
//   console.log(a*a);
//       }
//       else if(Array.isArray(a)){
//          console.log("Areay is found");
//          for(i of a){
//             sum1 = sum1+i
//          }
         
//       }
//       else{
//          console.log(a.toString)
//       }
//    }
// console.log(sum1)



// let user ={
//    firstname:"sachin",
//    lastName: "Thalor",
//    age: 20,
//    address:{
//        city:"jaipur",
//        state:"rajasthan",
//        country:"india"
//    },
 
//    hobbies:["cricket","football" ,["chess", "sudoko"],"reading"],
//    isMarried:false 
       
// }

// console.log(user.hobbies[0])

// if(user.hobbies[0]==="cricket"){
//    console.log("play")
// }
// else{
//    console.log("not play")
// }
// console.log(user.hobbies.includes("cricket"));

// console.log(user.hobbies[2].includes("chess"));

// let {age, gender, hobbies} = user
// console.log(gender)
   

// destrucring

// let { firstname:fn , age:a , grnder } = user
// console.log(fn, a)
    

  
// let data =  [{
//    "id": 1,
//    "first_name": "Annissa",
//    "last_name": "Rubinov",
//    "email": "arubinov0@prweb.com",
//    "gender": "Female",
//    "ip_address": "4.25.213.14",
//    "salery": 10000,
//  }, {
//    "id": 2,
//    "first_name": "Sarena",
//    "last_name": "Gut",
//    "email": "sgut1@usda.gov",
//    "gender": "Female",
//    "ip_address": "165.183.145.15",
//    "salery": 50000,
//  }, {
//    "id": 3,
//    "first_name": "Jacquette",
//    "last_name": "Leal",
//    "email": "jleal2@cmu.edu",
//    "gender": "Female",
//    "ip_address": "136.79.88.6",
//    "salery": 82000,
//  }, {
//    "id": 4,
//    "first_name": "Fawne",
//    "last_name": "Purkins",
//    "email": "fpurkins3@free.fr",
//    "gender": "Female",
//    "ip_address": "41.96.173.217",
//    "salery": 88000,
//  }, {
//    "id": 5,
//    "first_name": "Zacharia",
//    "last_name": "Elvins",
//    "email": "zelvins4@yandex.ru",
//    "gender": "Male",
//    "ip_address": "12.218.236.92",
//    "salery": 85000,
//  }, {
//    "id": 6,
//    "first_name": "Karim",
//    "last_name": "Harpur",
//    "email": "kharpur5@slashdot.org",
//    "gender": "Male",
//    "ip_address": "39.140.108.163",
//    "salery": 60000,
//  }, {
//    "id": 7,
//    "first_name": "Doyle",
//    "last_name": "Batham",
//    "email": "dbatham6@cdbaby.com",
//    "gender": "Male",
//    "ip_address": "146.186.250.17",
//    "salery": 70000,
//  }, {
//    "id": 8,
//    "first_name": "Base",
//    "last_name": "Lakey",
//    "email": "blakey7@hubpages.com",
//    "gender": "Male",
//    "ip_address": "249.124.77.126",
//    "salery": 90000,
//  }, {
//    "id": 9,
//    "first_name": "Jeremiah",
//    "last_name": "Champley",
//    "email": "jchampley8@samsung.com",
//    "gender": "Male",
//    "ip_address": "64.143.25.17",
//    "salery": 80000,
   
   
//  }]

//  console.log(data[0])
//  console.log(data[8].email)
// let totalsal = 0
//  for(i of data){
//    // console.log(i.email)
//    // console.log(i.salery)
//  totalsal = totalsal + i.salery
//  }
//  console.log(totalsal)
   
//  let totalmale = 0;
//  let totalfemale = 0;
//  for(i of data){
//    if(i.gender==="Male"){
//       totalmale++;
//    }
//    else if(i.gender==="Female"){
//       totalfemale++;
//    }
//  }
//  console.log(totalmale);
//  console.log(totalfemale);

//  let emp = 0;
//  for(i of data){
//    if(i.salery>=50000){
//       emp++;
//    }
//  }
// console.log(`number of employe which salary above to 50000  = ${emp}`)


// practice Questions

// --
// Filter users who are aged 25 or younger.
// Map the array to get an array of user names.
// Filter orders with an amount greater than 50.
// Map the array to get an array of order IDs.
// Filter users who have at least one order with a status of 'pending'.
// Map the array to get an array of objects containing user names and their total order amounts.
// Filter orders with an amount between 30 and 70.
// Map the array to get an array of objects containing user names and their completed order IDs.
// Filter users who live in the 'USA' and have at least one order with an amount greater than 50.
// Filter users who live in the 'USA' and have at least one order with an amount greater than 50


const complexData = [
   {
     id: 1,
     name: "John Doe",
     age: 30,
     address: {
       street: "123 Main St",
       city: "Anytown",
       country: "USA",
     },
     orders: [
       { orderId: "A123", amount: 50.75, status: "completed" },
       { orderId: "B456", amount: 30.25, status: "pending" },
     ],
   },
   {
     id: 2,
     name: "Jane Smith",
     age: 25,
     address: {
       street: "456 Oak St",
       city: "Othercity",
       country: "USA",
     },
     orders: [
       { orderId: "C789", amount: 100.5, status: "completed" },
       { orderId: "D012", amount: 75.2, status: "completed" },
     ],
   },
 ]


 // / Filter users who are aged 25 or younger.
 let user = 0;
 for(u of complexData){
   if(u.age>25){
      user++
   }
 }
 console.log(`User who is Younger than 25 ${user}`)

//  -----------------------------------------------------------------------

// / Map the array to get an array of user names.

 for(u of complexData){
   console.log(u.name)
 }


//  ------------------------------------------------------------------------
// Filter orders with an amount greater than 50.
 


for(u of complexData){
   if(u.address.country == 'USA'){
     
     if(u.orders[0].amount || u.orders[1].amount > 50){
      console.log(u)
     }
   }
 }

//  console.log(u)                 //????


//  -------------------------------------------------------------------
// Map the array to get an array of order IDs.

for(d of complexData){
   console.log(`the id of complexData ${d.id}`)
}

// ---------------------------------------------------------------------
// Filter users who have at least one order with a status of 'pending'.
 
for(data of complexData){
      for(a of data.orders){
         if(a.status == 'pending'){
            console.log(a)
         }
      }
}  
// -------------------------------------------------------------------


