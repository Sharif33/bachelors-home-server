import cors from "cors";
import "dotenv/config";
import express, { Application } from "express";
import { dbconnect } from "./app/utils/dbConnect";
const app: Application = express();

//using cors
app.use(cors());

//parse data
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

//db connection
dbconnect();

//import all routes
import houseRoute from "./app/modules/houses/houses.router5";
import userRoute from "./app/modules/users/users.router";
//default route
app.get("/", (req, res) => {
  res.send("Welcome to Bachelors Home server");
});
//custom routes path
app.use("/api/v1", houseRoute);
app.use("/api/v1", userRoute);

export { app };
