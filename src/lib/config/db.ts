export const ConnectDB = async () => {
  const mongoose = require("mongoose");
  const url = process.env.MONGODB_URI;
  await mongoose.connect(url);
  console.log("Connected to MongoDB");
};
