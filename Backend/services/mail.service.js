const { Resend } = require("resend");

const resend = new Resend(process.env.RESEND_API_KEY);

const sendMail = async (to, subject, html) => {
  try {
    const response = await resend.emails.send({
      from: "onboarding@resend.dev", // default (works without domain)
      to,
      subject,
      html,
    });

    return response;
  } catch (error) {
    console.error("Resend Error:", error);
    throw error; // 🔥 VERY IMPORTANT
  }
};

module.exports = sendMail;