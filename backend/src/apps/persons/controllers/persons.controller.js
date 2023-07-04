import { Persons } from "../models/Persons.js";
import nodemailer from "nodemailer";
import "dotenv/config";
import { v4 as uuidv4 } from "uuid";
export const getPersons = async (req, res) => {
  const persons = await Persons.findAll();
  res.json(persons);
};

export const renderForm = (req, res) => {
  res.render("index");
};
export const renderPrivate = (req, res) => {
  res.render("private");
};

export const pwdPrivate = (req, res) => {
  const pwd = req.body.password
  if (pwd === process.env.PASSWORD_PRIVATE ){
    res.redirect("/private/data/list")
  }
};

export const listPrivateData = async (req, res) => {
  const persons = await Persons.findAll();
  res.render("list_private", {layout: "base_private", persons});
}


export const validateDni = async (req, res) => {
  const { dni } = req.params;

  const validate = await Persons.findOne({ where: { dni } });
  if (validate) {
    res.send(true);
  } else {
    res.send(false);
  }
};

export const validateEmail = async (req, res) => {
  const { email } = req.params;

  const validate = await Persons.findOne({ where: { email } });

  if (validate) {
    res.send(true);
  } else {
    res.send(false);
  }
};

export const createPerson = async (req, res) => {
  console.log(req.body);
  try {
    const userId = uuidv4();
    const { full_name, dni, phone, email, address, intruments } = req.body;
    await Persons.create({
      full_name,
      uid: userId,
      dni,
      phone,
      email,
      address,
      intruments,
    });

    res.send(userId);
    const transporter = nodemailer.createTransport({
      host: process.env.HOST_MAIL,
      port: process.env.PORT_MAIL,
      secure: true,
      auth: {
        user: process.env.USER_MAIL,
        pass: process.env.PASS_MAIL,
      },
    });
    // async..await is not allowed in global scope, must use a wrapper
    async function main() {
      // send mail with defined transport object
      const info = await transporter.sendMail({
        from: `"Fred Foo 👻" ${process.env.USER_MAIL}`, // sender address
        to: email, // list of receivers
        subject: "Hello ✔", // Subject line
        text: "Hello world?", // plain text body
        html: "<b>Hello world?</b>", // html body
      });

      console.log("Message sent: %s", info.messageId);
    }

    main().catch(console.error);
  } catch (error) {
    res.status(403).json({ message: error.message });
  }
};

export const seeRegistered = async (req, res) => {
  const { uid } = req.params;
  const person = await Persons.findOne({ where: { uid } });
  const { id, full_name, dni} = person;

  res.render("details", 
    { 
      layout: "base_pdf",
      id, 
      uid, 
      full_name,
      dni
  });
};

/* create for api*/
export const createPersonV = async (req, res) => {
  console.log(req.body);
  try {
    const { full_name, dni, phone, email, address, intruments } = req.body;
    const person = await Persons.create({
      full_name,
      dni,
      phone,
      email,
      address,
      intruments,
    });
    res.json(person);
  } catch (error) {
    res.status(403).json({ message: error });
  }
};
