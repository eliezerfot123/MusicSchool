import { Router } from "express";
const persons = Router();
import {
  renderForm,
  createPerson,
  validateDni,
  validateEmail,
  seeRegistered,
  renderPrivate, 
  pwdPrivate, 
  listPrivateData
} from "./controllers/persons.controller.js";

persons.get("/", renderForm);
persons.post("/person/create/", createPerson);
persons.get("/person/d/:dni", validateDni);
persons.get("/person/e/:email", validateEmail);
persons.get("/registered/:uid", seeRegistered);
persons.get("/private/data/", renderPrivate);
persons.post("/private/data/", pwdPrivate);
persons.get("/private/data/list", listPrivateData);

export default persons;
