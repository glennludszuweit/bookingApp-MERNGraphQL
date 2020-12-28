import { GraphQLSchema, GraphQLObjectType } from 'graphql';
import { getEvents } from './queries/eventQuery.js';
import { createEvent } from './mutations/eventMutation.js';
import { register } from './mutations/userMutation.js';

const QueryType = new GraphQLObjectType({
  name: 'QueryType',
  description: 'Queries',
  fields: { getEvents },
});

const MutationType = new GraphQLObjectType({
  name: 'MutationType',
  description: 'Mutations',
  fields: { createEvent, register },
});

export default new GraphQLSchema({
  query: QueryType,
  mutation: MutationType,
});
