import express from 'express';
import cors from 'cors';
import pino from 'pino-http';

import { getEnvVar } from './utils/getEnvVar.js';
import { getAllContacts, getContactById } from './services/contacts.js';

export const setupServer = () => {
  const app = express();
  app.use(cors());
  app.use(express.json());
  app.use(
    pino({
      transport: {
        target: 'pino-pretty',
      },
    }),
  );
  app.get('/', (req, res) => {
    res.json({
      message: 'Hello Mentor))',
    });
  });
  app.get('/contacts', async (req, res) => {
    const contacts = await getAllContacts();
    if (!contacts) {
      res.status(404).json({
        message: 'Something went wrong',
      });
      return;
    }
    res.status(200).json({
      status: 200,
      message: 'Successfully found contacts!',
      data: contacts,
    });
  });
  app.get('/contacts/:contactId', async (req, res) => {
    const { contactId } = req.params;
    const contact = await getContactById(contactId);
    if (!contact) {
      res.status(404).json({
        message: 'Contact not found',
      });
      return;
    }
    res.status(200).json({
      status: 200,
      message: `Successfully found contact with id ${contactId}!`,
      data: contact,
    });
  });
  app.use('*', (req, res) => {
    res.status(400).json({
      message: 'Not found',
    });
  });
  const port = Number(getEnvVar('PORT', 3000));
  app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
  });
};