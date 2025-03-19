function makeTransaction(quantity, pricePerDroid, customerCredits) {
    const totalPrise = quantity * pricePerDroid;

/* return customerCredits < totalPrise ? `Insufficient funds!` : `You ordered ${quantity} droids worth ${totalPrise} credits!`;
} */

    if (customerCredits < totalPrise) {
        return `Insufficient funds!`;
    } else {
        return `You ordered ${quantity} droids worth ${totalPrise} credits!`;
    }
}

console.log(makeTransaction(5, 3000, 23000)); // "You ordered 5 droids worth 15000 credits!"
console.log(makeTransaction(3, 1000, 15000)); // "You ordered 3 droids worth 3000 credits!"
console.log(makeTransaction(10, 5000, 8000)); // "Insufficient funds!"
console.log(makeTransaction(8, 2000, 10000)); // "Insufficient funds!"
console.log(makeTransaction(10, 500, 5000)); // "You ordered 10 droids worth 5000 credits!"

/* console.log(makeTransaction(12, 50, 5000));
console.log(makeTransaction(100, 500, 90000));
console.log(makeTransaction(1, 500, 300));  */