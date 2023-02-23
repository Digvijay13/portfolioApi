import sgMail from "@sendgrid/mail";
import nodemailer from 'nodemailer';
import nodemailerSendgrid from 'nodemailer-sendgrid';
import {htmlTemp} from './Template.js'
const smtp = async (key, data) => {
  const transporter = nodemailer.createTransport(
    nodemailerSendgrid({
        apiKey:key
    })
);
  const msg = {
    to: data.sendTo, // Change to your recipient
    from: "virender@codedrillinfotech.com", // Change to your verified sender
    subject: "Sending with SendGrid is Fun",
    html: htmlTemp(data.message),
  };
  const sendMail = await transporter.sendMail(msg);
  console.log(sendMail);
};
export default smtp;
