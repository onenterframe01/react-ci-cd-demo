//const request = require("supertest");
const assert = require("assert");
const request = require("request");

//Testing API endpoints
describe("testing api endpoints ", () => {
  it(" GET / knock knock..  ", async () => {
    //endpoint
    return request
      .get("https:")
      .send("Hello!")
      .then((response) => {
        assert.strict(response.status, 200);
      });
  });
  it(" POST / value returned based on formula in brief", async () => {
    //endpoint
    const model = "Civic";
    const year = 2014;
    const input = { model, year };

    return request
      .post("https:")
      .send(input)
      .then((response) => {
        assert.strict(response.status, 200);
        assert.strict(response.body, {
          car_value: 6614,
        });
      });
  });
});
