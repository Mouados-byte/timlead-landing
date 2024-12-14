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
    to: 'imam.mouad@timlead.com',
    from: 'imam.mouad@timlead.com',
    subject: subject,
    text: description,
    html: `
      <div>
        <h1>Name: ${name}</h1>
        <h1>E-mail: ${email}</h1>
        <p>${description}</p>
        <p>Sent from: ${referer || 'Not specified or hidden'}</p>
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