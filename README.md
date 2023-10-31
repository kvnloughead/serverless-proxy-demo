# Serverless Proxy Example

This is intended as an example, feel free to make use of the code in your own project. Note that it won't work as expected
if you try to run it locally. You can test the deployed endpoints via `curl`:

```
curl https://5q2gqng852.execute-api.us-east-1.amazonaws.com/weather
curl https://5q2gqng852.execute-api.us-east-1.amazonaws.com/id/some-id-string
curl -X POST -H "Content-Type: application/json" -d '{"key":"foobar"}' https://5q2gqng852.execute-api.us-east-1.amazonaws.com/data
```

For a description of the endpoints, see the comments in `index.js` and `serverless.yml`.
