#! /usr/bin/env node
import inquirer from "inquirer";
const currency = {
    PKR: 277.54,
    USD: 1,
    AUD: 1.52,
    GBP: 0.79,
    KRW: 1351.26,
    JPY: 151.61,
    CNY: 7.23,
    TRY: 32.03,
    AED: 3.67,
    EUR: 0.92,
};
let userAns = await inquirer.prompt([
    {
        name: "changeFrom",
        message: "enter currency you want to change from?",
        type: "list",
        choices: ["PKR", "USD", "AUD", "GBP", "KRW", "JPY", "CNY", "TRY", "AED", "EUR"]
    },
    {
        name: "changeTo",
        message: "enter currency you want to change into?",
        type: "list",
        choices: ["PKR", "USD", "AUD", "GBP", "KRW", "JPY", "CNY", "TRY", "AED", "EUR"]
    },
    {
        name: "amount",
        message: "enter your amount",
        type: "number"
    }
]);
let currencyFrom = currency[userAns.changeFrom];
let currencyTo = currency[userAns.changeTo];
let userAmount = userAns.amount;
//amount from user divided by currency we want to change from . the result will be multiply by the currency we want to change into, (15000pkr/277.73)*1usd =  54.00928959781082... 
let convertedCurrency = (userAmount / currencyFrom) * currencyTo;
console.log(`original amount is ${convertedCurrency}`);
let fixedAmount = convertedCurrency.toFixed(2);
console.log(`fixed value is ${fixedAmount}`);
let roundOff = Math.round(convertedCurrency);
console.log(`round Off value is ${roundOff}`);
// let baseCurrency = userAmount/currencyFrom;  
// let convertedCurrency = baseCurrency * currencyTo; 
// console.log(`original amount is ${convertedCurrency}`);
