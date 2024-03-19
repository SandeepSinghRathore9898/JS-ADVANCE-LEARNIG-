// SPREAD OPERATOR CONVERET A ARRAY TO MULTIPLE ARGUMENTS ALSO WITH (...)

// SPREAD OPERATOR USE ONLY WHEN FUNCTION CALLING
// REST OPERATOR USE ONLY WHEN FUNCTION DEFINING

function spread(...arg){
    console.log(arguments);
   let sum = 0
   for(let i of arg){
    sum += i
   }
console.log(sum);

}
let arr = [22,22,22]
// spread(...arr)


// CONCLUTION

// REST OPERATOR USED FOR CONVERT MULTIPLE ARGUMENTS TO A ARRAY
// SPREAD OPERATOR USED FOR CONVERT A ARRAY TO MULTIPLE ARGUMENTS


// HERE IS THE EXAMPLE
function rest(...arg){
    console.log(arg)
}
rest(34,45,565,76,67)

// WE WILL GET ([ 34, 45, 565, 76, 67 ])

var sprid = [12,34,56,78,90]
console.log(...sprid);

// OUTPUT - 12 34 56 78 90

clone = [...sprid]  

// CONCATE TWO ARRAY USING SPREAD OPERATOR
let arr1 = [12,34,56]
let arr2 = [78,90,89]
var arr3 = [...arr1,...arr2]
console.log(arr3);
// [ 12, 34, 56, 78, 90, 89 ]

// WE CAN ALSO ADD VALUES
arr3 = [999,...arr1,...arr2, 1000]
console.log(arr3);

// SO WE CAN MERGE TWO ARRAY WITHOUT "CONCATE()" AND ADD WITHOUT PUSH()


// WE CAN MERGE TWO OBJECTS USING SPREAD OPERATOR

var obj1 = {name:"sagar"}
var obj2 =  {age: 19}
var obj3 = {...obj1, ...obj2}
console.log(obj3);