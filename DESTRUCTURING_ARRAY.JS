// THIS WAS INTODUCE IN ES6 JAVASCRIPT

let user = ["sagar", 19, "computer Science"]

let [nam, age, course] = user

// console.log(nam);

// FOR NESTED ARRAY

let detail = ["sagar", 19, "bikaner", ["science", "math"]]

let [name3, age1, city, [field, subject]] = detail

// console.log(name3);
// console.log(age1);
// console.log(city);
// console.log(field);
// console.log(subject);
// console.log(field);
// console.log(subject);




let detai = ["sagar", 19, "bikaner", ["science", "math"]]

let [na, ...arg] = detail

// console.log(na);
// console.log(arg);


// 
function user5([naam, age5, city5, [kaam]]) {
    // console.log(naam);
    // console.log(age5);
    // console.log(city5);
    // console.log(kaam);
}


// console.log(user5(["sagar", 19, "bikaner", ["study"]])); 



function dest() {
    return ["sagar", 19, "sherpura"]

}

let [name5, age6, city7] = dest()
console.log(city7);
