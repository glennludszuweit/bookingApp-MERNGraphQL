import { GraphQLFloat, GraphQLString } from 'graphql';
import Event from '../models/Event.js';
import EventType from '../types/eventType.js';

export const createEvent = {
  type: EventType,
  decription: 'Add new event',
  args: {
    title: { type: GraphQLString },
    body: { type: GraphQLString },
    price: { type: GraphQLFloat },
    date: { type: GraphQLString },
  },
  async resolve(parent, args) {
    const event = new Event({
      title: args.title,
      body: args.body,
      price: +args.price,
      date: new Date(args.date),
    });

    return await event.save();
  },
};
