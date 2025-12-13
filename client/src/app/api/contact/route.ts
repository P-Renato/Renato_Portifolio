import { NextRequest, NextResponse } from "next/server";
import { MongoClient } from "mongodb";
import axios from "axios";

// MongoDB connection
const uri = process.env.MONGODB_URI;
if (!uri) throw new Error("❌ Missing MONGODB_URI environment variable");

const client = new MongoClient(uri);
const dbName = "portfolio";
let cachedClient: MongoClient | null = null;

// Connect once per deployment
async function connectToDB() {
  if (cachedClient) return cachedClient;
  await client.connect();
  cachedClient = client;
  return client;
}

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();

    const { username, email, userMessage } = body;

    if (!username || !email || !userMessage) {
      return NextResponse.json(
        { success: false, error: "Missing required fields" },
        { status: 400 }
      );
    }

    const newMessage = {
      username: username.trim(),
      email: email.trim(),
      message: userMessage.trim(),
      createdAt: new Date(),
    };

    // Save to MongoDB
    const client = await connectToDB();
    const db = client.db(dbName);
    const collection = db.collection("messages");
    await collection.insertOne(newMessage);

    // Send to Zapier
    if (process.env.ZAPIER_WEBHOOK_URL) {
      try {
        await axios.post(process.env.ZAPIER_WEBHOOK_URL, newMessage);
        console.log("✅ Zapier notified successfully");
      } catch (zapierErr) {
        console.error("❌ Zapier webhook failed:", zapierErr);
      }
    }

    return NextResponse.json({ success: true, message: "Message saved successfully" });
  } catch (err) {
    console.error("❌ Error in /api/contact:", (err as Error).message);
    return NextResponse.json(
      { success: false, error: (err as Error).message },
      { status: 500 }
    );
  }
}
