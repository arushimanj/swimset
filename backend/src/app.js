import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';

import connectDB from './config/db.js';
import authRouter from './modules/auth/routes.js';
import workoutsRouter from './modules/workouts/routes.js';
import analyticsRouter from './modules/analytics/routes.js';

dotenv.config();

const app = express();

app.use(cors());
app.use(express.json());

app.get('/', (req, res) => {
  res.json({ message: 'SwimSet API running' });
});

app.use('/api/auth', authRouter);
app.use('/api/workouts', workoutsRouter);
app.use('/api/analytics', analyticsRouter);

connectDB().catch((error) => {
  console.error('MongoDB connection failed:', error.message);
  process.exit(1);
});

export default app;
