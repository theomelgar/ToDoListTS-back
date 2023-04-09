import { List, ListEntity } from "../protocols/List.js";
import { connection } from "../config/database/database.js";
import { QueryResult } from "pg";

async function findMany(): Promise<QueryResult<ListEntity>> {
    return await connection.query(
        "SELECT * FROM list;"
    )
}


async function findById(id: number): Promise<QueryResult<ListEntity>> {
    return await connection.query(
        "SELECT * FROM list WHERE id = $1;",
        [id]
    )
}

async function insertUnique(list: List): Promise<QueryResult<ListEntity>> {
    return connection.query(`
        INSERT INTO list (thing)
        VALUES ($1);    
    `, [list.thing]);
}

async function update(list: ListEntity): Promise<ListEntity> {
    const now = new Date().getTime();
    const currentDate = new Date(now);

    await connection.query(`
        UPDATE list SET "isDone" = $1, "updatedAt" = $2 WHERE id = $3;
    `, [!list.isDone, currentDate, list.id]);

    // Return the updated ListEntity object
    return {
        id: list.id,
        thing: list.thing,
        isDone: !list.isDone,
        updatedAt: currentDate,
    };
}

async function exclude(id: number): Promise<QueryResult<ListEntity>> {
    return connection.query(`
        DELETE FROM list WHERE id = $1;
   
    `, [id]);
}

export {
    findMany,
    findById,
    insertUnique,
    update,
    exclude,
}