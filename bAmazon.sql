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
VALUES(1, "Basketball", "Sports Equipment", 15, 50);

INSERT INTO products(item_id, product_name, category, price, stock_quantity)
VALUES(2, "Slow Cooker", "Kitchenware", 30, 10);

INSERT INTO products(item_id, product_name, category, price, stock_quantity)
VALUES(3, "Vacuum Cleaners", "Appliances", 80, 20);

INSERT INTO products(item_id, product_name, category, price, stock_quantity)
VALUES(4, "Air Mattress", "Bedding", 100, 25);

INSERT INTO products(item_id, product_name, category, price, stock_quantity)
VALUES(5, "Dog Harness", "Pets", 20.95, 37);

INSERT INTO products(item_id, product_name, category, price, stock_quantity)
VALUES(6, "Wet Dry Vacuum", "Tools", 80.77, 16);

INSERT INTO products(item_id, product_name, category, price, stock_quantity)
VALUES(7, "Body Spray", "Personal Care", 30, 50);

INSERT INTO products(item_id, product_name, category, price, stock_quantity)
VALUES(8, "50 Inch Flatscreen TV", "Entertainment", 189.99, 6);

INSERT INTO products(item_id, product_name, category, price, stock_quantity)
VALUES(9, "Gas Grill", "Home Decor", 159.99, 8);

INSERT INTO products(item_id, product_name, category, price, stock_quantity)
VALUES(10, "Multi Day Backpack", "Camping Gear", 49.99, 12); 

SELECT * FROM products;

