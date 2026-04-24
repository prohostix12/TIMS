import { NextResponse } from 'next/server';
import connectDB from '@/lib/db';
import Timetable from '@/models/Timetable';

export async function PUT(
  request: Request,
  { params }: { params: Promise<{ id: string }> }
) {
  try {
    const { id } = await params;
    await connectDB();
    const body = await request.json();
    const timetable = await Timetable.findByIdAndUpdate(id, body, { new: true });
    if (!timetable) return NextResponse.json({ error: 'Timetable not found' }, { status: 404 });
    return NextResponse.json(timetable);
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
    const timetable = await Timetable.findByIdAndDelete(id);
    if (!timetable) return NextResponse.json({ error: 'Timetable not found' }, { status: 404 });
    return NextResponse.json({ message: 'Timetable deleted successfully' });
  } catch (error: any) {
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
}
