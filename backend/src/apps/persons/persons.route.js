import { Router } from "express";
import {getPersons, createPerson} from "./controllers/persons.controller.js";
const persons = Router()

persons.get('/', (req, res) => {
    res.render('index')
});
persons.post('/persons', createPerson);

export default persons