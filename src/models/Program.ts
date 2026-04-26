
import mongoose, { Schema, Document } from 'mongoose';

export interface IProgram extends Document {
  name: string;
  university: mongoose.Types.ObjectId;
  duration?: string;
  type?: string;
  category: string;
  level?: string;
  eligibility?: string;
  courseType?: string;
  image?: string;
  brochure?: string;
  description?: string;
  fee?: number;
  createdAt: Date;
  updatedAt: Date;
}

const ProgramSchema: Schema = new Schema({
  name: { type: String, required: true },
  university: { type: Schema.Types.ObjectId, ref: 'University', required: true },
  duration: { type: String },
  type: { type: String },
  category: { type: String, required: true },
  level: { type: String },
  eligibility: { type: String },
  courseType: { type: String, enum: ['Commerce', 'Science', 'Arts', 'IT', 'Others', 'Management', 'Medical'] },
  image: { type: String },
  brochure: { type: String },
  description: { type: String },
  fee: { type: Number, default: 0 },
}, { timestamps: true });

export default mongoose.models.Program || mongoose.model<IProgram>('Program', ProgramSchema);
