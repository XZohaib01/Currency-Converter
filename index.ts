#! /usr/bin/env node

import inquirer from "inquirer";

const Currency: any = {
    USD:1, //Base currency
    EUR:0.92,
    AUD:1.52,
    INR:83,
    PKR:277,
    GBP:0.79
}
let userAnsr = await inquirer.prompt(
 [   {
      name: "from",
      message: "Enter From Currency",
      type: "list",
      choices:["USD","EUR","AUD","INR","PKR","GBP"]
    },
    {
        name: "to",
        message: "Enter To Currency",
        type: "list",
        choices:["USD","EUR","AUD","INR","PKR","GBP"]
    },
    {
        name: "amount",
        message: "Enter Your Amount",
        type: "number"
    }
 ]    
);

let fromAmount= Currency[userAnsr.from]
let toAmount= Currency[userAnsr.to]
let amount = userAnsr.amount
let baseAmount = amount / fromAmount
let convertedAmount = baseAmount * toAmount
console.log(convertedAmount);