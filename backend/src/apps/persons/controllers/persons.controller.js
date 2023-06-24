import {Persons} from '../models/Persons.js'

export const getPersons = async (req, res) => {
    const  persons = await Persons.findAll();
    res.json(persons)
}

export const createPerson = async (req, res) => {
    console.log(req.body)
    const { first_name, last_name, date_of_birth, dni, age } = req.body;
    const person = await Persons.create({ 
        first_name, 
        last_name, 
        date_of_birth, 
        dni, 
        age 
    });
    res.json(person)
}