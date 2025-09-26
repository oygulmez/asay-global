import nodemailer from 'nodemailer';

// SendGrid SMTP Configuration
const transporter = nodemailer.createTransport({
  host: 'smtp.sendgrid.net',
  port: 587,
  secure: false, // true for 465, false for other ports
  auth: {
    user: 'apikey', // SendGrid requires 'apikey' as username
    pass: process.env.SENDGRID_API_KEY, // Your SendGrid API key
  },
});

// Alternative: cPanel SMTP Configuration (backup)
const cpanelTransporter = nodemailer.createTransport({
  host: 'mail.asayglobal.com',
  port: 587,
  secure: false, // true for 465, false for other ports
  auth: {
    user: 'info@asayglobal.com',
    pass: 'AsayGlobal123!',
  },
});

export interface EmailData {
  name: string;
  email: string;
  phone?: string;
  company?: string;
  subject: string;
  message: string;
  preferredDealer?: string;
}

export async function sendEmail(data: EmailData) {
  try {
    const mailOptions = {
      from: 'info@asayglobal.com',
      to: 'info@asayglobal.com',
      subject: `Contact Form: ${data.subject}`,
      html: `
        <h2>New Contact Form Submission</h2>
        <p><strong>Name:</strong> ${data.name}</p>
        <p><strong>Email:</strong> ${data.email}</p>
        ${data.phone ? `<p><strong>Phone:</strong> ${data.phone}</p>` : ''}
        ${data.company ? `<p><strong>Company:</strong> ${data.company}</p>` : ''}
        <p><strong>Subject:</strong> ${data.subject}</p>
        ${data.preferredDealer ? `<p><strong>Preferred Dealer:</strong> ${data.preferredDealer}</p>` : ''}
        <p><strong>Message:</strong></p>
        <p>${data.message.replace(/\n/g, '<br>')}</p>
      `,
    };

    // Try cPanel SMTP first (more reliable)
    try {
      await cpanelTransporter.sendMail(mailOptions);
      console.log('Email sent via cPanel SMTP');
      return { success: true, method: 'cPanel SMTP' };
    } catch (cpanelError) {
      console.log('cPanel SMTP failed, trying SendGrid:', cpanelError);
      
      // Fallback to SendGrid if API key exists
      if (process.env.SENDGRID_API_KEY) {
        await transporter.sendMail(mailOptions);
        console.log('Email sent via SendGrid');
        return { success: true, method: 'SendGrid' };
      }
      
      throw cpanelError;
    }
    
  } catch (error) {
    console.error('Email sending failed:', error);
    return { success: false, error: error instanceof Error ? error.message : 'Unknown error' };
  }
}
