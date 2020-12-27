import { GraphQLSchema, GraphQLObjectType } from 'graphql';

const QueryType = new GraphQLObjectType({
  name: 'QueryType',
  description: 'Queries',
  fields: {},
});

const MutationType = new GraphQLObjectType({
  name: 'MutationType',
  description: 'Mutations',
  fields: {},
});

export default new GraphQLSchema({
  query: QueryType,
  mutation: MutationType,
});
