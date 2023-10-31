// Three handlers are shown below. The first shows how to set up a simple
// proxy via a GET request. In many cases this is sufficient. The other
// handlers demonstrate two ways to send data to the proxy.
// The README provides usage instructions.

const axios = require("axios");

// GET /weather
// Send a request to this endpoint and you'll receive the weather.
// The API key is used, but hidden from the client and not tracked by Git.
exports.getWeather = async (event) => {
  try {
    const response = await axios.get(
      `https://api.openweathermap.org/data/2.5/weather?lat=42.809730&lon=-70.876740&units=imperial&appid=${process.env.API_KEY}`,
    );
    return {
      statusCode: 200,
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(response.data),
    };
  } catch (error) {
    return {
      statusCode: 404,
      body: JSON.stringify({
        message: "Error fetching weather data",
        error: error.message,
      }),
    };
  }
};

// GET /id/:id
// An example showing how to specify some data as a URL parameter.
exports.getId = async (event) => {
  // Access the value of :id
  const id = event.pathParameters.id;
  return {
    statusCode: 200,
    body: JSON.stringify({ message: `The id is ${id}` }),
  };
};

// POST /data
// An example showing how to send data in the body of a POST request.
exports.postData = async (event) => {
  // Parse the data from the body
  const data = JSON.parse(event.body);
  return {
    statusCode: 200,
    body: JSON.stringify({ message: "Data received", data }),
  };
};
