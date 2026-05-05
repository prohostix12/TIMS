import mongoose from 'mongoose';

const ResultSchema = new mongoose.Schema({
  university: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'University',
    required: [true, 'Please provide university'],
  },
  course: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Program',
    required: [true, 'Please provide course'],
  },
  semester: {
    type: String,
    required: [true, 'Please provide semester'],
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
