import { Job, JobEntity } from "../protocols/Job.js";
import { connection } from "../config/database/database.js";
import { QueryResult } from "pg";

async function findMany(): Promise<QueryResult<JobEntity>>{
    return await connection.query(
        "SELECT * FROM jobs;"
    )}

async function insertUnique(job: Job): Promise<QueryResult<JobEntity>>{
    return connection.query(`
        INSERT INTO jobs (title, salary, until)
        VALUES ($1, $2, $3, $4);    
    `, [job.title, job.salary, job.until]);
}

export{
    findMany,
    insertUnique
}