const { MongoClient } = require("mongodb");

const db = {};

const connectToDb = async () => {
  const client = new MongoClient("mongodb://localhost:27017");
  try {
    await client.connect();
    const database = client.db("database1");
    db.inventories = database.collection("inventories");
    db.orders = database.collection("orders");
    db.users = database.collection("users");
  } catch (error) {
    console.error(error);
    throw error;
  }
};

module.exports = { connectToDb, db };