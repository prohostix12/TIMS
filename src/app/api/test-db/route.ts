import { NextResponse } from 'next/server';
import connectDB from '@/lib/db';

export async function GET() {
  try {
    const mongoose = await connectDB();
    const dbName = mongoose.connection?.db?.databaseName || 'unknown';
    
    return NextResponse.json({ 
      status: 'Connected', 
      database: dbName 
    });
  } catch (error: unknown) {
    const message = error instanceof Error ? error.message : 'Unknown error occurred';
    console.error('Database connection error:', error);
    return NextResponse.json({ 
      status: 'Error', 
      message: message
    }, { status: 500 });
  }
}
