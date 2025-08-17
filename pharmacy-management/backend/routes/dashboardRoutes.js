import express from 'express';
import {getDashboardOverview} from "../controllers/dashboardController.js";
import { protect, AllowedRoles } from '../middlewares/authMiddleware.js';

const router = express.Router();

router.get('/overview',protect, AllowedRoles, getDashboardOverview);

export default router;