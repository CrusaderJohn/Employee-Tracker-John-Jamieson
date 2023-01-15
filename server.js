const mysql = require('mysql2');
const inquirer = require('inquirer');
const cTable = require('console.table');

const mainMenuList = ["View All Departments", "View All Roles", "View All Employees",
    "Add a Department", "Add a Role", "Add an Employee", "Update an Employee Role", "Finished"];

const questions = [
    {
        type: 'list',
        message: "What would you like to do?",
        name: 'mainMenuQuestion',
        choices: mainMenuList,
    },
];

const database = mysql.createConnection(
    {
        host: 'localhost',
        user: 'root',
        password: '7Bbz8nJ9vUj-',
        database: 'employeeTrackerDB'
    },
    console.log(`Connected to the employeeTrackerDB database.`)
);

function viewDepartments() {

}

function viewRoles() {

}

function viewEmployees() {

}

function addDepartment() {

}

function addRole() {

}

function addEmployee() {

}

function updateEmployee() {

}

function mainMenuFunction() {
    inquirer.prompt(questions).then((answers) => {
        switch (answers.mainMenuQuestion) {
            case mainMenuList[0]:
                day = "Sunday";
                mainMenuFunction();
                break;
            case mainMenuList[1]:
                day = "Monday";
                mainMenuFunction();
                break;
            case mainMenuList[2]:
                day = "Tuesday";
                mainMenuFunction();
                break;
            case mainMenuList[3]:
                day = "Wednesday";
                mainMenuFunction();
                break;
            case mainMenuList[4]:
                day = "Thursday";
                mainMenuFunction();
                break;
            case mainMenuList[5]:
                day = "Friday";
                mainMenuFunction();
                break;
            case mainMenuList[6]:
                day = "Saturday";
                mainMenuFunction();
                break;
            default:
                console.log("Goodbye!");
        }
    });
}

console.log("Welcome to the Employee Management System.");
mainMenuFunction();