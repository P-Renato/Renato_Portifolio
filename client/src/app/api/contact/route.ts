import { NextRequest, NextResponse } from "next/server";
import { MongoClient } from "mongodb";
import axios from "axios";

const uri = process.env.MONGODB_URI;
if (!uri) throw new Error("❌ Missing MONGODB_URI environment variable");

const client = new MongoClient(uri);
const dbName = "portfolio";

export async function POST(req: NextRequest) {
  const body = await req.json();
  const { username, email, userMessage } = body;

  if (!username || !email || !userMessage) {
    return NextResponse.json(
      { success: false, error: "Missing required fields" },
      { status: 400 }
    );
  }

  try {
    await client.connect();
    const db = client.db(dbName);
    const collection = db.collection("messages");

    const newMessage = {
      username: username.trim(),
      email: email.trim(),
      message: userMessage.trim(),
      createdAt: new Date(),
    };

    await collection.insertOne(newMessage);

    if (process.env.ZAPIER_WEBHOOK_URL) {
    try {
        await axios.post(process.env.ZAPIER_WEBHOOK_URL, {
            username: newMessage.username,
            email: newMessage.email,   // <-- this will be used in Gmail "To" field
            message: newMessage.message,
            createdAt: newMessage.createdAt
        });
        console.log("✅ Zapier notified successfully");
    } catch (zapierErr) {
        console.error("❌ Failed to send data to Zapier:", zapierErr);
    }
    } else {
    console.log("⚠️ No ZAPIER_WEBHOOK_URL found — skipping Zapier notification.");
    }


    return NextResponse.json({ success: true, message: "Message saved successfully" });
  } catch (err) {
    console.error(err);
    return NextResponse.json({ success: false, error: (err as Error).message }, { status: 500 });
  } finally {
    await client.close();
  }
}
