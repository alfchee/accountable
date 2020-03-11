// const functions = require('firebase-functions');

// // Create and Deploy Your First Cloud Functions
// // https://firebase.google.com/docs/functions/write-firebase-functions
//
// exports.helloWorld = functions.https.onRequest((request, response) => {
//  response.send("Hello from Firebase!");
// });

if (!global._babelPolyfill) {
  require("babel-polyfill");
}

import { https } from "firebase-functions";

// the express setup is done in graphql server
import setupGraphQlServer from "./graphql/server";
const graphQlServer = setupGraphQlServer();

// pass in to the express app
export const api = https.onRequest(graphQlServer);
