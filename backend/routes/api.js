const express = require("express");
const router = express.Router();

router.get("/", (req, res) => {
    res.json({ msg: "slonge blob" }).status(200);
});

router.get("/register", (req, res) => {
    res.json({ msg: "register" }).status(200);
});

router.get("/login", (req, res) => {
    res.json({ msg: "login" }).status(200);
});

module.exports = router;