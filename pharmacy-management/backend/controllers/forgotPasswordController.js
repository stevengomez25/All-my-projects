
import crypto from 'crypto';
import User from '../models/User.js';
import sendEmail from '../utils/sendEmail.js'; // tú lo puedes implementar luego con nodemailer

const forgotPassword = async (req, res) => {
  const { email } = req.body;

  try {
    const user = await User.findOne({ email });

    if (!user) return res.status(404).json({ message: 'User not found' });

    // Crear token único y seguro
    const resetToken = crypto.randomBytes(20).toString('hex');

    // Guardarlo en el usuario, junto con fecha de expiración
    user.resetPasswordToken = resetToken;
    user.resetPasswordExpires = Date.now() + 3600000; // 1 hora

    await user.save();

    // Enlace que le enviarías por correo
    const resetURL = `http://localhost:5173/reset-password/${resetToken}`;

    // Si tienes sistema de envío de correo, aquí lo implementas (esto es opcional por ahora)
    await sendEmail(user.email, 'Reset your password', `Click here to reset your password: ${resetURL}`);

    res.status(200).json({ message: 'Reset link sent', resetURL }); // En desarrollo lo devolvemos en respuesta
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Server error' });
  }
};

export default forgotPassword;
