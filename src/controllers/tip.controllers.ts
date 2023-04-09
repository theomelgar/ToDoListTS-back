import { Request, Response } from "express";

function tip(req: Request, res: Response){

    type Client = {
        name: string,
        price: number
    }
    const client = req.body as Client;
    console.log(client);

    
    res.send({
        name: client.name,
        price: client.price,
        tip: (client.price * 1.1).toFixed(2),
    });
}

export {
    tip,
}