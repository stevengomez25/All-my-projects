import nodemailer from 'nodemailer';

const sendEmail = async (to, subject, htmlContent) => {
  // Transportador (esto es para desarrollo/localhost, NO lo uses en producción así)
  const transporter = nodemailer.createTransport({
    service: 'gmail', // o 'hotmail', 'yahoo', etc.
    auth: {
      user: process.env.EMAIL_USER, // ejemplo: tuemail@gmail.com
      pass: process.env.EMAIL_PASS, // contraseña o app password
    },
  });

  const mailOptions = {
    from: `"Farmacia App" <${process.env.EMAIL_USER}>`,
    to,
    subject,
    html: htmlContent,
  };

  try {
    await transporter.sendMail(mailOptions);
    console.log(`📧 Email sent to ${to}`);
  } catch (err) {
    console.error(`❌ Error sending email: ${err}`);
    throw new Error('Email sending failed');
  }
};

export default sendEmail;
