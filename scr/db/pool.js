'use strict'

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

/*
const sql = `SELECT * FROM users`;
(async ()=>{
    try {
        const { rows } = await pool.query(sql);
        console.log(rows);
    }catch(err){
        console.error(err)
    }finally {
        await pool.end();
    }
})();*/

export { pool }
