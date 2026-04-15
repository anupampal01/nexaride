const { Resend } = require("resend");

const resend = new Resend(process.env.RESEND_API_KEY);

const sendMail = async (to, subject, html) => {
  const response = await resend.emails.send({
    from: "onboarding@resend.dev",
    to,
    subject,
    html,
  });

  return response;
};

module.exports = sendMail;