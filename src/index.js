import app from './app.js';
import {sequelize} from './config/database.js';
import './models/Persons.js';

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
