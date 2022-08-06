# Easily Deploy a CORS Proxy API with AWS Amplify

## Motivation

As a web application developer, I often investigate how websites all over the internet turn their data API into their beautiful UI.
I look up their _html_ elements and their network request, mostly _http_ requests to figure out their source code. 
As I mostly write _React_ apps, I will guess what's the states and effect, and the component library the websites are using.

Sometimes, It also come across my mind to replicate it's UI. 
Let's use their public data api and build a minimal reproduction environment using tools like codesandbox or spin up a small create-react-app project.
And then this happen:

![cors error](./image.png)

It means CORS is disabled, and the browser refused to give the response data to the JavaScript. 
Then you asked yourself, but the data is already public and tools like curl and postman can access it without the setback.

You may also come into this situation when working in a large team. 
The backend developers only work with the postman. 
They forget to set the response header `Access-Control-Allow-Origin : *` because it doesn't matter to them.
Their tests still pass without it.
You tell them to fix it, but it takes time and you have deadlines.

## About CORS Proxy

If you have experienced such agitations, CORS Proxy can be your savior.
Instead of sending a request directly to the data server, the browser makes the request to a proxy server with CORS enabled.
During that request, the proxy server sent the actual request to the data server.
This method will enable the browser to give JavaScript the data that it needs.
**No more CORS error!**

You actually don't have to spin up your own CORS Proxy server as https://corsproxy.io/ is a thing. 
However, you are a developer and you don't want your service to be critically reliant on others, right?!
Then I might have a solution for your problem. 
It involves building your own CORS Proxy API with just a few commands.

## Requirement

## DEPLOY

## Known Issues and Limitations
