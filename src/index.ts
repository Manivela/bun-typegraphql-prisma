import "reflect-metadata";
import { PrismaClient } from "@prisma/client";
import { ApolloServer } from "@apollo/server";
import { startStandaloneServer } from "@apollo/server/standalone";
import { buildSchema } from "type-graphql";
import { resolvers } from "@generated/type-graphql";

interface MyContext {
  prisma: PrismaClient;
}

const prisma = new PrismaClient();

const schema = await buildSchema({
  resolvers,
  validate: false,
});

const server = new ApolloServer<MyContext>({
  schema, // from previous step
});

const { url } = await startStandaloneServer(server, {
  context: async () => ({ prisma }),
  listen: { port: 4000 },
});
console.log("url: ", url);
