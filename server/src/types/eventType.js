import { GraphQLString, GraphQLObjectType, GraphQLID } from 'graphql';

const EventType = new GraphQLObjectType({
  name: 'Event',
  description: 'Event Type',
  fields: () => ({
    id: { type: GraphQLID },
    title: { type: GraphQLString },
    body: { type: GraphQLString },
  }),
});

export default EventType;
