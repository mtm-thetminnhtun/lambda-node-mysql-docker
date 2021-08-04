const mysql = require("mysql2");
const db = require("./db");
const faker = require("faker");

const list = async () => {
    return new Promise((resolve, reject) => {
        const connection = mysql.createConnection(db.config);

        connection.query("select * from todos", function (error, results, fields) {
            if (error) {
                connection.destroy();
                reject(error);
            } else {
                console.log(results);
                resolve(results);
                connection.end();
            }
        });
    });
};

const add = async () => {
    return new Promise((resolve, reject) => {
        const todo = { title: faker.name.findName() };

        const connection = mysql.createConnection(db.config);

        connection.query("INSERT INTO todos SET ?", todo, function (error, results, fields) {
            if (error) {
                connection.destroy();
                reject(error);
            } else {
                console.log(results);
                resolve(results);
                connection.end();
            }
        });
    });
};

module.exports = {
    list,
    add,
};
