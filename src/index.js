import { setupServer } from './server.js';
import { initMongoConnection } from './db/initMongoConnection.js';

const boostrap = () => {
  setupServer();
  initMongoConnection();
};

boostrap();
