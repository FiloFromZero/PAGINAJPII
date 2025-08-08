import 'dotenv/config'; // Asegúrate de que las variables de entorno se carguen
import type { APIRoute } from 'astro';
import * as nodemailer from 'nodemailer';

// Las variables de entorno en Astro se acceden de forma segura con import.meta.env
const EMAIL_USER = import.meta.env.EMAIL_USER;
const EMAIL_PASS = import.meta.env.EMAIL_PASS;
const EMAIL_TO = import.meta.env.EMAIL_TO;

export const POST: APIRoute = async ({ request }) => {
  // Configurar cabeceras CORS
  const headers = {
    'Content-Type': 'application/json',
    'Access-Control-Allow-Origin': '*', // Cambia '*' por tu dominio en producción por seguridad
    'Access-Control-Allow-Methods': 'POST, OPTIONS',
    'Access-Control-Allow-Headers': 'Content-Type',
  };

  // Manejar la solicitud pre-vuelo (preflight) de CORS
  if (request.method === 'OPTIONS') {
    return new Response(null, { status: 204, headers });
  }

  // Verificar que las variables de entorno del servidor estén cargadas
  if (!EMAIL_USER || !EMAIL_PASS || !EMAIL_TO) {
    console.error('Error: Faltan variables de entorno para el envío de correo.');
    return new Response(
      JSON.stringify({
        success: false,
        message: 'Error de configuración en el servidor. Intente más tarde.'
      }),
      { status: 500, headers }
    );
  }

  try {
    const formData = await request.formData();
    const name = formData.get('name') as string;
    const email = formData.get('email') as string;
    const message = formData.get('message') as string;
    const cvValue = formData.get('cv');

    // --- Validaciones de los campos ---
    if (!name?.trim() || !email?.trim() || !message?.trim()) {
      return new Response(
        JSON.stringify({ success: false, message: 'Por favor complete todos los campos requeridos.' }),
        { status: 400, headers }
      );
    }
    const emailRegex = /^[^@]+@[^@]+\.[^@]+$/;
    if (!emailRegex.test(email)) {
      return new Response(
        JSON.stringify({ success: false, message: 'Por favor ingrese un correo electrónico válido.' }),
        { status: 400, headers }
      );
    }
    
    // Validación de archivo mejorada
    if (!(cvValue instanceof File)) {
        return new Response(
        JSON.stringify({ success: false, message: 'Por favor adjunte su CV.' }),
        { status: 400, headers }
        );
    }
    const cv: File = cvValue; // Ahora 'cv' es definitivamente un archivo

    if (cv.type !== 'application/pdf') {
        return new Response(
        JSON.stringify({ success: false, message: 'El archivo CV debe ser un PDF.' }),
        { status: 400, headers }
        );
    }
    if (cv.size > 20 * 1024 * 1024) { // Límite de 20 MB
        return new Response(
        JSON.stringify({ success: false, message: 'El archivo es demasiado grande (máx 20 MB).' }),
        { status: 400, headers }
        );
    }

    // --- Configuración de Nodemailer ---
    const transporter = nodemailer.createTransport({
      host: 'smtp.gmail.com',
      port: 465, // Puerto SSL, recomendado sobre 587
      secure: true, // true para 465, false para otros puertos como 587
      auth: {
        user: EMAIL_USER,
        pass: EMAIL_PASS, // Aquí debe estar tu Contraseña de Aplicación
      },
    });

    // ¡Importante! Verificar la conexión y autenticación
    await transporter.verify();

    // --- Preparación y envío del correo ---
    const fileBuffer = await cv.arrayBuffer();

    const mailOptions = {
      from: `"${name}" <${EMAIL_USER}>`, // Muestra el nombre del remitente en el cliente de correo
      to: EMAIL_TO,
      replyTo: email, // Permite responder directamente al usuario desde el correo
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
          contentType: 'application/pdf',
        },
      ],
    };

    // Enviar el correo
    await transporter.sendMail(mailOptions);

    return new Response(
      JSON.stringify({ success: true, message: 'Mensaje enviado con éxito.' }),
      { status: 200, headers }
    );

  } catch (error) {
    console.error('Error al procesar la solicitud POST:', error);
    return new Response(
      JSON.stringify({ success: false, message: 'Hubo un error al enviar el mensaje. Por favor, intente nuevamente.' }),
      { status: 500, headers }
    );
  }
};