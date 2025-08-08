import 'dotenv/config';
import * as nodemailer from 'nodemailer';

const EMAIL_USER = "usuariojpii2025@gmail.com";
const EMAIL_PASS = "qvmr cjip xuxm zcso";
const EMAIL_TO = "recursoshumanos@iejuanpabloiisoacha.edu.co";
const POST = async ({ request }) => {
  const headers = {
    "Content-Type": "application/json",
    "Access-Control-Allow-Origin": "*",
    // Cambia '*' por tu dominio en producción por seguridad
    "Access-Control-Allow-Methods": "POST, OPTIONS",
    "Access-Control-Allow-Headers": "Content-Type"
  };
  if (request.method === "OPTIONS") {
    return new Response(null, { status: 204, headers });
  }
  try {
    const formData = await request.formData();
    const name = formData.get("name");
    const email = formData.get("email");
    const message = formData.get("message");
    const cvValue = formData.get("cv");
    if (!name?.trim() || !email?.trim() || !message?.trim()) {
      return new Response(
        JSON.stringify({ success: false, message: "Por favor complete todos los campos requeridos." }),
        { status: 400, headers }
      );
    }
    const emailRegex = /^[^@]+@[^@]+\.[^@]+$/;
    if (!emailRegex.test(email)) {
      return new Response(
        JSON.stringify({ success: false, message: "Por favor ingrese un correo electrónico válido." }),
        { status: 400, headers }
      );
    }
    if (!(cvValue instanceof File)) {
      return new Response(
        JSON.stringify({ success: false, message: "Por favor adjunte su CV." }),
        { status: 400, headers }
      );
    }
    const cv = cvValue;
    if (cv.type !== "application/pdf") {
      return new Response(
        JSON.stringify({ success: false, message: "El archivo CV debe ser un PDF." }),
        { status: 400, headers }
      );
    }
    if (cv.size > 20 * 1024 * 1024) {
      return new Response(
        JSON.stringify({ success: false, message: "El archivo es demasiado grande (máx 20 MB)." }),
        { status: 400, headers }
      );
    }
    const transporter = nodemailer.createTransport({
      host: "smtp.gmail.com",
      port: 465,
      // Puerto SSL, recomendado sobre 587
      secure: true,
      // true para 465, false para otros puertos como 587
      auth: {
        user: EMAIL_USER,
        pass: EMAIL_PASS
        // Aquí debe estar tu Contraseña de Aplicación
      }
    });
    await transporter.verify();
    const fileBuffer = await cv.arrayBuffer();
    const mailOptions = {
      from: `"${name}" <${EMAIL_USER}>`,
      // Muestra el nombre del remitente en el cliente de correo
      to: EMAIL_TO,
      replyTo: email,
      // Permite responder directamente al usuario desde el correo
      subject: `Nuevo Candidato: ${name}`,
      html: `
        <h1>Nueva postulación desde el formulario web</h1>
        <p><strong>Nombre:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Mensaje:</strong></p>
        <p>${message}</p>
      `,
      attachments: [
        {
          filename: cv.name,
          content: Buffer.from(fileBuffer),
          contentType: "application/pdf"
        }
      ]
    };
    await transporter.sendMail(mailOptions);
    return new Response(
      JSON.stringify({ success: true, message: "Mensaje enviado con éxito." }),
      { status: 200, headers }
    );
  } catch (error) {
    console.error("Error al procesar la solicitud POST:", error);
    return new Response(
      JSON.stringify({ success: false, message: "Hubo un error al enviar el mensaje. Por favor, intente nuevamente." }),
      { status: 500, headers }
    );
  }
};

export { POST };
