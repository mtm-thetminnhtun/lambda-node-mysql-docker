const todo = require("./todo");
const headers = {
    "Access-Control-Allow-Origin": "*",
    "Access-Control-Allow-Credentials": true,
    "Access-Control-Allow-Methods": "*",
    "Access-Control-Allow-Headers": "*",
    "Content-Type": "application/json",
};

exports.list = async (event, context) => {
    try {
        const data = await todo.list(event, context);
        const response = {
            statusCode: 200,
            headers,
            body: JSON.stringify(data),
        };
        console.log("response: " + JSON.stringify(response))
        return response;
    } catch (error) {
        const response = {
            statusCode: error.statusCode || 500,
            headers,
            body: JSON.stringify(error),
        };
        console.log("response: " + JSON.stringify(response))
        return response;
    }
};

exports.show = async (event, context) => {
    try {
        const data = await todo.show(event, context);
        const response = {
            statusCode: 200,
            headers,
            body: JSON.stringify(data),
        };
        console.log("response: " + JSON.stringify(response))
        return response;
    } catch (error) {
        const response = {
            statusCode: error.statusCode || 500,
            headers,
            body: JSON.stringify(error),
        };
        console.log("response: " + JSON.stringify(response))
        return response;
    }
};

exports.add = async (event, context) => {
    try {
        const data = await todo.add(event, context);
        const response = {
            statusCode: 200,
            headers,
            body: JSON.stringify(data),
        };
        console.log("response: " + JSON.stringify(response))
        return response;
    } catch (error) {
        const response = {
            statusCode: error.statusCode || 500,
            headers,
            body: JSON.stringify(error),
        };
        console.log("response: " + JSON.stringify(response))
        return response;
    }
};

exports.destroy = async (event, context) => {
    try {
        const data = await todo.destroy(event, context);
        const response = {
            statusCode: 200,
            headers,
            body: JSON.stringify(data),
        };
        console.log("response: " + JSON.stringify(response))
        return response;
    } catch (error) {
        const response = {
            statusCode: error.statusCode || 500,
            headers,
            body: JSON.stringify(error),
        };
        console.log("response: " + JSON.stringify(response))
        return response;
    }
};
