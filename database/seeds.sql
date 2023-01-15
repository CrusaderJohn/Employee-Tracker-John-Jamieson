DROP TABLE IF EXISTS department;
DROP TABLE IF EXISTS role;
DROP TABLE IF EXISTS employee;

INSERT INTO department (name)
VALUES ("Emperor"), -- 1
       ("Spacing Guild"), -- 2
       ("Bene Gesserit"), -- 3
       ("Fremen"); -- 4

INSERT INTO role (title, salary, department_id)
VALUES ("Padishah Emperor", 100000, 1), -- 5
       ("God-Emperor", 200000, 4), -- 6
       ("Duke", 50000, 4), -- 7
       ("Baron", 25000, 1); -- 8

INSERT INTO employee (first_name, last_name, role_id, manager_id)
VALUES ("Shaddam", "Corrino", 5, NULL), -- 9
       ("Paul", "Atreides", 6, NULL); -- 10
       ("Vladimir", "Harkonnen", 8, 9), -- 11
       ("Leto", "Atreides", 7, 10), -- 12