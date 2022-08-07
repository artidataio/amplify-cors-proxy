/*
Copyright 2017 - 2017 Amazon.com, Inc. or its affiliates. All Rights Reserved.
Licensed under the Apache License, Version 2.0 (the "License"). You may not use this file except in compliance with the License. A copy of the License is located at
    http://aws.amazon.com/apache2.0/
or in the "license" file accompanying this file. This file is distributed on an "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
See the License for the specific language governing permissions and limitations under the License.
*/




const express = require('express')
const bodyParser = require('body-parser')
const awsServerlessExpressMiddleware = require('aws-serverless-express/middleware')
const axios = require('axios');

// declare a new express app
const app = express()
app.use(bodyParser.json())
app.use(awsServerlessExpressMiddleware.eventContext())

// Enable CORS for all methods
app.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*")
  res.header("Access-Control-Allow-Headers", "*")
  next()
});

// The function that will be executed for the http get call
app.get('/', async function(req, res) {
  try{
    if(!!req.query.uri){
      const response = await axios.get(req.query.uri)
      res.json(response.data)
    } else {
      res.json({message: "The CORS Proxy is successfully provisioned. Add 'uri' query parameter to fetch from resources where CORS is not enabled yet. For example: https://<your-successfully-provisioned-endpoint>?uri=https://pse.kominfo.go.id/static/json-static/ASING_TERDAFTAR/0.json"})
    }
  } catch (err){
    res.statusCode(500)
    res.json({error: "Could not load items: " + err})
  } 
});


app.listen(3000, function() {
    console.log("App started")
});

// Export the app object. When executing the application local this does nothing. However,
// to port it to AWS Lambda we will create a wrapper around that will load the app from
// this file
module.exports = app
