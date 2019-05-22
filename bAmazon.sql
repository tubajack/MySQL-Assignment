DROP DATABASE IF EXISTS mo_DB;
CREATE DATABASE mo_DB;

USE mo_DB;

CREATE TABLE products(
    id INT NOT NULL AUTO_INCREMENT, 
    product_name VARCHAR(100) NOT NULL, 
    category VARCHAR(50) NOT NULL, 
    price INT,
    stock_quantity INT, 
    PRIMARY KEY(id)
);