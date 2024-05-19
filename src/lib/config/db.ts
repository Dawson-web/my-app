export const ConnectDB = async () => {
  // const mongoose = require("mongoose");
  // const url =
  //   "mongodb+srv://Dawson:3311498Dawson.@my-app.t3efd4t.mongodb.net/my-app";
  // await mongoose.connect(url);
  // console.log("Connected to MongoDB");
  var MongoClient = require("mongodb").MongoClient;
  var uri =
    "mongodb://Dawson:3311498Dawson.@ac-g23nobp-shard-00-00.t3efd4t.mongodb.net:27017,ac-g23nobp-shard-00-01.t3efd4t.mongodb.net:27017,ac-g23nobp-shard-00-02.t3efd4t.mongodb.net:27017/?ssl=true&replicaSet=atlas-v42p3y-shard-0&authSource=admin&retryWrites=true&w=majority&appName=my-app";
  MongoClient.connect(uri, function (err: any, client: any) {
    const collection = client.db("test").collection("devices");
    // perform actions on the collection object
    console.log("Connected to MongoDB");

    client.close();
  });
};
