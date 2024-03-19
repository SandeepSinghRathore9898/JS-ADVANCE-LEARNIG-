// BESICALLY REST OPRETOR IN JAVASCRIPT IS TRIPLE DOT(...) TO HANDLE MULTIPLE ARGUMENT OR INPUT , THIS WILL COLLECT MULTIPLE ARGUMENTS IN A SINGLE ARRAY


// SUM OF MULTIPLE ARGUMENTS
function sum() {
    sum = 0
    for (let i in arguments) {
        sum += arguments[i]
    }
    console.log(sum);
}
// sum(5,5,5,5,5,5)

// USING REST OPRATOR(...)

function sum1(str, ...inte) {
    let sum = 0
    for (let i in inte) {
        sum += inte[i]
    }
    console.log(sum);
    console.log(str);
}
// sum1("SAGARsingh",12,12,12,12,12)


// OTHER THINGS

// ARGUMENTS IS A JS INBUILT FUNCTION

function arg1() {
    console.log(arguments);
}
// arg1("sagar",46,67,5.7)
let arg = () => {
    console.log(arguments);
}
// arg("sagar",46,67,5.7)



// OTHER EXAMPLE OF REST OPARATOR
function sumwithmultiplier(multiplier, ...args) {
    let total = 0
    for (let i of args) {
        total += i * multiplier
    }
    return total;

}


// console.log(sumwithmultiplier(2, 6, 8, 5));


// OTHER EXAMPLE FOR CALCULATE DISCOUNT PRICE USING (...)

function discount(discountpercentage, ...prices) {
    let totalDiscountprice = 0
    for (price of prices) {
        discountedPrice = price - (price * discountpercentage / 100)
        totalDiscountprice += discountedPrice

    }
    return totalDiscountprice;
}
console.log(discount(10, 700));