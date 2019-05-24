//We need two packages. mySQL and inquirer. 
var mysql = require("mysql");
var inquirer = require("inquirer");

//Display all available items for sale
//Establish a connection to the mysql database
var connection = mysql.createConnection({
    host: "localhost", 
    port: 4000, 
    user: "root", 
    password: "root",
    database: "mo_DB"
});

connection.connect(function(err) {
    if (err) throw err;
    console.log("connected as id " + connection.threadId + "\n");
    amazonCustomers();
});

function amazonCustomers(){
    console.log("Here are the available products");
    connection.query("SELECT * FROM products", function(err, res) {
        if (err) throw err;
        // Log all results of the SELECT statement
        console.log(res);
        customerSelection();
    });
}

function customerSelection(){
    inquirer.prompt([
    {
        type: "input", 
        name: "id",
        message: "What is the id of the product that you want to buy?"
    }
]).then(answer =>{console.log(answer.id)});
}