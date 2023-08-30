import mongoose from "mongoose";

const { URI } = process.env;

const dbconnect = async (): Promise<void> => {
  try {
    if (!URI) {
      throw new Error("URI is not defined");
    }
    await mongoose.connect(URI).then(() => console.log("Database connected"));
  } catch (err: any) {
    console.error(err.message);
  }
};

export { dbconnect };
