// console.log('working')

// var arr = ["apple", "pear", "bannana", "jackfruit"]
// var bool = true;
// var num = 0;

// for (let i = 0; i < arr.length; i++) {
//     console.log(arr[i])
// }
    
// for (let i = arr.length; i > 0 ; i--) {
//     console.log(arr[i-1])
// }

// while (num < 10) {
//     console.log(num);
//     num = num + 1;
// }


// funtion
// var num1 = 1;

// function addNumbers(){
//     var num2 = 2;
//     console.log(num1);

//     function innerFunction(){
//         var num3 = 3;
//         console.log(num1);
//         console.log(num2);
//     }
//     innerFunction()
// }

// addnumbers()

// function addNumbers(num1, num2){
// return num1 + num2;
// }

// var sum = addNumbers(1, 5)

// console.log(sum)


// var num1 = 1;

// function addNumbers(){
//     var num2 = 2;
//     console.log(num1);

// var name = prompt("what is your name");

// function outerFunction(goblin){

//     function innerFunction(troll){
//         console.log(troll);

//     }
//     innerFunction(goblin)
// }

// outerFunction(name)

//anonymouse functions 

// var ananFunction = function(){
//     return "hello world"
// }

// console.log(anonFunction());

//objects 

var person = {
        name: "jack", 
        age: 30,
        address: {
            house: 35,
            street: "main street",
            city: "newyork",
        },
        languiges:["html", "css", "javascript"],
        car1: "mercedes",
        car2: "ferrari",
        car3: "bicycle",
        greeting: function(){
            console.log(this)
        }
    }

    person.greeting()
    // console.log(person.name);
    // console.log(person.age);
    
    // console.log(person["address"]["house"]);
    // for (let i=1; i<4; i++){
    //     console.log(person["car" + i]);
    // }