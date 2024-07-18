export const ConnectDB = async () => {
  const mongoose = require("mongoose");
  const uri = process.env.MONGODB_URI;
  await mongoose.connect(uri);
  console.log("Connected to MongoDB");
};
