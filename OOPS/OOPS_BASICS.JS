class substraction {
    constructor(name,age) { // THIS IS CONSTRUCTOR METHOD
        // var student ;
        this.naam = name
        this.age = age
        console.log("CONSTRUCTOR WORKS!");

    }
    sub(a, b) { // THIS IS PROTOTYPE METHOD

        console.log(`Your name is ${this.naam} and your age is ${this.age}`);
    }

    static multi(a,b){ // THIS IS STATIC METHOD // NOT NEED TO CREATE OBJECT FOR CALL THIS FUNCTION
        console.log(a*b);
    }
}

let object = new substraction("sagarsinghrathore",19)
// object.student = "sagar"
object.sub(34, 34)

// CALLING STATIC METHOD/FUNCTION

substraction.multi(12,2)



// WE CAN CREATE MULTIPAL OBJECTS OF A CLASS
let object2 = new substraction("LEKHRAM","19")
object2.sub(1,2)



// THERE ARE THREE TYPE OF  CLASS  METHODS IN JAVASCRIPT
// CONSTRUCTOR✅
// PROTOTYPE✅
// STATIC✅