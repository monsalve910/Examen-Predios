import { Router } from "express";
import * as PrediosCtr from "../controllers/predios.controller.js";
const router = Router();
router.get("/predios/listartodos",PrediosCtr.getPredios);
router.get("/predios/listarporid/:id",PrediosCtr.getPredioById);
router.post("/predios/crear",PrediosCtr.createPredios);
router.delete("/predios/borrarporid/:id",PrediosCtr.deletePredioById);
router.put("/predios/editar/:id",PrediosCtr.updatePredios);



export default router;