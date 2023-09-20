'use strict'

import { post, sendResponse } from "../httpMethods/post.js";

import pg from 'pg';
const { Pool } = pg;

const pool = new Pool({
    host: '192.168.0.10',
    port: 5432,
    database: 'staticdb',
    user: 'postgres',
    password: 'skalea2023',
    max: 10,
    connectionTimeoutMillis: 20000,
    idleTimeoutMillis: 20000,
    allowExitOnIdle: false
});

const controllerOfForm = async (data) => {
    let objOfData = JSON.parse(data);
    /*console.log(objOfData['field-1']);
    console.log(objOfData['field-2']);*/
    const name = objOfData['field-1'];
    const surname = objOfData['field-2'];
    const sql = `INSERT INTO users(name, surname) VALUES ($1, $2)`;

    try{
        await pool.query(sql,[name, surname]);
    }catch(err){
        console.error(err)
    }
}

const routerPost = async client => {
    let { req, res } = client;
    if(req.url === '/form'){
        const data = await post(req, res);
        await controllerOfForm(data);
        console.log(data);
        await sendResponse(res, JSON.stringify({myAnswer:'ok'}));
    }
}

export { routerPost };
