import { NextRequest, NextResponse } from 'next/server';
import { sendEmail, EmailData } from '@/lib/smtp';

export async function POST(request: NextRequest) {
  try {
    const data: EmailData = await request.json();
    
    // Validate required fields
    if (!data.name || !data.email || !data.subject || !data.message) {
      return NextResponse.json(
        { success: false, error: 'Missing required fields' },
        { status: 400 }
      );
    }

    // Send email
    const result = await sendEmail(data);
    
    if (result.success) {
      return NextResponse.json({ 
        success: true, 
        message: 'Email sent successfully',
        method: result.method 
      });
    } else {
      return NextResponse.json(
        { success: false, error: result.error },
        { status: 500 }
      );
    }
  } catch (error) {
    console.error('API Error:', error);
    return NextResponse.json(
      { success: false, error: 'Internal server error' },
      { status: 500 }
    );
  }
}
