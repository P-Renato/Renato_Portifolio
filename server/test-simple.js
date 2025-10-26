// server/test-simple.js
import { MongoClient } from "mongodb";
import dotenv from "dotenv";
dotenv.config({ path: "./config.env" });

async function test() {
    console.log("1. Checking environment variable...");
    console.log("ATLAS_URI:", process.env.ATLAS_URI ? "✓ Found" : "✗ Missing");
    
    if (!process.env.ATLAS_URI) {
        console.log("❌ ERROR: ATLAS_URI is missing from config.env");
        return;
    }

    console.log("2. Trying to connect to MongoDB...");
    const client = new MongoClient(process.env.ATLAS_URI);

    try {
        await client.connect();
        console.log("✅ SUCCESS: Connected to MongoDB!");
        
        console.log("3. Testing database access...");
        const database = client.db("portifolio");
        const collections = await database.listCollections().toArray();
        console.log("📁 Collections found:", collections.map(c => c.name));
        
    } catch (error) {
        console.log("❌ ERROR:", error.message);
    } finally {
        await client.close();
        console.log("🔌 Connection closed");
    }
}

test();