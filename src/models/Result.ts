import mongoose from 'mongoose';

const ResultSchema = new mongoose.Schema({
  course: {
    type: String,
    required: [true, 'Please provide course name'],
  },
  university: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'University',
    required: [true, 'Please provide university'],
  },
  marksheetUrl: {
    type: String,
    required: [true, 'Please provide marksheet URL or PDF path'],
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
});

export default mongoose.models.Result || mongoose.model('Result', ResultSchema);
