import mongoose from 'mongoose';
import app from './app';

const dbUrl = 'mongodb://localhost:27017/skillswap';
const port = 3000;

mongoose.connect(dbUrl)
  .then(() => {
    console.log('Connected to MongoDB');
    app.listen(port, () => {
      console.log(`Server is running on port ${port}`);
    });
  })
  .catch((error) => {
    console.error('Could not connect to MongoDB', error);
  });
