import { Contacts } from '../db/models/contacts.js';

export const getAllContacts = async () => {
  const contacts = await Contacts.find();
  return contacts;
};

export const getContactById = async (contactId) => {
  const contact = await Contacts.findById(contactId);
  return contact;
};

export const createContact = async (payload) => {
  const contact = await Contacts.create(payload);
  return contact;
};

export const updateContact = async (contactId, payload, options = {}) => {
  const rawResult = await Contacts.findOneAndUpdate(
    { _id: contactId },
    payload,
    {
      new: true,
      includeResultMetadata: true,
      ...options,
    },
  );
  if (!rawResult || !rawResult.value) return null;
  return {
    contact: rawResult.value,
    isNew: Boolean(rawResult?.lastErrorObject?.upserted),
  };
};

export const deleteContact = async (contactId) => {
  const contact = await Contacts.findOneAndDelete({
    _id: contactId,
  });

  return contact;
};

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
