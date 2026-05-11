const express = require('express');
// Các controller và middleware bạn sẽ tạo sau, tạm thời comment lại nếu chưa viết tới
// const { createUser, handleLogin, getUser, getAccount } = require('../controllers/userController');
// const auth = require('../middleware/auth');
// const delay = require('../middleware/delay');

const routerAPI = express.Router();

// routerAPI.all("*", auth);

routerAPI.get("/", (req, res) => {
    return res.status(200).json("Hello world api")
})

// Các route bên dưới cấu hình sau:
// routerAPI.post("/register", createUser);
// routerAPI.post("/login", handleLogin);
// routerAPI.get("/user", getUser);
// routerAPI.get("/account", delay, getAccount);

module.exports = routerAPI; 