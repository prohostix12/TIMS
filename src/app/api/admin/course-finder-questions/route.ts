import { NextResponse } from 'next/server';
import { CourseFinderQuestion } from '@/models/CourseFinderQuestion';
import connectDB from '@/lib/db';

export async function GET() {
  try {
    await connectDB();
    const questions = await CourseFinderQuestion.find({ isActive: true }).sort({ order: 1 });
    return NextResponse.json(questions);
  } catch (error: any) {
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
}

export async function POST(req: Request) {
  try {
    await connectDB();
    const body = await req.json();
    const newQuestion = new CourseFinderQuestion(body);
    await newQuestion.save();
    return NextResponse.json(newQuestion, { status: 201 });
  } catch (error: any) {
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
}
