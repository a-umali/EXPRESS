const express = require("express");
const router = express.Router();


router.get("/test", (request, response) => {
  response.send("This is a test route");
});


router.get("/test2", (request, response) => {
  response.send("This is a test 2 route");
});


module.exports = router;