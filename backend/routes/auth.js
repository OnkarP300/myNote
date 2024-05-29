const express = require("express");
const User = require("../models/User")
const router = express.Router();
const { body, validationResult } = require('express-validator');


// Create using POST "/api/auth", Doesn't require Auth
router.post('/', [
    body('name').isLength({ min: 3 }),
    body('email').isEmail(),
    body('password').isLength({ min: 5 }),
], (req, res) => {
    const result = validationResult(req);
    if (!result.isEmpty()) {
        return res.status(400).json({ errors: result.array() });
    }
    res.send(req.body);

})

module.exports = router;