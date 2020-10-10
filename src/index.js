const app=require("./server");
const express=require("express");
require("./database");
const UsuarioG=require("./schemasUsuG");
const UsuarioT=require("./schemasUsuT");
const gestor=require("./gestor");
//settings
app.listen(5000,()=>{
    console.log("servidor puero 5000");
});
app.set();


//Middlewares
app.use(express.urlencoded({extended:false}));



//Routes

app.get("/",async (req,res)=>{
  
    const user=new UsuarioG({"cedula":"1234", "nombre":"julian", "celular":"123", "departamento":"Cundinamarca", "ciudad":"Madrid", "barrio":"Las quintas","direccion":"Trans 8 B", "estrato":2, "numSalarios":4,"cuartos":3, "bath":1,"miembros":5,"vulnerabilidad":true, "miembrosVulnerables":4,"programaSocial":false});
    const user1=new UsuarioT({"cedula":"1234", "nombre":"julian", "celular":"123", "departamento":"Cundinamarca", "ciudad":"Madrid", "barrio":"Las quintas","direccion":"Trans 8 B", "estrato":2, "numSalarios":2,"cuartos":3, "bath":1,"miembros":5,"vulnerabilidad":true, "miembrosVulnerables":4,"programaSocial":false});
    await user.save();
    await user1.save();
   res.send(gestor.verifUser());

});
