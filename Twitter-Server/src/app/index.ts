import express from 'express';
import { ApolloServer } from '@apollo/server';
import { expressMiddleware } from '@apollo/server/express4'; // Correct import for Express integration
import { gql } from 'graphql-tag';

// Define GraphQL schema
const typeDefs = gql`
  type Query {
    hello: String
  }
`;

// Define resolvers
const resolvers = {
  Query: {
    hello: () => 'Hello world!',
  },
};

// Create and configure Express app
export const createApp = async () => {
  const app = express();

  // Create an ApolloServer instance
  const apolloServer = new ApolloServer({
    typeDefs,
    resolvers,
  });

  // Start the Apollo Server
  await apolloServer.start();

  // Apply Apollo Server middleware to Express app
  app.use('/graphql', express.json(), expressMiddleware(apolloServer));

  return app;
};
