 -- Crear la base de datos HackHive
CREATE DATABASE hackhive;

USE hackhive;
-- Crear la tabla de Usuarios
CREATE TABLE Users (
    user_id SERIAL PRIMARY KEY,
    email VARCHAR(255) UNIQUE NOT NULL,
    password VARCHAR(255) NOT NULL,
    username VARCHAR(100) NOT NULL
);

-- Crear la tabla de Productos
CREATE TABLE Products (
    product_id SERIAL PRIMARY KEY,
    user_id INT REFERENCES Users(user_id),
    name VARCHAR(255) NOT NULL,
    quantity INT NOT NULL,
    quality INT,
    recived VARCHAR(255),
    expiration VARCHAR(255)
);

CREATE TABLE Customers (
    customer_id SERIAL PRIMARY KEY,
    user_id INT REFERENCES Users(user_id),
    name VARCHAR(255) NOT NULL,
    email VARCHAR(255),
    needs VARCHAR(255) NOT NULL,
    location VARCHAR(255)
);
