const request = require("supertest");
const assert = require("assert");

//Testing API endpoints
describe("testing api endpoints '/' ", () => {
  it(" GET /  ", async () => {
    //endpoint
    return request
      .get("/")
      .send("Hello")
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
      .post("/suggested value")
      .send(input)
      .then((response) => {
        assert.strict(response.status, 200);
        assert.strict(response.body, {
          car_value: 6614,
        });
      });
  });
});
