#! /usr/bin/env node
import inquirer from "inquirer";

console.log("\n\t Welcome to Muneeb Guess Game \n");

const randnum = Math.floor(Math.random() * 3 + 1);

const answer = await inquirer.prompt([
    {
        name: "userguessnum",
        type: "number",
        message: "Enter Guess Number (1-3):",
    },
]);

if(answer.userguessnum === randnum){
    console.log("\n\t congratulation you guess correct number");
}
else{
    console.log("\n\t sorry you gues wrong");
}