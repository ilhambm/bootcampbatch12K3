CREATE DATABASE project;
USE project;
CREATE TABLE name (
	id INT (20) NOT NULL AUTO_INCREMENT,
	name VARCHAR (50) NOT NULL,
	id_work INT (21) NOT NULL AUTO_INCREMENT,
	PRIMARY KEY (id)
);
INSERT INTO name(
    name
)
VALUES
    (
        "Rebecca"
    ),
    (
        "Vita"
    );


CREATE TABLE work (
	id INT (20) NOT NULL AUTO INCREMENT,
    name VARCHAR(50) NOT NULL,
	id_salary INT (20) NOT NULL AUTO INCREMENT,
    PRIMARY KEY(id)
);

INSERT INTO work(
    name
)
VALUES
    (
        "Frontend Dev"
    ),
    (
        "Backend Dev"
    );

CREATE TABLE category ( 
	id INT (20) NOT NULL AUTO_INCREMENT, 	salary VARCHAR (50) NOT NULL, 
	PRIMARY KEY (id) 
);

INSERT INTO category(salary) VALUES ("10.000.000"),("12.000.000");

//Query
SELECT 
name.name as name, 
work.name as work,
categori.salary as salary 
FROM name 
JOIN work ON name.id_work = work.id 
JOIN categori ON name.id_salary = categori.id