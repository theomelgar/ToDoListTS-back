import { Request, Response } from "express";
import { findMany, insertUnique } from "../repositories/jobs.repository.js";
import { Job } from "../protocols/Job.js";
import { JobSchema } from "../schemas/job.schema.js";

async function listaAll(req: Request, res: Response){
    const resultado = await findMany();
    
    return res.send( resultado.rows)
}

async function insert(req: Request, res: Response){
    const newJob = req.body as Job;

    const {error} = JobSchema.validate(newJob);

    if ( error ){
        return res.status(400).send({
            message: error.message
        })
    }

    const resultado = await insertUnique(newJob);

    return res.send(`Job inserted`)
}


export{
    listaAll,
    insert
}