export const ConnectDB = async () => {
  const mongoose = require("mongoose");
  const url =
    "mongodb+srv://Dawson:3311498Dawson.@my-app.t3efd4t.mongodb.net/my-app";
  await mongoose.connect(url);
  console.log("Connected to MongoDB");
};
