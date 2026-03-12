import { Router } from 'express';

const analyticsRouter = Router();

analyticsRouter.get('/health', (req, res) => {
  res.json({ module: 'analytics', status: 'ok' });
});

export default analyticsRouter;
