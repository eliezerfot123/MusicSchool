import { Router } from "express";
const persons = Router()
import {renderForm, createPerson, validateDni, validateEmail} from "./controllers/persons.controller.js";

persons.get('/', renderForm);
persons.post('/person/create/', createPerson);
persons.get('/person/d/:dni', validateDni);
persons.get('/person/e/:email', validateEmail);

export default persons