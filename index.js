const suggestedValueCalc = require("./valueCalc");

const express = require("express");
const server = express();
server.use(express.json());

const suggestedValue = (req, res) => {
  let model = req.body.model;
  let year = req.body.year;
  value = suggestedValueCalc(model, year);
  if (value === "invalid inputs") {
    res.json({ error: value });
  }
  res.json({ car_value: value });
};

server.get("https://", (req, res) => {
  res.send("Welcome to Turners API!");
});

server.post("https://", suggestedValue);

// const PORT = 4000;
// server.listen(PORT, () => {
//   console.log("listening to port", PORT);
// });
