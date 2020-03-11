"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _express = _interopRequireDefault(require("express"));

var _apolloServerExpress = require("apollo-server-express");

var _schema = require("./data/schema");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// express
// graphql imports
// import { graphqlExpress, graphiqlExpress } from "graphql-server-express";
// The GraphQL schema and resolvers are found in data folder
const setupGraphQLServer = () => {
  const app = (0, _express.default)();
  const server = new _apolloServerExpress.ApolloServer({
    typeDefs: _schema.typeDefs,
    resolvers: _schema.resolvers
  }); // the /graphql endpoint

  server.applyMiddleware({
    app,
    path: "/graphql",
    cors: true
  });
  return app;
};

var _default = setupGraphQLServer;
exports.default = _default;