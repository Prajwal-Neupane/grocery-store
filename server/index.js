import express from "express";
import cors from "cors";

import sequelize from "./config/dbConfig.js";
import userRoutes from "./routes/UserRoute.js";
import productRoutes from "./routes/ProductRoute.js";

const app = express();

// middlewares
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

sequelize
  .authenticate()
  .then(() => console.log("Connected to database"))
  .catch((error) => console.log("Failed to connect", error));

// const connectDB = async () => {
//   mongoose
//     .connect("mongodb://localhost:27017/grocery-store")
//     .then(() => {
//       console.log("MongoDB connected");
//     })
//     .catch((err) => {
//       console.log(err);
//     });
// };
// connectDB();
app.use("/api/user", userRoutes);
app.use("/api/product/", productRoutes);

// running the server in port 3000
app.listen(3001, () => {
  console.log("Server is running on port 3001");
});
