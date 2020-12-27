import { GraphQLID, GraphQLList } from 'graphql';

export const getUsers = {
  type: new GraphQLList(),
  description: 'Get all users',
  async resolve() {},
};
