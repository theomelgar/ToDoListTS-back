import express, { json, Request, Response } from "express";
import { convertCLTToPj } from "./controllers/calculator.controllers.js";
import { tip } from "./controllers/tip.controllers.js";
import { deleteThing, done, insert, listaAll } from "./controllers/list.controllers.js";

const server = express();

server.use(json())

server.post('/health', (req: Request, res: Response) =>{
    
    res.send('ok')
})

server.get('/calculator', convertCLTToPj)
server.post('/tip', tip)
//CRUD de ToDoList
server.get('/', listaAll)
server.post('/', insert)
server.put('/', done)
server.delete('/', deleteThing)

server.listen(4000, ()=>{
    console.log('Rodando')
})