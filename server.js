import express from "express";
import bodyParser from "body-parser";
import { config } from "dotenv";
import cors from "cors";
import getMongooseReady from "./Database/connection.js";
import Users from "./Database/Models/getUser.js";
import smtp from "./Services/Smtp.js";
config();
const port = process.env.SERVER_URL || 4000;
const app = express();
app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
const clientMessage = "successfully registered our team will contact you soon";
const mdMessage = "New User";
app.post("/formSubmit", async (req, res) => {
  try {
    console.log(req.body)
    if (req.body) {
      const storeData = await Users.create(req.body);
      if (storeData) {
        // const sendMail = await smtp(process.env.SENDGRID_API_KEY, {
        //   sendTo: storeData.mail,
        //   message: clientMessage,
        // });
        // const sendMailToMD = await smtp(process.env.SENDGRID_API_KEY, {
        //   sendTo: "drana5338@gmail.com",
        //   message: mdMessage,
        // });
        res.send({ data: "success" });
      } else {
        res.send({ error: "Something went wrong" });
      }
    }
  } catch (error) {
    console.log(error,"errrrrrrrrr");
  }
});

app.listen(port, async () => {
  console.log(`Started ${port}🚀`);
  const getDB = getMongooseReady(process.env.DATABASE_URL);
  console.log(getDB);
});
