import express from "express";
import cors from "cors";
import prediosRutas from "./src/routes/predios.route.js";
const app = express();
app.use(express.json());
app.use(cors());
app.use(express.json()); //!Para que el servidor entienda JSON 
app.use(cors());
//!rutas
app.use("/api",prediosRutas);
export default app;