import express from "express";
import dotenv from "dotenv";
import fs from "fs/promises"; // Utilisation de fs/promises pour utiliser les promesses
import morgan from "morgan";
import connectDB from "./config/database.js";
dotenv.config();

const app = express();

//middlewares
app.use(morgan("dev"));

const port = process.env.PORT || 8000;

connectDB();

// Charger les routes dynamiquement
const loadRoutes = async () => {
  const files = await fs.readdir('./routes');
  files.forEach(async (file) => {
    const route = await import(`./routes/${file}`);
    app.use('/api', route.default); // Assurez-vous d'utiliser .default car les imports ES modules renvoient un module object.
  });
};

loadRoutes();

app.listen(port, () => console.log(`Server is running on port ${port}`));
