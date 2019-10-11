import { GraphQLServer } from "graphql-yoga";
import { prisma } from "./generated/prisma-client";

import Query from "./resolvers/Query";

// const typeDefs = `
//   type Query {
//     portfolios: [Portfolio]!
//   }

//   type Mutation {
//     post(title: String!, description: String!): Portfolio!
//   }

//   type Portfolio {
//     id: ID!
//     title: String!
//     description: String!
//     create: String!
//     createBy: String!
//   }
// `;

const resolvers = {
  Query
};

// 3
const server = new GraphQLServer({
  typeDefs: "./src/schema.graphql",
  resolvers,
  context: request => {
    return {
      ...request,
      prisma
    };
  }
});

server.start(() => console.log(`Server is running on http://localhost:4000`));
