import { NextResponse } from 'next/server';
import mongoose from 'mongoose';
import { CourseFinderQuestion } from '@/models/CourseFinderQuestion';
import connectDB from '@/lib/db';

export async function PUT(
  request: Request,
  { params }: { params: Promise<{ id: string }> }
) {
  try {
    const { id } = await params;
    await connectDB();
    const body = await request.json();
    const question = await CourseFinderQuestion.findByIdAndUpdate(id, body, { new: true });
    if (!question) return NextResponse.json({ error: 'Question not found' }, { status: 404 });
    return NextResponse.json(question);
  } catch (error: any) {
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
}

export async function DELETE(
  request: Request,
  { params }: { params: Promise<{ id: string }> }
) {
  try {
    const { id } = await params;
    await connectDB();
    const question = await CourseFinderQuestion.findByIdAndDelete(id);
    if (!question) return NextResponse.json({ error: 'Question not found' }, { status: 404 });
    return NextResponse.json({ message: 'Question deleted successfully' });
  } catch (error: any) {
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
}
