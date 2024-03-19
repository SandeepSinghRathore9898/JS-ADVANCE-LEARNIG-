// WE HAVE TWO WAY TO DEFINE A FUNCTION IN JAVASCRIPT BEFORE ES6
function concat1(){
 setTimeout(()=>{
     var st1 = "hello"
     var st3 = `${st1} sagar`
     console.log(st3); 
 },2000)
    
}

let concat = function(){
    var a = "namste"
    var b =  `${a} Bharat`;
    console.log(b);
}
// concat1()
// concat()

// AFTER ES6 ARROW FUNCTION WERE INTRODUCE

let concat2 = (prameters) =>{
    var a = prameters
   var b = `${a} to Bharat`;
    console.log(b);  
}
// concat2("Welcome")

// IF THERE IS ONLY ONE LINE OF CODE

let str = ()=> console.log("ONe Line code")
// str()

// NO "()" NEEDED IN SINGLE LINE CODE

let str4 = name => console.log( `No curly ${name}`);
str4("Needed")



