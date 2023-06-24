import { Router } from "express";
import {getPersons, createPerson} from "./controllers/persons.controller.js";
const persons = Router()

persons.get('/persons', getPersons);
persons.post('/person', createPerson);

export default persons