const express = require("express");
const nodemailer = require("nodemailer");
const bodyParser = require("body-parser");
const cors = require("cors");

const app = express();
app.use(bodyParser.json());
app.use(cors()); // Allow requests from your frontend

const transporter = nodemailer.createTransport({
  service: "gmail",
  auth: {
    user: "alessdare@gmail.com",
    pass: "ggtyqfvncuzwcfmi",
  },
});

app.post("/send-sms", (req, res) => {
  const { name, phone, email, message } = req.body;

  const full_messgae = `Name:${name},   Phone:${phone},     Email:${email},     Messgae:${message}`;

  const mailOptions = {
    from: "alessdare@gmail.com",
    to: "4382746913@vmobile.ca",
    subject: "",
    text: full_messgae,
  };

  transporter.sendMail(mailOptions, (error, info) => {
    if (error) {
      console.error("Error:", error);
      return res.status(500).json({ success: false, error: error.message });
    }
    console.log("SMS sent:", info.response);
    res.json({ success: true });
  });
});

app.listen(3000, () => {
  console.log("Backend running on http://localhost:3000");
});