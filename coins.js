/*
  Input: 0.67
  Output:
  {
    quarters: 2,
    dimes: 1,
    nickels: 1,
    pennies: 2
  }

*/
var coinPurse = {
    quarters: 0,
    dimes: 0,
    nickels: 0,
    pennies: 0
};


function coinCounter(coinValue) {
    // Initialize a JavaScript object to hold the coins


    var valueInCoins = coinValue * 100;

    var quarterRemainder = quarterCounter(valueInCoins);
    var dimeRemainder = dimeCounter(quarterRemainder);
    var nickelRemainder = nickelCounter(dimeRemainder);
    var pennyRemainder = pennyCounter(nickelRemainder);

    return coinPurse;
}

function quarterCounter(valueInCoins) {
    var remainder = valueInCoins % 25;
    var centsInQuarters = valueInCoins - remainder;
    var numberOfQuarters = centsInQuarters / 25;
    coinPurse.quarters = numberOfQuarters;
    return remainder;
}

function dimeCounter(quarterRemainder) {
    var remainder = quarterRemainder % 10;
    var centsInDimes = quarterRemainder - remainder;
    var numberOfDimes = centsInDimes / 10;
    coinPurse.dimes = numberOfDimes;
    return remainder;
}

function nickelCounter(dimeRemainder) {
    var remainder = dimeRemainder % 5;
    var centsInnickels = dimeRemainder - remainder;
    var numberOfnickels = centsInnickels / 5;
    coinPurse.nickels = numberOfnickels;
    return remainder;
}

function pennyCounter(nickelRemainder) {
    var remainder = nickelRemainder % 1;
    var centsInpennies = nickelRemainder - remainder;
    var numberOfpennies = centsInpennies / 1;
    coinPurse.pennies = numberOfpennies;
    return remainder;
}




var coins = coinCounter(2.93);
console.log(coins);


































