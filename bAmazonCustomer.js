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
    },
    {
        type: "input",
        name: "quantity",
        message: "How many units of the prduct would you like to buy>"
    }
]).then(function(answer){
    console.log("The customer has selected Item: " + answer.id + " and " + answer.quantity + " of the item");


    connection.query("SELECT * FROM products WHERE ?", {item_id: answer.id}, function(err, data){
        if(err) throw err;

    
        if(data.length === 0){
            console.log("The id that you have selected is invalid. Choose another ID.");
        }else{
            var productInfo = data[0];
            console.log(productInfo);

            //If the quantity is less than the quantity in stock
            // if(quantity <= productInfo.stock_quantity){
            //     console.log("This order can be processed");
            // }
        }

    })
})
//.then(answer =>{console.log(answer.id)});
}