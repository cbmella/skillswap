// db.ts
import mongoose from 'mongoose';

export async function connectToDb(dbUrl: string): Promise<void> {
  await mongoose.connect(dbUrl);
}
