import mongoose from "mongoose";

const connectDB = async () => {
  try {
    if (mongoose.connection.readyState === 0) {
      await mongoose.connect(process.env.MONGODB_CONNECTION_STRING as string);
      console.log("Mongoose connected");
    }
  } catch (err) {
    console.error(`Mongoose connection error: ${err}`);
  }
};

export default connectDB;
