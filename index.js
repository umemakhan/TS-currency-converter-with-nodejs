#! /usr/bin/env node
// importing inquirer
import inquirer from "inquirer";
// listing currencies and their exchange rates
let exchangeRate = {
    "EUR": 1,
    "CAD": 1.3,
    "JYP": 113,
    "AUD": 1.65,
    "BGN": 1.95,
    "PKR": 296.89,
    "USD": 1.06,
    "TRY": 34.73,
    "INR": 88.92,
    "SGD": 1.45, // singapore dollar
};
// select currency to convert from 
let answer = await inquirer.prompt([
    {
        name: "fromCurrency",
        type: "list",
        message: "\nSelect the currency to convert from:",
        choices: ["EUR", "CAD", "JYP", "AUD", "BGN", "PKR", "USD", "TRY", "INR", "SGD"],
    },
    {
        name: "toCurrency",
        type: "list",
        message: "\nSelect the currency to convert into:",
        choices: ["EUR", "CAD", "JYP", "AUD", "BGN", "PKR", "USD", "TRY", "INR", "SGD"],
    },
    {
        name: "amount",
        type: "input",
        message: "\nEnter the amount to convert:",
    },
]);
// CURRENCY CONVERSION BY FORMULA
let from_currency = exchangeRate[answer.fromCurrency];
let to_currency = exchangeRate[answer.toCurrency];
let amount = answer.amount;
// conversion formula
let base_amount = amount / from_currency;
let converted_amount = base_amount * to_currency;
// printing final conversion
console.log(`\nConverted Amount= ${converted_amount}`);
