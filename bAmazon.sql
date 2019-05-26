DROP DATABASE IF EXISTS mo_DB;
CREATE DATABASE mo_DB;

USE mo_DB;

CREATE TABLE products(
    item_id INT NOT NULL AUTO_INCREMENT, 
    product_name VARCHAR(100) NOT NULL, 
    category VARCHAR(50) NOT NULL, 
    price INT,
    stock_quantity INT, 
    PRIMARY KEY(item_id)
);

INSERT INTO products(item_id, product_name, category, price, stock_quantity)
VALUES(1, "Basketball", "Sports Equipment", 15, 50), 
(2, "Slow Cooker", "Kitchenware", 30, 10), 
(3, "Vacuum Cleaners", "Appliances", 80, 20), 
(4, "Air Mattress", "Bedding", 100, 25),
(5, "Dog Harness", "Pets", 20.95, 37),
(6, "Wet Dry Vacuum", "Tools", 80.77, 16); 
