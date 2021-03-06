//We need two packages. mySQL and inquirer. 
var mysql = require("mysql");
var inquirer = require("inquirer");

//Display all available items for sale
//Establish a connection to the mysql database
var connection = mysql.createConnection({
    host: "localhost", 
    port: 3306, 
    user: "root", 
    password: "baylor",
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
        //Log all results of the SELECT statement
        for(var i = 0; i < res.length; i++){
            console.log("Product ID: " + res[i].item_id + ' || ' + "Product Name: " + res[i].product_name + ' || ' + 
            "Category: " + res[i].category + ' || ' + "Price: " + res[i].price + " || " + "Available Quantity: " + 
            res[i].stock_quantity);
        }
        //console.log(res);
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
            customerSelection();
        }else{
            var productInfo = data[0];
            console.log(productInfo);

            //If the quantity is less than the quantity in stock
            if(answer.quantity <= productInfo.stock_quantity){
                console.log("This order can be processed");

                //Make sure to update the amount of product that you have left. After that, display it. 
                var newUpdate = 'UPDATE products SET stock_quantity = ' + (productInfo.stock_quantity - answer.quantity);
                
                connection.query(newUpdate, function(err, data){
                    if(err) throw err;

                    console.log("Your order has been placed. The total amount is: $" + productInfo.price * answer.quantity);
                    console.log("Thank you for shopping at BAmazon.")

                    //Always remember to end the database connection when finished
                    connection.end();

                })
            }else{
                console.log("Be reasonable. We can't make that many products given such short notice");
                connection.end();
            }
        }

    })
})
//.then(answer =>{console.log(answer.id)});
}