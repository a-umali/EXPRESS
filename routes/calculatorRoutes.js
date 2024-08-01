const express = require('express');
const router = express.Router();

// new route for adding two numbers
// router.get('/add', (req, res) => {
//     let number1 = parseInt(req.query.num1);
//     let number2 = parseInt(req.query.num2);
//     let sum = number1 + number2
//     console.log(sum)
//     res.status(200)
//     res.json({result:sum})
//     })

router.get('/add', (req, res) => {
        calculatorController.addNumbers(req,res)
        })

router.get('/subtract', (request, response) => {
    let number1 = parseInt(request.query.num1);
    let number2 = parseInt(request.query.num2);

    let sum = number1 - number2;

    response.status(200);
    response.json({ result: sum});
});

router.get('/multiply', (request, response) => {
    let number1 = parseInt(request.query.num1);
    let number2 = parseInt(request.query.num2);

    let sum = number1 * number2;

    response.status(200);
    response.json({ result: sum});
});

router.get('/divide', (request, response) => {
    let number1 = parseInt(request.query.num1);
    let number2 = parseInt(request.query.num2);

    let sum = number1 / number2;

    response.status(200);
    response.json({ result: sum});
});

module.exports = router;

function addNumbers() {
    num1 = document.getElementById("num1").value;
    num2 = document.getElementById("num2").value;

        fetch('/calculator/addition?num1=${num1}&num2=${num2}')
        .then((response) => response.json())
        .then((data) => {
            document.getElementById("result").innerHTML = data.result;
            });
}

function subtractNumbers() {
    num1 = document.getElementById("num1").value;
    num2 = document.getElementById("num2").value;

        fetch('/calculator/subraction?num1=${num1}&num2=${num2}')
        .then((response) => response.json())
        .then((data) => {
            document.getElementById("result").innerHTML = data.result;
            });
}

function divideNumbers() {
    num1 = document.getElementById("num1").value;
    num2 = document.getElementById("num2").value;

        fetch('/calculator/divide?num1=${num1}&num2=${num2}')
        .then((response) => response.json())
        .then((data) => {
            document.getElementById("result").innerHTML = data.result;
            });
}


// import all calculator routes (up the top)
const calculatorRoutes =
require('./routes/calculatorRoutes');

// map the calculator routes to our app
app.use('/calculator', calculatorRoutes);

