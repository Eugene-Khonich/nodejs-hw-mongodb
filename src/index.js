import { setupServer } from './server.js';
import { initMongoConnection } from './db/initMongoConnection.js';

const boostrap = async () => {
  await initMongoConnection();
  setupServer();
};

boostrap();

// {
//         "_id": "67520d94bc07988fe4b27143",
//         "name": "Yulia Shevchenko",
//         "phoneNumber": "+380000000001",
//         "email": "oleh1@example.com",
//         "isFavourite": false,
//         "contactType": "personal",
//         "createdAt": "2024-05-08T13:12:14.954Z",
//         "updatedAt": "2024-12-07T22:27:28.594Z"
//     }
