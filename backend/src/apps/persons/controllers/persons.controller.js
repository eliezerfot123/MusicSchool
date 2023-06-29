import {Persons} from '../models/Persons.js'

export const getPersons = async (req, res) => {
    const  persons = await Persons.findAll();
    res.json(persons)
}

export const createPerson = async (req, res) => {
    console.log(req.body)
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
        res.json(person)
    } catch (error) {
        res.status(403).json({ message: error.message });
    }
}