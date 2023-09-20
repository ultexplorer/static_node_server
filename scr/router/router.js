'use strict'
import { routerGet } from "./routerGet.js";
import { routerPost } from "./routerPost.js";

const router = async client => {
    let { req, res } = client;
    if(req.method === 'GET'){
        await routerGet({ req, res });
    }else if(req.method === 'POST'){
        await routerPost({ req, res });
    }
}

export { router }