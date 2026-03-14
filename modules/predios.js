
import express from "express";
import { cnx } from "./bd_datos.js";

export const predios = express();

predios.get("/predios/listartodos",(req,res)=>{
    let sql = "SELECT * FROM predios_cartago";

    cnx.query(sql,(err,results,fields)=>{
        // console.log(err)
        // console.log(results)
        // console.log(fields)
        res.send({results});
    });
});

predios.get("/predios/listarporid/:id",(req,res)=>{
    let id = req.params.id;
    let sql = "SELECT * FROM predios_cartago WHERE identificacion=?";
    cnx.query(sql,[id],(err,results,fields)=>{
        res.status(200).send({results});
    });
});

predios.delete("/predios/borrarporid/:id",(req,res)=>{
    let id = req.params.id;
    let sql = "DELETE FROM predios_cartago WHERE identificacion=?";
    cnx.query(sql,[id],(err,results,fields)=>{
        res.status(200).send({results});
    });
});
predios.post("/predios/crear",(req,res)=>{
    //!recibimos los parametros enviados en la consulta - payload - body de la consulta en un objeto JS 
    let datosFormularios = {
        identificacion:req.body.identificacion,
        descripcion:req.body.descripcion,
        area:req.body.area,
        direccion:req.body.direccion,
        status:req.body.status,
        foto:req.body.foto,
        observaciones:req.body.observaciones,
        avaluo:req.body.avaluo
    };
    let sql = "INSERT INTO predios_cartago SET ?";
    //!ejecutar la consulta en la base de datos
    cnx.query(sql,[datosFormularios],(err,results,fields)=>{
        res.status(200).send({results});
    });
});

predios.put("/predios/editar/:id",(req,res)=>{
    //!recibimos los parametros enviados en la consulta - payload - body de la consulta en un objeto JS 
    let id = req.params.id;
    let datosFormularios = {
        identificacion:req.body.identificacion,
        descripcion:req.body.descripcion,
        area:req.body.area,
        direccion:req.body.direccion,
        status:req.body.status,
        foto:req.body.foto,
        observaciones:req.body.observaciones,
        avaluo:req.body.avaluo
    };
    let sql = "UPDATE predios_cartago SET ? WHERE identificacion = ?";
    cnx.query(sql,[datosFormularios,id],(err,results,fields)=>{
        res.status(200).send({results});
    });
});