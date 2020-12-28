import { GraphQLID, GraphQLList } from 'graphql';
import Event from '../models/Event.js';
import EventType from '../types/eventType.js';

export const getEvents = {
  type: new GraphQLList(EventType),
  description: 'Get all events',
  async resolve() {
    return await Event.find();
  },
};
