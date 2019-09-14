CREATE DATABASE project;
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
    )


CREATE TABLE Work (
	id INT (20) NOT NULL AUTO INCREMENT,
    name VARCHAR(50) NOT NULL,
	id_salary INT (20) NOT NULL AUTO INCREMENT,
    PRIMARY KEY(id)
);

INSERT INTO Work(
    name
)
VALUES
    (

        "Frontend Dev"
    ),
    (
        "Backend Dev"
    )

CREATE TABLE Category ( 
	id INT (20) NOT NULL AUTO_INCREMENT, 	salary VARCHAR (50) NOT NULL, 
	PRIMARY KEY (id) 
)

INSERT INTO category(salary) VALUES ("10.000.000"),("12.000.000");

//Query
SELECT 
nama.nama as name, 
work.name as work,
kategori.salary as salary 
FROM nama 
JOIN work ON nama.id_work = work.id 
JOIN kategori ON nama.id_salary = kategori.id