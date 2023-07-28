// server.ts
import { createApp } from "./app";
import { connectToDb } from "./db";

const dbUrl = "mongodb://localhost:27017/skillswap";
const port = 3000;

async function startServer(): Promise<void> {
  try {
    await connectToDb(dbUrl);
    console.log("Connected to MongoDB");

    const app = createApp();

    app.listen(port, () => {
      console.log(`Server is running on port ${port}`);
    });
  } catch (error) {
    console.error("Could not connect to MongoDB", error);
  }
}

startServer();
