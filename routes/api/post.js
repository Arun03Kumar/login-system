const express = require("express");
const User = require("../../schema/userSchema");
const bodyParser = require("body-parser");

const app = express();
const router = express.Router();

// app.use(bodyParser.urlencoded({ extended: false }));
app.use(express.json())

router.get("/", (req, res) => {
  res.send()
});

router.post("/", (req, res) => {
  console.log(req.body)
    if(!req.body.postarea)
    {
        res.status(400).send("not worked")
        return 
    }
    console.log(req.body.postarea)
  res.status(200).send("it worked")
});

module.exports = router; 
