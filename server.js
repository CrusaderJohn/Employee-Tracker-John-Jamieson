const mysql = require('mysql2');
const inquirer = require('inquirer');
const cTable = require('console.table');

const mainMenuList = ["View All Departments", "View All Roles", "View All Employees",
    "Add a Department", "Add a Role", "Add an Employee", "Update an Employee Role"];

const questions = [
    {
        type: 'list',
        message: "What would you like to do?",
        name: 'mainMenu',
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

console.log("Welcome to the Employee Management System.");
inquirer.prompt(questions).then((answers) => {
    // console.log('\nOrder receipt:');
    // console.log(JSON.stringify(answers, null, '  '));
});