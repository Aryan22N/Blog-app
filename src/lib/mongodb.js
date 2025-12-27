// Connects your app to MongoDB

import { MongoClient } from "mongodb";

const uri = process.env.MONGODB_URI;

if (!uri) {
  throw new Error(" MONGODB_URI is missing");
}

let client;
let clientPromise;

if (process.env.NODE_ENV === "development") {
  // reuse connection during hot reloads
  //ye global node mai use hota hai and is similar to windowa in browser
  if (!global._mongoClientPromise) {
    client = new MongoClient(uri);
    global._mongoClientPromise = client.connect();
  } // If dev: reuse MongoDB connection
  clientPromise = global._mongoClientPromise;
} else {
  //  new connection for production
  client = new MongoClient(uri);
  clientPromise = client.connect();
} // If prod: create MongoDB connection once

export default clientPromise;
