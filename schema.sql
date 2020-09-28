CREATE DATABASE employee_tracker;

USE employee_tracker;

CREATE TABLE department(
    id INT AUTO_INCREMENT NOT NULL,
    name VARCHAR(30),
    PRIMARY KEY (id)
);

CREATE TABLE role(
     id INT AUTO_INCREMENT NOT NULL,
     title VARCHAR(30),
     salary DECIMAL (10,2),
     department_id INT NOT NULL,
     PRIMARY KEY (id)
);

CREATE TABLE employee(
    id INT AUTO_INCREMENT NOT NULL,
    first_name VARCHAR(30),
    last_name VARCHAR(30),
    role_id INT NOT NULL,
    manager_id INT NOT NULL
);


SELECT * FROM employee;

INSERT INTO employee_tracker(first_name, last_name, role_id, manager_id)
VALUES("Victoria", "Blackburn", 00001, 00002);

SELECT department.name
FROM 
INNER JOIN employee 
ON employee.first_name =employee.employee.first_name;