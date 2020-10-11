const app = require("./server");
const express = require("express");
require("./database");
const UsuarioG = require("./Schemas/schemasUsuG");
const UsuarioT = require("./Schemas/schemasUsuT");
const gestor = require("./gestor");
//settings
app.listen(5000, () => {
    console.log("servidor puero 5000");
});
app.set();


//Middlewares
app.use(express.urlencoded({ extended: false }));
app.use(express.json());


//Routes

app.get("/",  (req, res) => {
    
    res.json({"res":"200"});
});
app.get("/createTestUsers",async(req,res)=>{
    const user=new UsuarioG({"cedula":"1234", "nombre":"julian", "celular":"123", "departamento":"Cundinamarca", "ciudad":"Madrid", "barrio":"Las quintas","direccion":"Trans 8 B", "estrato":2, "numSalarios":4,"cuartos":3, "bath":1,"miembros":5,"vulnerabilidad":true, "miembrosVulnerables":4,"programaSocial":false});
    const user1=new UsuarioT({"cedula":"1234", "nombre":"julian", "celular":"123", "departamento":"Cundinamarca", "ciudad":"Madrid", "barrio":"Las quintas","direccion":"Trans 8 B", "estrato":2, "numSalarios":2,"cuartos":3, "bath":1,"miembros":5,"vulnerabilidad":true, "miembrosVulnerables":4,"programaSocial":false});
    await user.save();
    await user1.save();
    res.json({"res":"200"});
});
app.post("/createWorker", (req, res) => {
    var {cedula,nombre,celular,ciudad}=req.body;
    gestor.crearTrabajador(cedula, nombre, celular, ciudad);
    res.json({"res":"200"});
});
app.post("/createVinc",(req,res)=>{
    var {cedulaU,cedulaW}=req.body;
    gestor.crearVinculacion(cedulaU,cedulaW);
    res.json({"res":"200"});
});



