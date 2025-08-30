import 'dotenv/config';
import * as nodemailer from 'nodemailer';
export { renderers } from '../../renderers.mjs';

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
      return new Response(JSON.stringify({ success: false, message: "Por favor adjunte su CV." }), {
        status: 400,
        headers
      });
    }
    const cv = cvValue;
    if (cv.type !== "application/pdf") {
      return new Response(JSON.stringify({ success: false, message: "El archivo CV debe ser un PDF." }), {
        status: 400,
        headers
      });
    }
    if (cv.size > 20 * 1024 * 1024) {
      return new Response(JSON.stringify({ success: false, message: "El archivo es demasiado grande (máx 20 MB)." }), {
        status: 400,
        headers
      });
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
    const textContent = `
INSTITUTO PSICOPEDAGÓGICO JUAN PABLO II
Nueva Postulación Recibida

INFORMACIÓN DEL CANDIDATO
Nombre: ${name}
Correo electrónico: ${email}

MENSAJE DEL CANDIDATO:
${message}

DOCUMENTO ADJUNTO: ${cv.name} (Hoja de Vida en formato PDF)

---
Este es un mensaje automático generado desde nuestro formulario de contacto web.
Para responder al candidato, por favor use la función "Responder" de su cliente de correo electrónico.

INSTITUTO PSICOPEDAGÓGICO JUAN PABLO II
Dirección: Carrera 7# 13 – 34, Soacha – Cundinamarca
Teléfono: (+57) 8545966
WhatsApp: (+57) 319 6721410
Sitio web: https://iejuanpabloiisoacha.edu.co

Si no desea recibir estos mensajes, puede contactarnos para ser removido de la lista.
    `.trim();
    const mailOptions = {
      from: `"Instituto JPII - Sistema de Contacto" <${EMAIL_USER}>`,
      to: EMAIL_TO,
      replyTo: email,
      subject: `Postulación Recibida - ${name}`,
      text: textContent,
      html: `
        <!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">
        <html xmlns="http://www.w3.org/1999/xhtml" lang="es">
        <head>
          <meta http-equiv="Content-Type" content="text/html; charset=UTF-8" />
          <meta name="viewport" content="width=device-width, initial-scale=1.0" />
          <title>Postulación Recibida - Instituto JPII</title>
          <style type="text/css">
            body { margin: 0; padding: 0; font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif; background-color: #f8f9fa; }
            table { border-collapse: collapse; }
            .container { max-width: 600px; margin: 0 auto; background-color: #ffffff; }
            .header { background: linear-gradient(135deg, #1e3a8a 0%, #3b82f6 100%); color: #ffffff; padding: 40px 30px; text-align: center; }
            .content { padding: 40px 30px; }
            .info-box { background-color: #f1f5f9; border-left: 4px solid #3b82f6; padding: 20px; margin: 20px 0; }
            .message-box { background-color: #ffffff; border: 2px solid #e2e8f0; border-radius: 8px; padding: 25px; margin: 25px 0; }
            .attachment-notice { background-color: #fef3c7; border: 1px solid #f59e0b; border-radius: 6px; padding: 15px; margin: 20px 0; }
            .footer { background-color: #1e293b; color: #ffffff; padding: 30px; text-align: center; }
            .contact-grid { display: table; width: 100%; margin: 20px 0; }
            .contact-item { display: table-cell; padding: 0 15px; vertical-align: top; }
            .btn { display: inline-block; background-color: #2563eb; color: #ffffff; text-decoration: none; padding: 12px 24px; border-radius: 6px; font-weight: 600; margin: 10px 0; }
            .btn:hover { background-color: #1d4ed8; }
            @media only screen and (max-width: 600px) {
              .container { width: 100% !important; }
              .content { padding: 20px 15px !important; }
              .contact-item { display: block; padding: 10px 0; }
            }
          </style>
        </head>
        <body>
          <table width="100%" border="0" cellspacing="0" cellpadding="0" style="background-color: #f8f9fa;">
            <tr>
              <td align="center" style="padding: 20px 10px;">
                <table class="container" width="600" border="0" cellspacing="0" cellpadding="0" style="background-color: #ffffff; border-radius: 12px; overflow: hidden; box-shadow: 0 4px 12px rgba(0, 0, 0, 0.15);">
                  <!-- Header Section -->
                  <tr>
                    <td class="header">
                      <h1 style="margin: 0 0 10px 0; font-size: 28px; font-weight: 700; text-shadow: 0 2px 4px rgba(0, 0, 0, 0.3);">
                        📋 Nueva Postulación Recibida
                      </h1>
                      <p style="margin: 0; font-size: 18px; font-weight: 300; opacity: 0.9;">
                        Instituto Psicopedagógico Juan Pablo II
                      </p>
                      <div style="margin-top: 15px; padding: 10px; background-color: rgba(255, 255, 255, 0.1); border-radius: 6px; display: inline-block;">
                        <span style="font-size: 14px; font-weight: 500;">Sistema de Contacto Web</span>
                      </div>
                    </td>
                  </tr>

                  <!-- Main Content -->
                  <tr>
                    <td class="content">
                      <h2 style="color: #1e293b; font-size: 22px; font-weight: 600; margin: 0 0 25px 0; border-bottom: 2px solid #e2e8f0; padding-bottom: 10px;">
                        👤 Información del Candidato
                      </h2>

                      <!-- Candidate Information -->
                      <div class="info-box">
                        <table width="100%" border="0" cellspacing="0" cellpadding="0">
                          <tr>
                            <td style="padding: 8px 0; border-bottom: 1px solid #cbd5e1;">
                              <strong style="color: #334155; font-size: 16px; display: inline-block; width: 120px;">Nombre:</strong>
                              <span style="color: #0f172a; font-size: 16px; font-weight: 500;">${name}</span>
                            </td>
                          </tr>
                          <tr>
                            <td style="padding: 8px 0;">
                              <strong style="color: #334155; font-size: 16px; display: inline-block; width: 120px;">Correo:</strong>
                              <a href="mailto:${email}" style="color: #2563eb; font-size: 16px; font-weight: 500; text-decoration: none;">${email}</a>
                            </td>
                          </tr>
                        </table>
                      </div>

                      <!-- Message Section -->
                      <h3 style="color: #1e293b; font-size: 20px; font-weight: 600; margin: 35px 0 20px 0;">
                        💬 Mensaje del Candidato
                      </h3>
                      <div class="message-box">
                        <div style="font-size: 16px; line-height: 1.6; color: #374151; white-space: pre-wrap;">
                          ${message.replace(/\n/g, "<br>")}
                        </div>
                      </div>

                      <!-- Attachment Notice -->
                      <div class="attachment-notice">
                        <table width="100%" border="0" cellspacing="0" cellpadding="0">
                          <tr>
                            <td style="text-align: center;">
                              <span style="font-size: 18px; margin-right: 10px;">📎</span>
                              <strong style="color: #92400e; font-size: 16px;">Documento Adjunto</strong>
                              <br>
                              <span style="color: #78350f; font-size: 14px; margin-top: 5px; display: block;">
                                ${cv.name} (Hoja de Vida en formato PDF)
                              </span>
                            </td>
                          </tr>
                        </table>
                      </div>

                      <!-- Action Button -->
                      <div style="text-align: center; margin: 30px 0;">
                        <a href="mailto:${email}?subject=Respuesta a tu postulación en Instituto JPII" class="btn">
                          Responder al Candidato
                        </a>
                      </div>
                    </td>
                  </tr>

                  <!-- Footer Section -->
                  <tr>
                    <td class="footer">
                      <h3 style="margin: 0 0 15px 0; font-size: 20px; font-weight: 600;">
                        Instituto Psicopedagógico Juan Pablo II
                      </h3>
                      <p style="margin: 0 0 20px 0; font-size: 14px; opacity: 0.9;">
                        Educación con calidad • Formación integral • Valores cristianos
                      </p>

                      <div class="contact-grid">
                        <div class="contact-item">
                          <strong style="font-size: 14px; display: block; margin-bottom: 5px;">📍 Ubicación</strong>
                          <span style="font-size: 12px; opacity: 0.9;">Carrera 7# 13 – 34<br>Soacha – Cundinamarca</span>
                        </div>
                        <div class="contact-item">
                          <strong style="font-size: 14px; display: block; margin-bottom: 5px;">📞 Teléfono</strong>
                          <span style="font-size: 12px; opacity: 0.9;">(+57) 8545966</span>
                        </div>
                        <div class="contact-item">
                          <strong style="font-size: 14px; display: block; margin-bottom: 5px;">💬 WhatsApp</strong>
                          <span style="font-size: 12px; opacity: 0.9;">(+57) 319 6721410</span>
                        </div>
                      </div>

                      <div style="margin-top: 25px; padding-top: 20px; border-top: 1px solid rgba(255, 255, 255, 0.2);">
                        <p style="margin: 0; font-size: 11px; opacity: 0.7; line-height: 1.4;">
                          Este mensaje fue generado automáticamente desde nuestro formulario de contacto web oficial.<br>
                          Si no desea recibir estas notificaciones, puede contactarnos para ser removido de la lista.
                        </p>
                        <p style="margin: 10px 0 0 0; font-size: 11px; opacity: 0.7;">
                          <a href="https://iejuanpabloiisoacha.edu.co" style="color: #60a5fa; text-decoration: none;">Visite nuestro sitio web</a>
                        </p>
                      </div>
                    </td>
                  </tr>
                </table>
              </td>
            </tr>
          </table>
        </body>
        </html>
      `,
      attachments: [
        {
          filename: cv.name,
          content: Buffer.from(fileBuffer),
          contentType: "application/pdf"
        }
      ],
      // Headers avanzados para máxima deliverability y SPAM prevention
      headers: {
        "X-Mailer": "Instituto JPII Professional Contact System v2.0",
        "X-Auto-Response-Suppress": "OOF, AutoReply",
        "List-Unsubscribe": `<mailto:${EMAIL_USER}?subject=unsubscribe>`,
        "List-Unsubscribe-Post": "List-Unsubscribe=One-Click",
        "X-Priority": "3",
        "X-MSMail-Priority": "Normal",
        Importance: "Normal",
        "Return-Path": EMAIL_USER,
        "Message-ID": `<${Date.now()}@iejuanpabloiisoacha.edu.co>`,
        "X-Report-Abuse": `Please report abuse to: ${EMAIL_USER}`,
        "X-AntiAbuse": "This is a professional contact system",
        "X-Get-Message-Sender": EMAIL_USER,
        "Authentication-Results": "Please check SPF and DKIM records"
      }
    };
    await transporter.sendMail(mailOptions);
    return new Response(JSON.stringify({ success: true, message: "Mensaje enviado con éxito." }), {
      status: 200,
      headers
    });
  } catch (error) {
    console.error("Error al procesar la solicitud POST:", error);
    return new Response(
      JSON.stringify({ success: false, message: "Hubo un error al enviar el mensaje. Por favor, intente nuevamente." }),
      { status: 500, headers }
    );
  }
};

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  POST
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
