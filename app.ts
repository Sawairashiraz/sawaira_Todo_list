import inquirer from "inquirer"
let todos = [];
let condition = true;
while (condition){
    let todoQuestions =await inquirer. prompt([{

        name: "firstQuestion",
        type: "input",
        message: "what you want to add in your todos?",

},
   {
    name: "secondQuestion",
    type: "confirm",
    message:" would you like to add more in your todos?",
    default: "false",
   }
]);
let todo:any[]
todos.push(todoQuestions.firstQuestion);
condition = (todoQuestions.secondQuestion);
console.log(todos);}

