const request = require("supertest")("localhost:4000");
const assert = require("assert");

//Testing API endpoints
describe("testing api endpoints '/' ", () => {
  it(" GET / knock knock... ", async () => {
    //endpoint
    return request
      .get("/")
      .send("whos there?")
      .then((response) => {
        assert.strict(response.status, 200);
      });
  });
  it(" POST / should return car value based on formula specified in brief", async () => {
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
