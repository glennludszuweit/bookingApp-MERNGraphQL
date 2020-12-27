import mongoose from 'mongoose';

const eventSchema = mongoose.Schema({
  title: {
    type: String,
    required: true,
    default: 'Test event',
  },
  body: {
    type: String,
    required: true,
    default: 'Test event body',
  },
});

export default mongoose.model('Event', eventSchema);
