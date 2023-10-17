const request = require("request");

const location = { latitude: "42.809730", longitude: "-70.876740" };
const { latitude, longitude } = location;

module.exports.handler = (event, context, callback) => {
  const headers = { "Access-Control-Allow-Origin": "*" };
  let response;

  request.get(
    {
      url: `https://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&units=imperial&appid=${process.env.API_KEY}`,
    },
    (err, res, body) => {
      if (err) {
        response = { statusCode: 404, headers, body: err };
        callback(null, response);
      } else {
        response = { statusCode: res.statusCode, headers, body };
        callback(null, response);
      }
    },
  );
};
