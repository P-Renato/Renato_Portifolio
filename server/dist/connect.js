import { MongoClient } from "mongodb";
import dotenv from "dotenv";
dotenv.config({ path: "../config.env" });
export async function main(userData) {
    const Db = process.env.ATLAS_URI;
    if (!Db) {
        throw new Error("ATLAS_URI environment variable is not defined");
    }
    const client = new MongoClient(Db);
    try {
        await client.connect();
        const database = client.db("portifolio");
        const users = database.collection("users");
        const result = await users.insertOne(userData);
        console.log(`New user inserted with ID: ${result.insertedId}`);
        // Type-safe query example
        const foundUsers = await users.find({ username: "test_user" }).toArray();
        console.log("Found users:", foundUsers);
    }
    catch (error) {
        console.error("Error message: ", error);
        throw error;
    }
    finally {
        await client.close();
    }
}
