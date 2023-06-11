import express from "express";
import colors from "colors";
import dotenv from "dotenv";
import morgan from "morgan";
import connectDB from "./config/db.js";
import authRoutes from "./routes/authRoute.js";
import categoryRoutes from "./routes/categoryRoutes.js";
import productRoutes from "./routes/productRoutes.js";
import cors from "cors";

dotenv.config();

connectDB();

const app = express();

app.use(cors());
app.use(express.json());
app.use(morgan("dev"));

app.use("/api/v1/auth", authRoutes);
app.use("/api/v1/category", categoryRoutes);
app.use("/api/v1/product", productRoutes);

app.get("/", (req, res) => {
  res.send("<h1>Bienvenido a Mirin</h1>");
});

const PORT = process.env.PORT || 4000;

app.listen(PORT, () => {
  console.log(
    `El servidor se esta ejecutandose en modo ${process.env.DEV_MODE} en el puerto ${PORT}`
      .bgCyan.white
  );
});
