const inquirer = require('inquirer');
const mysql = require('mysql2');
const { allEmployees, updateEmployee } = require('./db');
const db = require('./db');
require('console.table')

menu = () => {
    inquirer
        .prompt([
            {
                type: "list",
                name: "operation",
                message: "What operation would you like to perform?",
                choices: ["View all departments", "View all roles", "View all employees", "Add a department", "Add a role", "Add an employee", "Update an employee role", "Exit"]
            }
        ])
        .then(({ operation }) => {
            switch (operation) {

                case "View all departments":
                    allTheDepartments();
                    break;

                case "View all roles":
                    allTheRoles();
                    break;

                case "View all employees":
                    allTheEmployees();
                    break;

                case "Add a department":
                    createDepartment();
                    break;

                case "Add a role":
                    createRole();
                    break;

                case "Add an employee":
                    createEmployee();
                    break;

                case "Update an employee role":
                    // updateAnEmployee();
                    break;

                default:
                    console.log(`Goodbye.`);
                    process.exit();
                    break;
            }
        })
}

function allTheDepartments() {

    db.allDepartments()
        .then(([rows]) => {
            let departments = rows;
            console.log("\n");
            console.table(departments);
        }).then(() => menu())
};

function createDepartment() {
    inquirer
        .prompt([
            {
                type: "input",
                name: "name",
                message: "What is the name of the new department?"

            }
        ]).then(res => {
            let newDepartment = res;
            db.addDepartment(newDepartment)
                .then(() =>
                    console.log(`New department added.`))
                .then(() => menu())
        })
}

function allTheRoles() {

    db.allRoles()
        .then(([rows]) => {
            let roles = rows;
            console.log("\n");
            console.table(roles);
        }).then(() => menu())
};

function createRole() {

    db.allDepartments()
        .then(([rows]) => {
            let departments = rows;
            console.log(departments);

            inquirer
                .prompt([
                    {
                        type: "input",
                        name: "id",
                        message: "What is the id of the department?"
                    },
                    {
                        type: "input",
                        name: "name",
                        message: "What is the name of the role?"
                    },
                    {
                        type: "input",
                        name: "salary",
                        message: "What is salary for the role?"
                    }
                ])

                .then(({ name, salary, id }) => {
                    console.log(name, salary, id);
                    db.addRoles(name, salary, id);
                    console.log(`Role added.`)
                })
                .then(() => menu())
        })
}

function allTheEmployees() {

    db.allEmployees()
        .then(([rows]) => {
            let employees = rows;
            console.log("\n");
            console.table(employees);

        }).then(() => menu())
};

function createEmployee() {

    db.onlyManagers()
        .then(([rows]) => {
            let roles = rows;
            console.table(roles);
        })

    db.onlyRoles()
        .then(([rows]) => {
            let roles = rows;
            console.table(roles);

            inquirer
                .prompt([
                    {
                        type: "input",
                        name: "firstName",
                        message: "What is your first name?"
                    },
                    {
                        type: "input",
                        name: "lastName",
                        message: "What is your last name?"
                    },
                    {
                        type: "input",
                        name: "position",
                        message: "What is the id of your role?"
                    },
                    {
                        type: "input",
                        name: "manager",
                        message: "What is the id of your manager?"
                    }
                ]).then(({ firstName, lastName, position, manager }) => {
                    console.log(firstName, lastName, position, manager);
                    db.addEmployee(firstName, lastName, position, manager)
                    console.log(`Employee added.`)
                }).then(() => menu())
        })
}

menu();