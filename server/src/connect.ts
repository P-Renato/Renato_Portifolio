import { MongoClient } from "mongodb";
import dotenv from "dotenv";

dotenv.config({ path: "./config.env" });

export interface User {
  username: string;
  email: string;
  message: string;
  createdAt: Date;
}

export async function main(userData: User): Promise<void> {
  const Db = process.env.ATLAS_URI;
  
  if (!Db) {
    throw new Error("ATLAS_URI environment variable is not defined");
  }
  
  // SIMPLIFIED - remove conflicting TLS options
  const client = new MongoClient(Db, {
    serverSelectionTimeoutMS: 10000,
    socketTimeoutMS: 45000,
  });

  try {
    await client.connect();
    console.log("✅ Connected to MongoDB successfully");
    
    const database = client.db("portifolio");
    const users = database.collection<User>("users");
    
    const result = await users.insertOne(userData);
    console.log(`✅ New message inserted with ID: ${result.insertedId}`);
    
  } catch (error) {
    console.error("❌ MongoDB error:", error);
    throw error;
  } finally {
    await client.close();
  }
}