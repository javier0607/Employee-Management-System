INSERT INTO department (name)
	VALUES 
		("Engineering"),
		("Finance"),
		("Marketing"),
		("Human Resources");
	
INSERT INTO role (title, salary, department_id)
	VALUES 
		("Senior Software Engineer", 170000, 1),
		("Junior Software Engineer", 125000, 1),
		("Financial Analyst", 90000, 2),
		("Accountant", 82000, 2),
		("Marketing Coordinator",100000, 3),
		("Marketing Assistant", 55000, 3),
		("HR Director", 76000, 4),
		("HR Assistant", 50000, 4);

INSERT INTO employee (first_name , last_name , role_id, manager_id)
	VALUES 
		("Javier", "Mariscal", 1, null),
		("Pablo", "Picky", 2, 1),
		("Pam", "Beesly", 3, null),
		("Michael", "Scott", 4, 3),
		("Cristiano", "Ronaldo", 5, null),
		("Billy", "Bob", 6, 5),
		("Ichigo", "Kurosaki", 7,null),
		("Lionel", "Messi", 8, 7);