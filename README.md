# node-ts-rest
A simple NodeJs REST API server written in TypeScript

In this Repo I'm following a blog series I've found on TopTal (https://www.toptal.com/express-js/nodejs-typescript-rest-api-pt-1) to master TypeScript and NodeJs.

The idea is to build my own NodeJs template for build services and reuse it to have the boilerplate code.

## Run
From the terminal
```
yarn start
```

Go to http://localhost:3000

## Debugging
From the terminal
```
yarn debug
```
From VSCode
Go to the `Debug & Run` section, set a break point on the code and click on `Launch Program`

## Test APIs with Thunder-Client in VSCode
First, you need to have installed Thunder-Client extension at: https://marketplace.visualstudio.com/items?itemName=rangav.vscode-thunder-client

Then just import the collection and environment in your Thunder-Client:
  - `thunder-client/thunder-collection_APIs Tests.json`
  - `thunder-client/thunder-environment_Test Envs Variables.json`

You'll get in your client sample API requests that you can call against the server to test the response.


References:
- https://www.toptal.com/express-js/nodejs-typescript-rest-api-pt-1
- https://www.toptal.com/express-js/nodejs-typescript-rest-api-pt-2
- https://www.toptal.com/express-js/nodejs-typescript-rest-api-pt-3
- https://github.com/rangav/thunder-client-support
