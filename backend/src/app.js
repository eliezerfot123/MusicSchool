import express from 'express';
import exphbs from "express-handlebars";
import { dirname, join } from "path";
import { fileURLToPath } from "url";

import MainRoutes from './routes/urls.js'
import personRoutes from './apps/persons/persons.route.js'

// Initializations

const app = express()
const __dirname = dirname(fileURLToPath(import.meta.url));

//middleware
app.use(express.json())
app.use(express.urlencoded({extended: false}))

// settings 
app.use(MainRoutes);
app.use(personRoutes);
app.set('views', join(__dirname, 'views'))
// config view engine
const hbs = exphbs.create({
    defaultLayout: "base",
    layoutsDir: join(app.get("views"), "templates"),
    partialsDir: join(app.get("views"), "partials"),
    extname: ".hbs",
});
app.engine(".hbs", hbs.engine);
app.set("view engine", ".hbs");


// static files
app.use(express.static(join(__dirname, "public")));

export default app;