import express from 'express';
import mongoose from 'mongoose';
import dotenv from 'dotenv';
import cors from 'cors';
import helmet from 'helmet';
import morgan from 'morgan';

import generalRoutes from './routes/general.routes.js';
import clientRoutes from './routes/client.routes.js';
import salesRoutes from './routes/sales.routes.js';
import managementRoutes from './routes/management.routes.js';

dotenv.config();

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(helmet());
app.use(helmet.crossOriginResourcePolicy({ policy: "cross-origin" }));
app.use(cors())
app.use(morgan("common"))

app.use('/general', generalRoutes);
app.use('/client', clientRoutes);
app.use('/sales', salesRoutes);
app.use('/management', managementRoutes);

const PORT = 8000;
app.listen(PORT);