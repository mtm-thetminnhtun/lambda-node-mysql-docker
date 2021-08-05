const mysql = require("mysql2");
const db = require("./db");
const faker = require("faker");

const list = async (event, context) => {
    return new Promise((resolve, reject) => {
        const connection = mysql.createConnection(db.config);

        connection.query("select * from todos order by id desc", function (error, results, fields) {
            if (error) {
                console.log(error);
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

const show = async (event, context) => {
    return new Promise((resolve, reject) => {
        let id = null;

        if (event.pathParameters && event.pathParameters.id) {
            id = event.pathParameters.id;
        }

        const connection = mysql.createConnection(db.config);

        connection.query("select * from todos where id=?", [id], function (error, results, fields) {
            if (error) {
                console.log(error);
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

const add = async (event, context) => {
    return new Promise((resolve, reject) => {
        let title = null;
        if (event.body) {
            let body = JSON.parse(event.body);
            if (body.title) title = body.title;
        }

        if (!title) {
            reject({ message: "The title is required.", statusCode: 422 });
            return;
        }

        const param = { title };

        const connection = mysql.createConnection(db.config);

        connection.query("INSERT INTO todos SET ?", param, function (error, results, fields) {
            if (error) {
                console.log(error);
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

const destroy = async (event, context) => {
    return new Promise((resolve, reject) => {
        let id = null;

        if (event.pathParameters && event.pathParameters.id) {
            id = event.pathParameters.id;
        }

        const connection = mysql.createConnection(db.config);

        connection.query(`DELETE FROM todos WHERE id = ${id}`, function (error, results, fields) {
            if (error) {
                console.log(error);
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
    show,
    add,
    destroy,
};
