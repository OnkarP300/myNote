const express = require("express");
const router = express.Router();


router.get('/', (req, res) => {
    console.log(req.body);

    obj = {
        name: "Onkar",
        Id: "845775"
    }

    res.send(obj);
})

module.exports = router;