import app from './app.js';
import dotenv from 'dotenv';
dotenv.config();
const PORT = 3000 || process.env.APP_PORT;

//!Encendemos el servicio - prendemos la API
app.listen(PORT,()=>{
    console.log(`Servidor corriendo en: ${PORT}`);
});