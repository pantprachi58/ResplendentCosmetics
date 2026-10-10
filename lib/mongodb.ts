import { MongoClient, Db } from "mongodb";

const uri = process.env.MONGODB_URI || "mongodb://localhost:27017/resplendent_cosmetics";
const options = {
  serverSelectionTimeoutMS: 2500,
  connectTimeoutMS: 2500,
};

let client: MongoClient | null = null;
let clientPromise: Promise<MongoClient> | null = null;

declare global {
  // eslint-disable-next-line no-var
  var _mongoClientPromise: Promise<MongoClient> | undefined;
}

export function getClientPromise(): Promise<MongoClient> {
  if (process.env.NODE_ENV === "development") {
    if (!global._mongoClientPromise) {
      client = new MongoClient(uri, options);
      global._mongoClientPromise = client.connect();
    }
    return global._mongoClientPromise;
  } else {
    if (!clientPromise) {
      client = new MongoClient(uri, options);
      clientPromise = client.connect();
    }
    return clientPromise;
  }
}

export async function getDatabase(dbName?: string): Promise<Db | null> {
  try {
    const connectedClient = await getClientPromise();
    return connectedClient.db(dbName);
  } catch (err) {
    console.warn("MongoDB connection unavailable (using fallback JSON store):", (err as Error).message);
    return null;
  }
}

export default getClientPromise;
