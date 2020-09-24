var mysql = require("mysql");

var inquirer = require ("inquirer");
const { start } = require("repl");

var connection = mysql.createConnection({
  host: "localhost",

  // Your port; if not 3306
  port: 3306,

  // Your username
  user: "root",

  // Your password
  password: "password",
  database: "employee_tracker"
});

userInput();

connection.connect(function(err) {
  if (err) throw err;
  console.log("connected as id " + connection.threadId);
  function userInput(){
    inquirer
        .prompt([
    
        {
        name: "first_name",
        type: "input",
        message: "What is your first name?",
         },
         {
        name: "title",
        type: "input",
        message: "What is your job title?"
        },
        {
        name: "department_id",
        type: "input",
        message: "What is your department id?"

    }  
    ])
    .then(function(answer){
        connection.query(
            "INSERT INTO employees SET?",
        {
            first_name: answer.first_name
        }    
        .then(function(answer){
            connection.query(    
        "INSERT INTO role SET?",
        {
            tite: answer.title,
            department_id: answer.department_id,
        },
        function(err){
            if(err) throw (err);
            console.log("You have been added!")
            start();
        }

        )
    })
    );
  
  
  
  
  connection.end();