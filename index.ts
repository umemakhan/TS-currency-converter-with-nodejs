#! /usr/bin/env node
// importing inquirer
import inquirer from "inquirer";

// listing currencies and their exchange rates
let exchangeRate: any = {
    "EUR": 1,  // base
    "CAD": 1.3,  //canadian dollar
    "JYP": 113, // japenese currency
    "AUD": 1.65,  // australlian dollar
    "BGN": 1.95,  // bulgarian
    "PKR": 296.89,  // pakistani rupee 
    "USD": 1.06,  // US dollar
    "TRY": 34.73,  // turkish lira
    "INR": 88.92,  // indian rupee
    "SGD": 1.45,  // singapore dollar
}

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