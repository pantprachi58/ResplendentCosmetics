import { MongoClient, type Db } from "mongodb";

/*
 * Shared MongoDB connection. One client per process (cached on globalThis so dev hot reloads
 * don't open a new pool each time). Also imported by the scripts in scripts/, so no Next-only APIs here.
 */

declare global {
  // eslint-disable-next-line no-var
  var __mongoClientPromise: Promise<MongoClient> | undefined;
}

export class DatabaseNotConfiguredError extends Error {
  constructor() {
    super("MONGODB_URI is not set");
    this.name = "DatabaseNotConfiguredError";
  }
}

export function isDatabaseConfigured() {
  return Boolean(process.env.MONGODB_URI);
}

function clientPromise(): Promise<MongoClient> {
  const uri = process.env.MONGODB_URI;
  if (!uri) throw new DatabaseNotConfiguredError();

  if (!globalThis.__mongoClientPromise) {
    const client = new MongoClient(uri, { serverSelectionTimeoutMS: 5000, appName: "resplendent-web" });
    globalThis.__mongoClientPromise = client.connect().catch((err) => {
      // Don't cache a failed connection; the next request retries.
      globalThis.__mongoClientPromise = undefined;
      throw err;
    });
  }
  return globalThis.__mongoClientPromise;
}

/** The app database: the one named in MONGODB_URI, or MONGODB_DB if set. */
export async function getDb(): Promise<Db> {
  const client = await clientPromise();
  return client.db(process.env.MONGODB_DB || undefined);
}

/** Closes the shared client (for scripts; the app keeps it open). */
export async function closeDb() {
  const promise = globalThis.__mongoClientPromise;
  globalThis.__mongoClientPromise = undefined;
  if (promise) await (await promise).close();
}
