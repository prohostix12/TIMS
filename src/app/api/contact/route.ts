import { NextResponse } from 'next/server';
import mongoose from 'mongoose';
import Message from '@/models/Message';

const connectDB = async () => {
  if (mongoose.connection.readyState >= 1) return;
  // Fallback to local MongoDB if URI is not provided in env
  const uri = process.env.MONGODB_URI || 'mongodb://localhost:27017/tims_db';
  return mongoose.connect(uri);
};

export async function POST(req: Request) {
  try {
    await connectDB();
    const data = await req.json();
    
    // Create a new message in the database
    const newMessage = await Message.create({
      name: data.name,
      email: data.email,
      // Map the phone number from the form to the subject field of the schema
      subject: data.subject || data.phone || 'No Subject Provided',
      message: data.message,
    });
    
    return NextResponse.json({ success: true, data: newMessage }, { status: 201 });
  } catch (error: any) {
    console.error('Contact form submission error:', error);
    return NextResponse.json({ success: false, error: error.message }, { status: 500 });
  }
}
