import { Request, Response } from "express";
import { exclude, findById, findMany, insertUnique, update } from "../repositories/list.repository.js";
import { List } from "../protocols/List.js";
import { ListSchema } from "../schemas/list.schema.js";

async function listaAll(_req: Request, res: Response){
    const resultado = await findMany();
    
    return res.send( resultado.rows)
}

async function insert(req: Request, res: Response){
    const newList = req.body as List;

    const {error} = ListSchema.validate(newList);

    if ( error ){
        return res.status(400).send({
            message: error.message
        })
    }

    await insertUnique(newList);

    return res.send(`thing inserted`)
}

async function done(req: Request, res: Response) {
    const { id } = req.body;
  
    const { rows } = await findById(id);
  
    if (rows.length === 0) {
      return res.status(404).json({
        error: 'Thing not found',
      });
    }
  
    const thing = rows[0];
  
    await update(thing);
  
    return res.json({
      message: 'Thing updated',
    });
  }
  
  async function deleteThing(req: Request, res: Response) {
    const { id } = req.body;
  
    const { rows } = await findById(id);
  
    if (rows.length === 0) {
      return res.status(404).json({
        error: 'Thing not found',
      });
    }
    
    await exclude(id);
  
    return res.json({
      message: 'Thing deleted',
    });
  }
export{
    listaAll,
    insert,
    done,
    deleteThing
}