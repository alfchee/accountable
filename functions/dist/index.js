"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.api = void 0;

var _firebaseFunctions = require("firebase-functions");

var _server = _interopRequireDefault(require("./graphql/server"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

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

const graphQlServer = (0, _server.default)(); // pass in to the express app

const api = _firebaseFunctions.https.onRequest(graphQlServer);

exports.api = api;