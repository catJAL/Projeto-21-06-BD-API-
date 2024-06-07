import {} from "dotenv/config.js";
import express from "express";
import cors from "cors";

const app = express();

app.use(express.json());
app.use(cors());

//LEVANTA O SERVIDOR
app.listen(process.env.PORT, function(){
    console.log("Servidor executando na porta 3001");
});