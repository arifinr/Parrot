"use strict";

const getJSONString = (obj) => {
  return JSON.stringify(obj, null, 2);
};

const routeResponseMap = {
  "/": "<h1>Welcome to Parrot!</h1>",
  "/signup": "<h1>Sign Up</h1>",
  "/login": "<h1>Log In</h1>",
  "/error": "<h1>Sorry, this page isn't available</h1>",
};

const port = 3000,
  http = require("http"),
  httpStatus = require("http-status-codes"),
  app = http.createServer((req, res) => {
    res.writeHead(httpStatus.OK, {
      "Content-Type": "text/html",
    });

    console.log(`Method: ${getJSONString(req.method)}`);
    console.log(`URL: ${getJSONString(req.url)}`);
    console.log(`Headers: ${getJSONString(req.headers)}`);

    if (routeResponseMap[req.url]) {
      res.end(routeResponseMap[req.url]);
    } else {
      res.end(routeResponseMap["/error"]);
    }
  });

app.listen(port);
console.log(`The server has started and is listening on port number: ${port}`);
