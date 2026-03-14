
import { db } from "./bd_datos.js";

export const PrediosModel = {

    findALL:async()=>{
        const sql = "SELECT * FROM predios_cartago";
        const [rows] = await db.query(sql);
        return rows;

    },
    findById:async(id)=>{
        const sql = "SELECT * FROM predios_cartago WHERE identificacion = ?";
        const [rows] = await db.query(sql,[id]);
        return rows;
    },
    delete:async(id)=>{
        const sql = "DELETE FROM predios_cartago WHERE identificacion = ?";
        const [rows] = await db.query(sql,[id]);
        return rows;
    },
    create:async(data)=>{
        const sql = "INSERT INTO predios_cartago SET ?";
        const [rows] = await db.query(sql,[data]);
        return rows;
    },
    update:async(id,data)=>{
        const sql = "UPDATE predios_cartago SET ? WHERE identificacion = ?";
        //!almacenamos la respuesta en un arreglo
        const [rows] = await db.query(sql,[data,id]);
        return rows;
    },


};