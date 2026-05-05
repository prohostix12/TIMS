import { NextResponse } from 'next/server';
import connectDB from '@/lib/db';
import Syllabus from '@/models/Syllabus';

export async function PUT(
  request: Request,
  { params }: { params: Promise<{ id: string }> }
) {
  try {
    const { id } = await params;
    await connectDB();
    const body = await request.json();
    const syllabus = await Syllabus.findByIdAndUpdate(id, body, { new: true });
    if (!syllabus) return NextResponse.json({ error: 'Syllabus not found' }, { status: 404 });
    return NextResponse.json(syllabus);
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
    const syllabus = await Syllabus.findByIdAndDelete(id);
    if (!syllabus) return NextResponse.json({ error: 'Syllabus not found' }, { status: 404 });
    return NextResponse.json({ message: 'Syllabus deleted successfully' });
  } catch (error: any) {
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
}
