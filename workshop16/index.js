//if have a subscription 25% off
//has coupon 10$ off 
//print "Your grand total is ${finalAmount}." 
const timmy = {
    prescription: "acetaminophen",
    pricePerRefill: 25,
    refills: 3,
    subscription: false,
    coupon: true,
};

const sarah = {
    prescription: "diphenhydramine",
    pricePerRefill: 50,
    refills: 1,
    subscription: true,
    coupon: false,
};

const rocky = {
    prescription: "phenylephrine",
    pricePerRefill: 30,
    refills: 5,
    subscription: true,
    coupon: true,
};

// Calculate the total cost
function totalAmount(customer) {
    let totalCost = customer.pricePerRefill * customer.refills;
// calculate the subscription
    if (customer.subscription) {
        totalCost -= totalCost * 0.25;
    }
// calculate the cupon 
    if (customer.coupon) {
        totalCost -= 10;
    }
//return the total value 
    return totalCost;
}

// Generate the final message
function generateFinalMessage(totalCost) {
    return `Your grand total is ${totalCost}.`;
}

// Calculate and console the final message for each customer 
function printFinal(customer) {
    const totalCost = totalAmount(customer);
    const finalMessage = generateFinalMessage(totalCost);
    console.log(finalMessage);
}

// Test with each customer
printFinal(timmy);
printFinal(sarah);
printFinal(rocky);
