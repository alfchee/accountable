"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.resolvers = exports.typeDefs = void 0;

var _apolloServerExpress = require("apollo-server-express");

// Construct a schema, using GraphQL schema language
const typeDefs = (0, _apolloServerExpress.gql)`
  type Query {
    hello: String
  }
`; // Provide resolver functions for your schema fields

exports.typeDefs = typeDefs;
const resolvers = {
  Query: {
    hello: () => "Hello world!"
  }
};
exports.resolvers = resolvers;