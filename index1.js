//Actual API

//Creating an API
const express = require("express");
var router = express.Router();
const app = express();
const TESTING_HOST = "localhost";
const TESTING_PORT = 8080;
const TESTING_URL = `http://${TESTING_HOST}:${TESTING_PORT}}`;

/*Here is where the test cases go */

app.use(express.json());

//GET REQUEST
app.get("/car", (req, res) => {
  res.status(200).send({
    car_value: 6614,
    risk_rating: 5,
  });
});

//POST REQUEST
app.post("/car/:id", (req, res) => {
  const { id } = req.params;
  const { car_value } = req.body;
  const { risk_rating } = req.body;
  const { logo } = req.body;
  if (!car_value || !risk_rating) {
    res.status(418).send({
      message: "There is an error, we need a Car Value and a Risk Rating!",
    });
  }
  res.send({
    car_value: `There is a car value ${car_value} and a risk rating of ${risk_rating} at ID ${id}`,
    premium_quote: (car_value * risk_rating) / 100,
  });
});

app.listen(TESTING_PORT, () =>
  console.log(`Its running on http://localhost:${TESTING_PORT}`)
);
module.exports = router;
