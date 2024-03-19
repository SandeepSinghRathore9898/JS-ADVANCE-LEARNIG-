// OBJECT LITERAL KNOWN AS OBJECT INITIALIZER
var name1 = "sagar"
var course = "computer science"
var ob = {
    name1,
    course
}
// console.log(ob);

// USE VARIABLE AS A PROPERTY
var n = 'student'
var c = "course"
let ob1 = {
    [n + "name"]: "sagar",
    [c]: "computer",
    detail: function () {
        return `${this.studentname} is student of ${this.course}`
    }
}
// console.log(ob1);
// console.log(ob1.detail());


// NEW FUNCTION SYNTAX

let ob2 = {
    [n]: "sagar",
    detail(){
        return this.student
    }
}
// console.log(ob2.detail());
// console.log(ob2['detail']());




// RETURN ARGUMENTS AS A OBJECT
let name2 = "sandeep singh"
let date= "march"
function classes(name,date){
   return {name,date}
}
let s = classes(name2,date);
console.log(s.date);
console.log(typeof(s));