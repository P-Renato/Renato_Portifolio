
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
  
  const client = new MongoClient(Db, {
    tlsAllowInvalidCertificates: false, // Change to false for security
    serverSelectionTimeoutMS: 10000, // 10 second timeout
    socketTimeoutMS: 45000, // 45 second socket timeout
  });

  try {
    await client.connect();
    console.log("✅ Connected to MongoDB successfully");
    
    const database = client.db("portifolio");
    const users = database.collection<User>("users");
    
    
    const result = await users.insertOne(userData);
    console.log(`New user inserted with ID: ${result.insertedId}`);
    
    // Type-safe query example
    const foundUsers = await users.find({ username: "test_user" }).toArray();
    console.log("Found users:", foundUsers);
    
  } catch (error) {
    console.error("Error message: ", error);
    throw error;
  } finally {
    await client.close();
  }
}