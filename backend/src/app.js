import express from 'express';
import MainRoutes from './routes/urls.js'
import personRoutes from './apps/persons/persons.route.js'

const app = express()

//middleware
app.use(express.json())


app.use(MainRoutes);
app.use(personRoutes);

export default app;