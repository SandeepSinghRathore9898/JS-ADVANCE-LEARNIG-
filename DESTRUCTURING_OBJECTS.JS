// LET DESTRUCTURE OBJECT
let user ={
    name: "sagar",
    age: 19,
    city: "sherpura"
}

let {name,age,city,address} = user

// console.log(name);
// console.log(address); // UNDEFINED




//ALISE NAME

let user2 = {
    name: "sagar",
    age: 19,
    city: "sherpura"
}
let {name:studentname,city:addresses} = user2
 console.log(studentname);

