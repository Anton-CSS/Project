import express from 'express';

const indexRouter = express.Router();

indexRouter.get('/', (req, res) => res.render('Home'));

// indexRouter.get('*', (req, res) => res.status(404).render('NotFoundPage'));

export default indexRouter;
