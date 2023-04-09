import { Request, Response } from "express";

function convertSalary(salary: number): number{
    return salary + (salary * 0.3)
}


function convertCLTToPj(req: Request, res: Response){
    const { salary } = req.query;

    const newSalary = convertSalary(Number(salary ));

    res.send({
        resultado: `O seu salario deve ser pelo menos ${newSalary}`
    })
}

export {
    convertCLTToPj,
}