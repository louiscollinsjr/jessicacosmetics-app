import { NextRequest, NextResponse } from 'next/server';
import { sql } from '@vercel/postgres';

export async function POST(req: NextRequest) {
  const { email, isSubscribed } = await req.json();

  try {
    await sql`
      INSERT INTO contacts (email, subscribed) 
      VALUES (${email}, ${isSubscribed})
    `;
    return NextResponse.json({ message: 'Contact information saved successfully' });
  } catch (error) {
    console.error('Error saving contact information:', error);
    return NextResponse.json({ message: 'Failed to save contact information' }, { status: 500 });
  }
}