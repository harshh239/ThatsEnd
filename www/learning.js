console.log("hello");
document.write('Dhruv');
document.writeln('Parmar');
document.getElementById('h-2').innerHTML = "Dhruv parmar"
// Variable
// var
var Studnet="Dhruv";
console.log("Student Name :"+Studnet)
 var Studnet="Dhruv Parmar";
console.log("Student Name :"+Studnet)
//let
let n=12
console.log("student class is ",n)
// let n=126
// console.log("student class is ",n)// Error
n++
console.log("student class is ",n)
//const 
const pi=3.14
console.log("pi value is",pi)
// pi++
// console.log(pi)// ERROR:-Uncaught TypeError: Assignment to constant variable.


/*  typeof() is a function is use to get data type */
//Number
console.log("Pi Type of :",typeof(pi))
console.log("n Type of :",typeof(n))
//string
console.log("Studnet Type of :",typeof(Studnet))    
var num="123"
console.log("num Type of :",typeof(num))    
//Array
var arr=[1,3,4,5,6,7,8,0,12,12,3,42,42]
console.log(arr)
console.log(typeof(arr))///object-Prototype Array
/* Object */
var person = {
    name: "Dhruv",
    age: 22,
    city: "Rajkot"
};
console.log(person)
console.log(typeof(person))
/////
class emp{
    name="Dhurv";
    surname="Parmar";
    age=22
}
console.log(emp)
var obj = new emp
console.log(obj)
console.log(typeof(obj))//object

//Operator
var a=10;
var b="10";
//airthmatic
var sum =a+b;
console.log("sum",sum)

var mul=a**2
console.log("Multiple",mul)

console.log(a<b)
console.log(b<a)
console.log(a==b)
console.log(a===b)


var arr = [23,44,35,77,43,68,99];
var arr1 = [43,23,35,77,34,69,89];
var arrUnion = arr+arr1;
console.log("array union",arrUnion);

var arrequal = arr == arr1;
console.log("array eqal",arrequal);

var Company_name = "ThatsEnd";
var Company_type = "pvt ltd";
console.log(Company_name+' '+Company_type);
 
var name = "druv";
name+=' parmar';
console.log("fullname",name);
 

var age=18;
var eligable=age>=18?"Eligable to voting":"Not Eligable";
console.log("Voting : ",eligable)
//if
var data = 234;
if(typeof(data)=='number'){
  res = data++;
}
console.log("ifexample:",data);

//if.. else
if (age >=18) {
    console.log("eligable to voting")
} else {
    console.log("Noteligable to voting")
    
}
//if.. else if..else
if(age<=5){
  console.log("it's a baby child");
}else if(age>5 && age<18){
  console.log("it's call child");
}else if(age>18 && age<60){
  console.log("it's call younger");
}else{
  console.log("it's call older");
}

//switch
 var fruits = 'cherry';
switch(fruits){
  case 'Apple':
       console.log('Apple is a red color sweet fruits');
       break;
  case 'cherry':
        console.log("it is a healthy fruits for improve immunity");
        break;
  case  'mango':
        console.log('it is a king of fruits');
        break;
  case  'banana':
        console.log('it is a yellow collor long fruits');
        break;
   default:
       console.log('this fruits information is not available');                      
}
// alert("your subscription is ended next 2 days");
// confirm("are you want to renew your subscription?");

// if(confirm("are you want to renew your subscription?"))
// {
//   alert('subscription form display');
// }else{


//    alert("subscription process is tearminated");
// }

///loop
//for loop
for(a=0; a<=50; a+=5){
  console.log("Number: "+a)
}
console.log(age)
//While loop
var  sallary = 8500;
while(age<=40){
     console.log("age:",age+ 
       "Current Salary :",sallary)
     var inc = (25*sallary)/100;
     console.log("Increment :",inc);
    sallary+=inc;
    age++;
}
//Do while 
var age1=20;
var match = 0;
do{
  match+=10;
  console.log('at the '+age1+' he played '+match+' match');
  age1++;
}while(age1<=50);
 arr.forEach((val)=> console.log('value: '+val)); 
//for Each
 arrtarinee = {'first':'priti patel','second':'dhruv parmar','third':'hari patel'}
Object.entries(arrtarinee).forEach(([K,v])=> console.log(K+'=>'+v));




//// Dhurv