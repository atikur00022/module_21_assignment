import express from 'express';
const router = express.Router();

import * as UsersController from '../app/controllers/UsersController.js';
import UserAuthMiddleware from "../app/middlewares/UserAuthMiddleware.js";
import upload from "../app/middlewares/FileUpload.js";

// Users Routes
router.post('/Registration', UsersController.Registration);
router.post('/Login', UsersController.Login);
router.get('/ReadProfile', UserAuthMiddleware, UsersController.ReadProfile);
router.post('/UpdateProfile', UserAuthMiddleware, UsersController.UpdateProfile);
router.post('/UploadSingleImage', UserAuthMiddleware, upload.single('image') ,UsersController.UploadSingleImage);
router.get('/ReadFile/:filename', UserAuthMiddleware ,UsersController.ReadFile);
router.get('/DeleteSingleFile/:filename', UserAuthMiddleware ,UsersController.DeleteSingleFile);


export default router;