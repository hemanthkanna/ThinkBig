const express = require("express");
const app = express();
const nodemailer = require("nodemailer");
const path = require("path");
const dotenv = require("dotenv");
const cors = require("cors");

dotenv.config({ path: path.join(__dirname, "config/config.env") });
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Enable CORS
// Configure CORS
let url = "http://localhost:5173";

if (process.env.NODE_ENV === "production") {
  url = "https://www.thinkbigsoft.com";
}
const corsOptions = {
  origin: url,
  methods: ["GET", "POST", "PUT", "DELETE"],
  allowedHeaders: ["Content-Type", "Authorization"],
  credentials: true,
};

app.use(cors(corsOptions));

const transporter = nodemailer.createTransport({
  host: process.env.SMTP_HOST,
  port: process.env.SMTP_PORT,
  secure: process.env.SMTP_PORT == 465, // true for 465, false for 587
  auth: {
    user: process.env.SMTP_USER,
    pass: process.env.SMTP_PASSWORD,
  },
});

app.post(`/email`, async (req, res) => {
  try {
    const { fullName, email, phone, reason, message } = req.body;
    if (!fullName || !email || !phone || !reason || !message) {
      return res.status(400).json({ error: "All fields are required" });
    }
    const mailOptions = {
      from: `${process.env.SMTP_FROM_NAME} <${process.env.SMTP_FROM_EMAIL}>`,
      to: process.env.SMTP_TO_EMAIL,
      subject: "New Enquiry Form Submission",
      text: `Name: ${fullName} \nEmail:${email}\nPhone: ${phone}\nReason: ${reason}\nMessage: ${message}`,
    };

    transporter.sendMail(mailOptions, function (error, info) {
      if (error) {
        console.error("Error sending email notification:", error);
        res.status(500).json({ message: "Error sending email notification." });
      } else {
        console.log("Email sent:", info.response);
        res.status(200).json({ message: "Form submitted successfully." });
      }
    });

    transporter.verify(function (error, success) {
      if (error) {
        console.log("SMTP configuration error:", error);
      } else {
        console.log("Server is ready to take messages");
      }
    });
  } catch (error) {
    console.error("Error:", error);
    res.status(500).json({ error: "Server Error" });
  }
});

app.listen(process.env.PORT, () => {
  console.log(
    `Server running on port ${process.env.PORT} in ${process.env.NODE_ENV}`
  );
});
