import mongoose from "mongoose";

export const connectMongoose = async () => {
  try {
    const connection = {};
    if (connection.connect) return;
    const db = await mongoose.connect("mongodb://localhost/blog");
    connection.connect = db.connections[0].readyState
    console.log('connect to mongodb');
  } catch (err) {
    return { err: err.message };
  }
};
