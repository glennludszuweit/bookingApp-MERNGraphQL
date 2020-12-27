import { GraphQLString } from 'graphql';
import EventType from '../types/eventType.js';

export const addEvent = {
  type: EventType,
  decription: 'Add new event',
  args: {
    title: { type: GraphQLString },
    body: { type: GraphQLString },
  },
  async resolve(parent, args) {
    const { title, body } = args;
    const event = {
      title,
      body,
    };

    return event;
  },
};
