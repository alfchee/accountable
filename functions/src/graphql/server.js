// express
import express from "express";

// graphql imports
// import { graphqlExpress, graphiqlExpress } from "graphql-server-express";
import { ApolloServer } from "apollo-server-express";

// The GraphQL schema and resolvers are found in data folder
import { typeDefs, resolvers } from "./data/schema";

const setupGraphQLServer = () => {
  const app = express();

  const server = new ApolloServer({ typeDefs, resolvers });
  // the /graphql endpoint
  server.applyMiddleware({ app, path: "/graphql", cors: true });

  return app;
};

export default setupGraphQLServer;
