import { Router } from 'express';

const workoutsRouter = Router();

workoutsRouter.get('/health', (req, res) => {
  res.json({ module: 'workouts', status: 'ok' });
});

export default workoutsRouter;
