'use strict';

import { pool } from "./scr/db/pool.js";

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
})();