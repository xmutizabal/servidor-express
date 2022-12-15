const express = require('express')
//const {PUERTO} =require('./config.js')
const app = express();

const {corredores}=require('./corredores.js');


//Routing

app.get('/', (req, res)=>{
	res.send("Hola probando el servidor 11 ..... entonces");
});

app.get('/ranking', (req, res)=>{
	res.send( corredores.listaCorredores[2]);
});

app.get("/api", (req, res) => {
	res.json({ message: "Hola desde el servidor!" });
  });

const PUERTO = process.env.PORT || 3001;

app.listen(PUERTO, ()=>{
	console.log(`El servidor esta escuchando en el puerto ${PUERTO}...`)
});