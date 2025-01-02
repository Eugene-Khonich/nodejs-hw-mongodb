import { Router } from 'express';
import { ctrlWrapper } from '../utils/ctrlWrapper.js';
import {
  patchContactSchema,
  postContactSchema,
} from '../validation/contacts.js';
import { validateBody } from '../middlewares/validateBody.js';
import { isValidId } from '../middlewares/isValidId.js';
import {
  getContactsController,
  getContactByIdController,
  createContactController,
  patchContactController,
  deleteContactController,
} from '../controllers/contacts.js';
import { authenticate } from '../middlewares/authenticate.js';
import { upload } from '../middlewares/multer.js';

const router = Router();

router.use(authenticate);
router.get('/', ctrlWrapper(getContactsController));
router.get('/:contactId', isValidId, ctrlWrapper(getContactByIdController));
router.post(
  '/',
  upload.single('photo'),
  validateBody(postContactSchema),
  ctrlWrapper(createContactController),
);
router.patch(
  '/:contactId',
  isValidId,
  upload.single('photo'),
  validateBody(patchContactSchema),
  ctrlWrapper(patchContactController),
);
router.delete('/:contactId', isValidId, ctrlWrapper(deleteContactController));

export default router;
