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

    // Basic email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(data.email)) {
      return NextResponse.json(
        { success: false, error: 'Invalid email format' },
        { status: 400 }
      );
    }

    console.log('Attempting to send email:', { name: data.name, email: data.email, subject: data.subject });

    // Send email
    const result = await sendEmail(data);
    
    if (result.success) {
      console.log('Email sent successfully via:', result.method);
      return NextResponse.json({ 
        success: true, 
        message: 'Email sent successfully',
        method: result.method 
      });
    } else {
      console.error('Email sending failed:', result.error);
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
