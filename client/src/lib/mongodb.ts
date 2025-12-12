import { MongoClient } from "mongodb";

const uri = process.env.MONGODB_URI;
if (!uri) throw new Error("❌ Missing MONGODB_URI environment variable");

const dbName = "portfolio";

// Extend Node's global type to include cached Mongo client
declare global {
  // eslint-disable-next-line no-var
  var _mongoClientPromise: Promise<MongoClient> | undefined;
}

// Create a local constant clientPromise
const clientPromise: Promise<MongoClient> =
  global._mongoClientPromise ??
  (async () => {
    const client = new MongoClient(uri);
    const connectedClient = await client.connect();
    global._mongoClientPromise = connectedClient.connect(); // cached promise
    return connectedClient;
  })();

export async function connectToDB() {
  const client = await clientPromise;
  return {
    client,
    db: client.db(dbName),
  };
}
