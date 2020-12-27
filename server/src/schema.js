import { GraphQLSchema, GraphQLObjectType } from 'graphql';
import { getEvents } from './queries/eventQuery.js';
import { addEvent } from './mutations/eventMutation.js';

const QueryType = new GraphQLObjectType({
  name: 'QueryType',
  description: 'Queries',
  fields: { getEvents },
});

const MutationType = new GraphQLObjectType({
  name: 'MutationType',
  description: 'Mutations',
  fields: { addEvent },
});

export default new GraphQLSchema({
  query: QueryType,
  mutation: MutationType,
});
