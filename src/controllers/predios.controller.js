
import { PrediosModel } from "../models/predios.model.js";

export const getPredios = async(req,res)=>{
//!codigo protegido con try-catch
try {
    const result = await PrediosModel.findALL();
    res.json({result});
} catch (error) {
    res.status(500).json({error: "error al listar los predios"});
}

};
//!Buscar predio por el parametro ID
export const getPredioById = async(req,res)=>{
//!codigo protegido con try-catch
try {
    const result = await PrediosModel.findById(req.params.id);
    res.json({result});
} catch (error) {
    res.status(500).json({error: "error al buscar el predio"});
}

};
//!insertar un registro
export const createPredios = async(req,res)=>{
//!codigo protegido con try-catch
const data = {
            "identificacion": req.body.identificacion,
            "descripcion": req.body.descripcion,
            "area": req.body.area,
            "direccion": req.body.direccion,
            "status": req.body.status,
            "foto": req.body.foto,
            "observaciones": req.body.observaciones,
            "avaluo": req.body.avaluo
    
};
try {
    const result = await PrediosModel.create(data);
    res.json({result});
} catch (error) {
    res.status(500).json({error: "error al registrar el ciudadano"});
}
};
export const deletePredioById = async(req,res)=>{
try {
    const result = await PrediosModel.delete(req.params.id);
    res.json({result});
} catch (error) {
    res.status(500).json({error: "error al eliminar el predio"});
}
};
export const updatePredios = async(req,res)=>{
const data = {
            "identificacion": req.body.identificacion,
            "descripcion": req.body.descripcion,
            "area": req.body.area,
            "direccion": req.body.direccion,
            "status": req.body.status,
            "foto": req.body.foto,
            "observaciones": req.body.observaciones,
            "avaluo": req.body.avaluo
    
};
try {
    const result = await PrediosModel.update(req.params.id,data);
    res.json({result});
} catch (error) {
    res.status(500).json({error: "error al registrar el predio"});
}
};
