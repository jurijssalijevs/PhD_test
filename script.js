'use strict'

let money = prompt("Your budget?"); 
let time = prompt('Your birthdate?');
let objective = prompt('What do you want to buy in this month?');
let budget = prompt('How much does it cost?');
let optionalExpenses = "";
let income = [];
let savings = false;

let appData = {
    budget: money,
    timeData: time,
    expenses: {
        objective,
        budget
    },
    optionalExpenses: "",
    income: "",
    savings: "",
}

console.log(appData.budget);
console.log(appData.budget);
console.log(appData.expenses);
console.log(appData.expenses);
alert(appData.budget)