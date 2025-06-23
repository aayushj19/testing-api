  import express from 'express';
  import mongoose from 'mongoose';
  import dotenv from 'dotenv';
  import cors from 'cors';

  import bookRoutes from './routes/bookRoute.js';

  dotenv.config();
  const app = express();
  app.use(cors());
  app.use(express.json());
  app.use('/books', bookRoutes);

  if (process.env.NODE_ENV !== 'test') {
  mongoose.connect(process.env.MONGO_URI)
    .then(() => app.listen(5000, () => console.log('Server running on port 5000')))
    .catch(err => console.error(err)
  );
  }

  export default app;
  