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
   

// **********************************************************destrucring*******************************

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


// const complexData = [
//    {
//      id: 1,
//      name: "John Doe",
//      age: 30,
//      address: {
//        street: "123 Main St",
//        city: "Anytown",
//        country: "USA",
//      },
//      orders: [
//        { orderId: "A123", amount: 50.75, status: "completed" },
//        { orderId: "B456", amount: 30.25, status: "pending" },
//      ],
//    },
//    {
//      id: 2,
//      name: "Jane Smith",
//      age: 25,
//      address: {
//        street: "456 Oak St",
//        city: "Othercity",
//        country: "USA",
//      },
//      orders: [
//        { orderId: "C789", amount: 100.5, status: "completed" },
//        { orderId: "D012", amount: 75.2, status: "completed" },
//      ],
//    },
//  ]


 // / Filter users who are aged 25 or younger.
//  let user = 0;
//  for(u of complexData){
//    if(u.age>25){
//       user++
//    }
//  }
//  console.log(`User who is Younger than 25 ${user}`)

//  -----------------------------------------------------------------------

// / Map the array to get an array of user names.

//  for(u of complexData){
//    console.log(u.name)
//  }


//  ------------------------------------------------------------------------
// Filter orders with an amount greater than 50.
 


// for(u of complexData){
//    if(u.address.country == 'USA'){
     
//      if(u.orders[0].amount || u.orders[1].amount > 50){
//       console.log(u)
//      }
//    }
//  }

//  console.log(u)                

//  -------------------------------------------------------------------
// Map the array to get an array of order IDs.

// for(d of complexData){
//    console.log(`the id of complexData ${d.id}`)
// }

// ---------------------------------------------------------------------
// Filter users who have at least one order with a status of 'pending'.
 
// for(data of complexData){
//       for(a of data.orders){
//          if(a.status == 'pending'){
//             console.log(a)
//          }
//       }
// }  
// -------------------------------------------------------------------


// *****************************************************About function***********************

// Create a function greet that takes two positional arguments: name and greeting, and returns a personalized greeting message.

// function greet(name, greeting) {
//    return `${greeting}, ${name}!`;
// }

// console.log(greet("Avani", "Hello"));

// ---------------------------------------------------------

// Write a function calculatePrice that takes two arguments: price and taxRate. If taxRate is not provided, it should default to 5%.

// function calculatePrice(price, taxRate = 0.05) {
//    return price + (price * taxRate);
// }


// console.log(calculatePrice(100)); 
// console.log(calculatePrice(100, 0.1));

// ------------------------------------------------------------------------

// Create a function sumNumbers that takes an unknown number of arguments using the rest operator and returns their sum.

// function sumNumbers(...numbers) {
//    return numbers.reduce((sum, number) => sum + number, 0);
// }


// console.log(sumNumbers(1, 2, 3, 4)); 
// console.log(sumNumbers(10, 20));     
// console.log(sumNumbers());

// ========================================================================

// Create a function introduce that takes three positional arguments: firstName, lastName, and age, and returns a sentence introducing the person.

// function introduce(firstName, lastName, age) {
//    return `Hello, my name is ${firstName} ${lastName} and I am ${age} years old.`;
// }


// console.log(introduce("Kamla", "Bharia", 25)); 


// console.log(introduce("Divyana", "Choudhary", 11)); 


// ================================================================================

// Write a function makeSandwich that takes two arguments: breadType and filling. The default value for breadType should be "whole wheat".

// function makeSandwich(breadType = "whole wheat", filling) {
//    return `Here is your ${filling} sandwich on ${breadType} bread.`;
// }


// console.log(makeSandwich("sourdough", "turkey")); 


// console.log(makeSandwich(undefined, "peanut butter and jelly")); 

// ===================================================================

// Create a function multiply that takes two positional arguments x and y, with a default value for y as 1, and returns the result of multiplying them.

// function multiply(x, y = 1) {
//    return x * y;
// }


// console.log(multiply(5, 3));  
// console.log(multiply(7));     
// console.log(multiply(0, 10)); 

// ================================================================

// Write a function getTotalPrice that takes an unknown 
// number of prices as arguments using the rest operator and returns the total price.

// function getTotalPrice(...prices) {
//    let total = 0;
//    for (let price of prices) {
//        total += price;
//    }
//    return total;
// }


// console.log(getTotalPrice(10, 20, 30)); 
// console.log(getTotalPrice(5, 15));      
// console.log(getTotalPrice());    

// ==============================================================

// Create a function buildSentence that accepts three arguments: subject, verb, and object. If no object is passed, it should default to "something".

// function buildSentence(subject, verb, object = "something") {
//    return `${subject} ${verb} ${object}.`;
// }


// console.log(buildSentence("I", "like", "JavaScript")); 


// console.log(buildSentence("She", "wants")); 


// ============================================================


// Write a function addNumbers that takes an unknown number of numbers using the rest operator and returns the sum.

// function addNumbers(...numbers) {
//    let sum = 0;
//    for (let num of numbers) {
//        sum += num;
//    }
//    return sum;
// }


// console.log(addNumbers(1, 2, 3, 4));  
// console.log(addNumbers(5, 15));        
// console.log(addNumbers(0));            
// console.log(addNumbers());  

// ============================================================


// Create a function displayInfo that takes three arguments: name, age, and city. If no city is provided, it should default to "Unknown".
// function displayInfo(name, age, city = "Unknown") {
//    return `${name}, ${age} years old, from ${city}.`;
// }


// console.log(displayInfo("Alka", 25, "Rajsthan")); 


// console.log(displayInfo("Babita", 30)); 

// ==================================================

// Write a function orderPizza that takes two arguments: size and topping. If no topping is provided, it should default to "cheese".

// function orderPizza(size, topping = "cheese") {
//    return `Order: ${size} pizza with ${topping} topping.`;
// }


// console.log(orderPizza("medium", "pepperoni")); 


// console.log(orderPizza("large")); 

// =============================================================

// Create a function makeCoffee that takes one required argument type and an unknown number of optional
//  ingredients using the rest operator.

// function makeCoffee( type , ...ingredients){
//      return `Wav my ${type} tasty and have many ${ingredients}  `
// }

// console.log(makeCoffee("Hotcoffee" , "water", "milk", "coffee", "sugar" ))


// console.log(makeCoffee("Hotcoffee", "unknown" ))



// Write a function introducePerson that takes two positional arguments name and profession,\
//  with profession defaulting to "Student".
//   function introducePerson(name , profession = "Student"){
//        return (`My name is ${name} , i am a ${profession}`)
//   }
//    console.log(introducePerson("Avani" , "Teacher" ))

//    console.log(introducePerson("Avani"  ))

   // ===================================================================

   // Write a function buildPerson that takes two arguments: firstName and lastName,
   //  and returns an object representing the person.

//    function personDetail(firstName, lastName){
//        return{
//          Firstname : firstName,
//          Lastname : lastName,
//          FullName : `${firstName} ${lastName}`
//        }
//    }
//  let person = personDetail("Kamla" , "Bharia");
//  console.log(person)

//  ================================================================

// Create an object car with primitive properties: brand, model, and year.

// let car = {
//    brand : "Dezire",
//    model : "Top",
//    Year : 2016
// }
// console.log(car)

// // =================================================================

// // Create an object book with non-primitive properties: title, author, and reviews (where reviews is an array of review objects).
// const book = {
//    title: "Premchand Ki Kahani",
//    author: {
//        firstName: "Munsi",
//        lastName: "PremChand",
//    },
//    reviews: [
//        {
//            reviewer: "Sannu",
//            rating: 5,
//            comment: "A timeless classic that captures the human spirit.",
//        },
//        {
//            reviewer: "Saniya",
//            rating: 4,
//            comment: "An inspiring story with profound lessons.",
//        },
//    ],
// };

// console.log(book);
// ================================================================

// Create an object laptop with both primitive (brand, price) and non-primitive (features - an array) properties.

// const laptop = {
//    brand: "Dell", 
//    price: 12000, 
//    features: [ 
//        "16GB RAM",
//        "512GB SSD",
//        "Intel Core i7 Processor",
//        "15.6-inch Display",
//        "Backlit Keyboard"
//    ]
// };

// console.log(laptop);

// ====================================================================
// Create an object person with a method greet that prints a greeting message using the name property.
//  const person2 = {
//    Name : "Kamla",
//    greet : function(){
//   console.log(`hello My name is ${person2.Name}`)
//    }
//  }
// person2.greet()

// =============================================================

// Write a function buildTeam that takes an unknown number of team members using the rest operator and returns an array of their names.


//  function buildTeam(...member){
//    return member
// }

// console.log(buildTeam("Sachin", "Rahul", "Darvid", "Dhoni"))

// ====================================================================

// Create a function discountPrice that takes two positional arguments: price and discountPercentage. If no discount is provided, it should default to 10%.
// function discountPrice(price, discountPercentage = 10) {
//    const discountedAmount = (price * discountPercentage) / 100;
//    return price - discountedAmount;
// }


// console.log(discountPrice(100)); 

// ========================================================================
// Write a function describePet that accepts two arguments: petName and
//  petType. If no petType is provided, it should default to "dog".

// function describePet(petName, petType = "dog") {
//    return `${petName} is a ${petType}.`;
// }


// console.log(describePet("Buddy"));

// ===============================================================

// Create a function calculateArea that accepts two arguments: length and width. If width is not provided, 
// it should default to the same value as length (for a square).

// function calculateArea(length, width = length) {
//    return length * width;
// }

// console.log(calculateArea(5))

// ========================================================

// Write a function joinStrings that accepts an unknown number of strings
//  using the rest operator and returns them concatenated into one string.

// function joinStrings(...strings) {
//    return strings.join('');
// }


// console.log(joinStrings("Hello", " ", "World", "!"));
// ======================================================================

// Create a function createUserProfile that accepts three arguments: name, email, and role. If no role is provided,
//  it should default to "user".

// function createUserProfile(name, email, role = "user") {
//    return {
//        name: name,
//        email: email,
//        role: role,
//    };
// }


// const user1 = createUserProfile("Isha", "isha@example.com");
// const user2 = createUserProfile("babita", "babita@example.com", "teacher");

// console.log(user1);


// console.log(user2);

// =========================================================================

// Write a function divideNumbers that takes two arguments: a and b, with
//  b defaulting to 1 if not provided.


// function divideNumbers(a, b = 1) {
//    return a / b;
// }


// console.log(divideNumbers(10)); 
// console.log(divideNumbers(10, 2));

// ===========================================================================

// Create a function combineArrays that accepts an unknown number of arrays using the rest operator
//  and returns one combined array.

// function combineArrays(...arrays) {
//    const result = [];
//    for (const array of arrays) {
//        for (const element of array) {
//            result.push(element);
//        }
//    }
//    return result;
// }


// console.log(combineArrays([1, 2], [3, 4], [5, 6])); 


// console.log(combineArrays(["a", "b"], ["c", "d"], ["e"])); 



// =============================================================

// Write a function introduceEmployee that takes two positional arguments: employeeName and position, with position
//  defaulting to "intern".

// function introduceEmployee(employeeName, position = "intern") {
//    return `Hello, my name is ${employeeName} and I am a ${position}.`;
// }

// console.log(introduceEmployee("Kamla")); 


// console.log(introduceEmployee("Shivnya", "developer")); 

// =========================================================

// Create a function findAverage that takes an unknown number of scores using the rest operator and returns the
//  average score.

// function findAverage(...scores) {
//    let total = 0;
//    for (let i = 0; i < scores.length; i++) {
//        total += scores[i];
//    }
//    return total / scores.length;
// }


// console.log(findAverage(90, 85, 88, 92)); 
// console.log(findAverage(75, 80, 85));

// =============================================

// Write a function buildCar that accepts three arguments: brand, model, and year. 
// If no year is provided, it should default to the current year.

// function buildCar(brand, model, year = new Date().getFullYear()) {
//    return {
//        brand: brand,
//        model: model,
//        year: year
//    };
// }


// const car1 = buildCar("Tata", "Top");
// const car2 = buildCar("Honda", "Civic", 2020);

// console.log(car1);


// console.log(car2); 


// ***********************************************************hoisting-------------------------------

// fun1()

// function fun1(){
//    console.log("funOne")
// }
// ====================================

// *******************************************************call ,apply, bind Functions**************************

// function returning object

// let person11 = {
//    Name: "John",
//    Age: 30,
//    Address: {
//       street: "123 main st",
//       city: "Jaipur",
//       state: "CA",
//    },
//    about: function(){
//       console.log(`my name is ${this.Name}`)
//    }
// }
// person11.about()


// let person111 = {
//    Name: "John",
//    Age: 30,
//    Address: {
//       street: "123 main st",
//       city: "Jaipur",
//       state: "CA",
//    },
//    about: function(){
//       console.log(`my city is ${this.Address.city}`)
//    }
// }
// person111.about()

// =============================================

// let person3 = {
//    Name: "John2",
//    Age: 30,
//    Address: {
//       street: "123 main st",
//       city: "Jaipur",
//       state: "CA",
//    },
  
// }
//  person11.about.call(person11)

// person11.about.call(person3)

// ================================================

// let person11 = {
//    Name: "John",
//    Age: 30,
//    Address: {
//       street: "123 main st",
//       city: "Jaipur",
//       state: "CA",
//    },
//    about: function(hobby, hobby2){
//       return `my name is ${this.Name} hobby is ${hobby} and ${hobby2}`
//    }
// }
// person11.about()


// let person3 = {
//    Name: "John2",
//    Age: 30,
//    Address: {
//       street: "123 main st",
//       city: "Jaipur",
//       state: "CA",
//    },
  
// }

// person11.about.call(person11, "playing chess", "cricket")

// person11.about.call(person11, ["playing chess", "cricket"])

// person11.about.apply(person11, ["playing chess", "cricket"])

// ==============================================================       bind         ================================

// let  bio = person11.about.bind(person11, "playing chess", "cricket")

// console.log(bio())

// let bio = person11.about.call(person11, "playing chess", "cricket")

// console.log(bio)


// let person = {
//    name: "john",
//    age: 30,
//    Address: {
//             street: "123 main st",
//             city: "Jaipur",
//             state: "CA",
//          },

//  about: function(hobby, hobby2){
                  // console.log(`my name is ${this.name} hobby is ${hobby} and ${hobby2}`)

//                   return `my name is ${this.name} hobby is ${hobby} and ${hobby2}`  //this only for bind function

//                }
// }
// let user ={
//    name: "John3",
//    age:30
// }

// person.about.call(person, "play chess", "Kho-Kho")

// person.about.apply(person, ["play chess", "Kho-Kho"])

// let bio = person.about.bind(person, "play chess", "Kho-Kho")

// console.log(bio())


// =========================================================

// function greet(greeting, punctuation) {
//    return ${greeting}, ${this.name}${punctuation};
// }

// const person = { name: "Alice" };

// Use the call method to invoke greet with person as the context and arguments "Hello" and "!".


// function greet(greeting, punctuation) {
//        return `${greeting}, ${this.name}${punctuation}`;
//    }
   
//    const person = { name: "Alice" };

// const res = greet.call(person , 'Hwllo', " ! ")
// console.log(res )

// ====================================================

// function sum(a, b, c) {
//    return a + b + c + this.offset;
// }

// const context = { offset: 5 };

// Use `apply` to calculate the sum with the context and an array of arguments `[1, 2, 3]`.

// function sum(a, b, c) {
//     return a + b + c + this.offset;
//     }
   
//     const context = { offset: 5 };
  
//     console.log(sum.apply(context,  [1, 2, 3]))

   //  ==============================================================

//    function describe(hobby, age) {
//       return `${this.name} likes ${hobby} and is ${age} years old.`;
//   }
  
//   const user = { name: "John" };
  
  // Use both `call` and `apply` to invoke `describe` with the context `user` and arguments "cycling" and 25.

//   function describe(hobby, age) {
//          return `${this.name} likes ${hobby} and is ${age} years old.`;
//      }
     
//      const user = { name: "John" };

//      console.log(describe.call(user , "cycling", "25"))
    
     
//      console.log(describe.apply(user ,["cycling", "25"] ))

   //   ======================================================

   // const obj1 = { name: "David" };
   // const obj2 = { name: "Sarah" };
   
   // function sayName() {
   //     return this.name;
   // }
   
   // Use `call` to borrow `sayName` from `obj1` and apply it to `obj2`.

//    const obj1 = { name: "David" };
//    const obj2 = { name: "Sarah" };
   
//    function sayName() {
//        return this.name;
//    }
// console.log(obj1.name)

//    console.log(sayName.call(obj2))

   // ============================================

//    function calculateFinalPrice(tax, discount) {
//       return this.price + tax - discount;
//   }
  
//   const product = { price: 100 };
  
  // Use `call`, `apply`, and `bind` to calculate the final price with tax = 20 and discount = 10.

//   function calculateFinalPrice(tax, discount) {
//    return this.price + tax - discount;
// }

// const product = { price: 100 };

// console.log(calculateFinalPrice.call(product, 20 , 10))
// console.log(calculateFinalPrice.apply(product,[20 , 10] ))



// const res1 = calculateFinalPrice.bind(product, 20 , 10)

// console.log(res1())

// ====================================================

// ========================================================function ruturning objects****************

// ----first Way------------

// let person = function(firstName, lastName, age){
//    let user = {}
//    user.firstName= firstName,
//    user.lastName= lastName,
//    user.age= age
//    user.about = function(){
//     return `${this.firstName} ${this.lastName} ${this.age}`
//    }
//    return user
// }
//  let creatUser = person("Michel", "Jorden", 50)
//  console.log(creatUser.about())


// --------------Second Way---------------

// let anotherPerson = {
//    about : function(){
//       return  `${this.firstName} ${this.lastName}`
//    }
// }
// let person = function(firstName, lastName, age){
//    let user = {}
//    user.firstName= firstName,
//    user.lastName= lastName,
//    user.age= age
//    user.about = anotherPerson.about
//    return user
// }
//  let creatUser = person("Michel", "Jorden", 50)
//  console.log(creatUser.about())

//  -----------Another Best Way---------------------

// =====================================================  _proto_  or [[prototype]]  || protoitype 

// let user = {
//    name: "Shivem",
//    age: 20
// }
//  let user2= Object.create(user)
//    // name: "s",
//    // gender: "male"
//    user2.name = "s",
//    user2.gender = "male"
 

//  console.log(user2.age)

// let anotherPerson = {
//    about : function(){
//       return  `${this.firstName} ${this.lastName}`
//    }
// }
// let person = function(firstName, lastName, age){
//    let user = Object.create(anotherPerson)
//    user.firstName= firstName,
//    user.lastName= lastName,
//    user.age= age
//    user.about = anotherPerson.about
//    return user
// }
//  let creatUser = person("Michel", "Jorden", 50)
//  console.log(creatUser.about())


// let obj1 = {
//    name: "Kamla",
//    about : function(){
//             return  `${this.name}`
//          }
// }

// let obj2 = Object.create(obj1)
//    obj2.age = 20,
//    obj2.gender = "male"

//    console.log(obj2.about())

   // =================================== 12-11-2024 --- _proto_ ==============================

// let anotherPerson ={
//    about : function(){

//    },
//    bio: function(){
//       return `${this.firstName} ${this.lastName} ${this.age}`
//    },
//    sirName : function(){
//       return `${this.lastName}`
//    }
// }

// let person = function(firstName, lastName, age){
//    user = Object.create(anotherPerson)
//     user.firstName = firstName;
//     user.lastName = lastName;
//     user.age = age;

//     return user

// }

// let createdUser = person("Michel", "Jorden", 20)
// console.log(createdUser.bio())

// console.log(createdUser.sirName())




// -----------------------------------------------------------prototype-----------------------

// -----------------------------------------------------object  .assign()----------------------------------

// let obj1 = {
//    name: "kamla",
//    age: 18
// }
//  let obj2 = {
//    a : 5,
//    b: 88,
//  }

//  let obj = Object.assign(obj1, obj2)
//  let obj = Object.assign(obj1,{})
// let obj = Object.assign({a : 23 , c: 45}, obj2)
// let obj = Object.assign(obj2, {a : 23 , c: 45})      //in this its first priority a take 23 not a= 5
//  console.log(obj)

// -------------------------------------------Object.freeze-----------------------------------------------

// let detail = {
//    name: "kamla",
//    age: 30
// }

// Object.freeze(detail)
 

// detail.name = "komaldff"
// detail.age = 28
// console.log(detail)


// *****************************************************8	assignment objects ******************************************

// 1. Create an object using Object.create with a prototype that includes a method to calculate the square of a number.


//   let mathPrototype = {
//     calculateSquire : function(val){
//     return val*val;
//    }
//   }

//   let proto = Object.create(mathPrototype);

//   let value = 6;

//   console.log(`Squire Number is : ${value}` ,proto.calculateSquire(value));

//   =================================================================================

//   2. Use Object.assign to merge two objects representing user profiles.
// const user1 = { name: "Alice", age: 30 };
// const user2 = { email: &quot;alice@example.com", country: "USA" };

// const user1 = { 
   
//    name: "Alice",
//     age: 30 
// };

// const user2 = { 
//    email: "alice@example.com", 
//    country: "USA"
//  };


//  let user = Object.assign(user1, user2)

//  console.log(user)

// ================================================================================

//  3. Seal an object representing a book and attempt to add and modify its properties.

// let book = {
//    name : "Story of PremCahand",
//    Author:  "Munsi Premchand",
//    pages : 500 
// }

// Object.seal(book)

// book.Author = "Kabir"

// book.publisher = "Manmohan"

// // console.log(book)

// delete book.Author

// console.log(book)

// console.log(`Is the object sealed?`, Object.isSealed(book));

// =======================================================================================

// 4. Freeze an object representing a car and try to modify its properties.

// let car = {
//    name : "Swift Desire",
//    model : 2022,
//    // color : "White"
// }

// Object.freeze(car) 

// car.name = "Creta";
// car.color = "White";

// delete car.model
// console.log(car)

// console.log(` Is car freeze ?  :` , Object.isFrozen(car))

// ================================================================

// 5. Verify if the objects in exercises 3 and 4 are sealed or frozen.

// Its checked in Above both Questins 3 and 4

// 6. Create an object using Object.create that inherits properties and methods from two prototypes.

//  let proto1 ={
//     greet : function (){
//       return `Hello My Name Is ${this.name}`;
//     }
//  }

//  let proto2 ={
//    myAge : function (){
//      return ` My Age is ${this.age}`;
//    }
// }

// let BothProto = Object.assign({}, proto1, proto2);

// BothProto.name = "Kamla"

// BothProto.age = 18

// let person = Object.create(BothProto);

// console.log(person.greet())
// console.log(person.myAge())

// ================================================================

// 7. Use Object.assign to create a shallow copy of an object

// let aboutMe = {
//    name : "kamla",
//    age : 18,
//    address:{
//       city: "Fatehpur",
//       village: "Nagardas"
//    }
// }

// let sallowCopy = Object.assign({}, aboutMe);

// sallowCopy.name = "Rekha"
// sallowCopy.address.city = "Ramgarh"

// console.log(aboutMe)
// console.log(sallowCopy)

// ======================================================

// Seal an object and verify its properties cannot be deleted or added but can be modified.

// let myCar = {
//    name: "Oddy",
//    model : 2024,

// }

// Object.seal(myCar)

// delete myCar.name;

// myCar.colour = "white"

// myCar.name = "Scorpio"

// console.log(myCar)

// console.log(Object.isSealed(myCar))

// ================================================================

// Freeze an object and verify its properties cannot be modified or added.

// let myNewCar = {
//    name: "Oddy",
//    model : 2024,

// }

// Object.freeze(myNewCar)

// delete myNewCar.name;

// myNewCar.colour = "white"

// myNewCar.name = "Scorpio"

// console.log(myNewCar)

// console.log(Object.isFrozen(myNewCar))

// ===========================================================

// Create a function that seals an object and prevents further modification of properties.

// let myfunction = function(obj){
//    Object.seal(obj)
//    return obj;
// }

// let address = {
//    name: "Komal",
//     age: 18, 
//     city: "Sikar"
// }

// let sealedObj = myfunction(address)

// sealedObj.name = "Kamla";

// delete sealedObj.age;

// sealedObj.country = "Indea"
// console.log(myfunction(sealedObj))
// console.log(Object.isSealed(sealedObj))

//   ======================================================16-12-24==============================================

// console.log(createdUser.__proto__)

// =============================================prototype==============================================

// let hello = function(){
//    console.log("hello");
// }

// console.log(hello)
// hello.prototype.name= "Kamla"
// console.log(hello.prototype)

// if(hello.prototype){
//    console.log("property is exist")
// }else{
//    console.log("property is not exist")
// }

// let person = function(firstName,lastName,age){
//    let user = Object.create(person.prototype)
//    user.firstName = firstName;
//    user.lastName = lastName;
//    user.age = age;
//    return user
// }

// person.prototype.about = function(){
//    return `${this.firstName} ${this.lastName}`
// }

// let createdUser = person("Kamla", "Bharia", 29)
// console.log(createdUser.about());

// let  detail = function(){
   
//    detail.prototype.name="hg"
//    let obj2 =  Object.create(detail.prototype)

   
//       obj2.state="Rajsthan",
//       obj2.country = "India"
//    return obj2;

// }
// let person =detail()

// console.log(detail.prototype)


// =========================================18-12-2024==================================

//  new keyword-------------

// function FunObj(name,age,address){
//               //   let  obj1=Object.create(funObj.prototype)
// this.name=name
// this.age=age
// this.address=address
// FunObj.prototype.hobby="chess"
//                  // return obj1                   not return
// }

// let user = new FunObj("Kamla", 25, "Jaipur")
// // console.log(user.hobby)
// console.log(user.name)

// ==============================================   call Back Function     ===============================

//       ********************************* Map,filter,reduce ******************************

// let Arr =[2,5,6,3,8,9,44] 
//  function squrefun(num){
//    return num*num;
//  }

//  for(let a of Arr){
//    console.log(squrefun(a))
//  }

// let Arr =[2,5,6,3,8,9,44] 

// function squrefun(num){
//       // return num*2;
//       return num+4
//     }
//  console.log(Arr.map(squrefun))

// function oddNum(num){
//    if(num%2===0){
//       return num
//    }
//    return false;
// }
// console.log(Arr.map(oddNum))

// Arr.map((a)=>{
   //    console.log(a*2)
   // })
   
   // let Arr =[2,5,6,3,8,9,44] 
   // Arr.map((d)=>{
   //    console.log(d)
   // })

   // let strofArr = ["kamla", "komal", "Vimala", "Suman"]
   
   // strofArr.map((b)=>{
   //    console.log(b.toUpperCase())
   // })

   // let data = [{}, [],{name:"sfg",age:33}, 565,"hello"]

   // data.map((d)=>{
   //    console.log(d)
   // })

   // let obj1={
   //    name:"kamla",
   //    age: 32,
   // }
   // let obj2={
   //    name:"D",
   //    age: 33,
   // }
   // let obj3={
   //    name:"Avani",
   //    age: 34,
   // }
   // let data = [obj1,obj2,obj3]
   // data.map((obj)=>{
   //    // console.log(obj.name)
   //    console.log(obj.age)
   // })
//    let data =[
//       {name:"kamla",age:23,gende:"female",sallery:55},
//       {name:"Divyana",age:33,gende:"female",sallery:65},
//       {name:"Avani",age:13,gende:"female",sallery:75},
//    ]
//   let saleries= data.map(person=>person.sallery);
   
//       let totalSalery =0;
//       for(let sum of saleries){
//          totalSalery=totalSalery+sum
//       }
      
// console.log(totalSalery)

// let A= [2,3,4,5,6,7,8]

// let result = A.map((a)=>{
//    if(a%2===0){
//       return a
//    }
// })
// console.log(result)

// ===================================================    filter (call back function)   ==============================================

// let A= [2,3,4,5,6,7,8]

// let result = A.filter((a)=>{
//    if(a%2===0){
//       return a
//    } 
// })
// console.log(result)

// ========================================  reduce  (call back function)  =============================

// let A = [2,40,4,8,9,12,5]
//  const res = A.reduce((a,c)=>{
//    return a+c
// })
// console.log(res)
// 

// let preammount = 400;
// const res = A.reduce((a,c)=>{
//       return a+c
//    },50)
//    console.log(res)

// const res = A.reduce((a,c)=>{
//    return a+c
// },0)
// console.log(res)

   
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

// 1... Filter users who are aged 25 or younger.


// let ages = complexData.map((a)=>a.age)

// let ages = complexData.filter((a)=>{
//         return a.address
//    // console.log("data is " ,a.age) 
// })
// console.log(ages) 

// const youngUsers = complexData.filter(person => person.age <= 25);

// const youngUsers =complexData.map(person => person.age <=25); 
// console.log(youngUsers);

//2... Map the array to get an array of user names.
// let names = complexData.map((a)=>{
//    console.log(a.name)
// })

// 3...Filter orders with an amount greater than 50.


