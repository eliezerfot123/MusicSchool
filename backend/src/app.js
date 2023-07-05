import express from 'express';
import exphbs from "express-handlebars";
import  morgan from 'morgan'
import cookieSession from 'cookie-session'
import cookieParser from 'cookie-parser';
import { dirname, join } from "path";
import { fileURLToPath } from "url";
import "dotenv/config";


import MainRoutes from './routes/urls.routes.js'
import personRoutes from './apps/persons/persons.routes.js'

// Initializations

const app = express()
const __dirname = dirname(fileURLToPath(import.meta.url));

//middleware
app.use(express.json())
app.use(express.urlencoded({extended: false}))
app.use(morgan('dev'))
app.use(cookieSession({
    name: 'session', // replace this with your own name to suit your needs
    keys: [ process.env.PASSWORD_PRIVATE ],
    maxAge: 24 * 60 * 60 * 1000 // 24 hours
}));
app.use(cookieParser());

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