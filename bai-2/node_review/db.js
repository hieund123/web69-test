const { MongoClient } = require("mongodb");

const db = {};

const connectToDb = () => {
  const client = new MongoClient("mongodb://localhost:27017");
  client.connect(async () => {
    const database = client.db("your_db_name");
    db.inventories = database.collection("inventories");
    db.orders = database.collection("orders");
    db.users = database.collection("users");

    // Import Order data
    const ordersData = [
      { "_id": 1, "item": "almonds", "price": 12, "quantity": 2 },
      { "_id": 2, "item": "pecans", "price": 20, "quantity": 1 },
      { "_id": 3, "item": "pecans", "price": 20, "quantity": 3 },
    ];
    await db.orders.insertMany(ordersData);

    // Import Inventory data
    const inventoryData = [
      { "_id": 1, "sku": "almonds", "description": "product 1", "instock": 120 },
      { "_id": 2, "sku": "bread", "description": "product 2", "instock": 80 },
      { "_id": 3, "sku": "cashews", "description": "product 3", "instock": 60 },
      { "_id": 4, "sku": "pecans", "description": "product 4", "instock": 70 },
    ];
    await db.inventories.insertMany(inventoryData);

    // Import Users data
    const usersData = [
      { "username": "admin", "password": "MindX@2022" },
      { "username": "alice", "password": "MindX@2022" },
    ];
    await db.users.insertMany(usersData);

    console.log("Data imported successfully.");

    // Close the connection
    client.close();
  });
};

module.exports = { connectToDb, db };
