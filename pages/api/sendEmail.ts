import { NextApiRequest, NextApiResponse } from 'next';
import sgMail from '@sendgrid/mail';

export default async function SendEmail(req: NextApiRequest, res: NextApiResponse) {
  if (!process.env.SENDGRID_API_KEY) {
    return res.status(500).json({ message: 'SendGrid API key is not configured' });
  }

  sgMail.setApiKey(process.env.SENDGRID_API_KEY);

  const { subject, description, email, name } = req.body;
  const referer = req.headers.referer;

  const content = {
    to: 'support@timlead.com',
    from: 'imam.mouad@timlead.com',
    subject: subject,
    text: description,
    html: `
      <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; padding: 20px; border: 1px solid #eaeaea; border-radius: 5px; background-color: #ffffff;">
        <h1 style="color: #333333; font-size: 24px; margin-bottom: 15px; border-bottom: 1px solid #eaeaea; padding-bottom: 10px;">E-mail: ${email}</h1>
        <h1 style="color: #333333; font-size: 24px; margin-bottom: 15px;">Name: ${name}</h1>
        <p style="color: #555555; font-size: 16px; line-height: 1.6; margin-bottom: 20px;">${description}</p>
        <p style="color: #999999; font-size: 14px; font-style: italic; margin-top: 30px; padding-top: 10px; border-top: 1px solid #eaeaea;">Sent from: ${referer || 'Not specified or hidden'}</p>
      </div>
    `
  };

  try {
    await sgMail.send(content);
    return res.status(200).json({ message: 'Email sent successfully' });
  } catch (error: any) {
    console.error('SendGrid Error:', error);
    if (error.response) {
      console.error(error.response.body);
    }
    return res.status(500).json({
      message: 'Error sending email',
      error: error.message
    });
  }
}