import app from './app.js';
import {sequelize} from './config/db.js';
import './apps/persons/models/Persons.js';


const connectToDatabase = async () => {
    /**
    * Connects to the database using sequelize.authenticate() method.
    *
    * @return {Promise} A promise that resolves to nothing on success and rejects with an error object on failure.
    */
    try {
      //await sequelize.authenticate();
      //await sequelize.sync(); 
    } catch (error) {
      console.error('Unable to connect to the database:', error);
      process.exit(1);
    }
};

/**
 * Asynchronous function that connects to the database and starts the server.
 *
 * @return {Promise<void>} Resolves when the server has started listening on the specified port.
 */
const main = async () => {
  // Connect to database
  await connectToDatabase();
  // Start server
  const port = 3000;
  app.listen(port, () => {
    console.log(`Server listening on port ${port}.`);
  });
};

main()
