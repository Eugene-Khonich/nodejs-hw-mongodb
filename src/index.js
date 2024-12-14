import { setupServer } from './server.js';
import { initMongoConnection } from './db/initMongoConnection.js';

const boostrap = async () => {
  await initMongoConnection();
  setupServer();
};

boostrap();

// {
//         "name": "Yulia Shevchenko",
//         "phoneNumber": "+380000000001",
//         "email": "oleh1@example.com",
//         "isFavourite": false,
//         "contactType": "personal"
//     }
