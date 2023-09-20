'use strict'
import { MIME_TYPES } from "../mimeTypes.js";
import {prepareFile} from "../f_static/prepareFile.js";

const routerGet = async (client) => {
    let { req, res } = client;
    const file = await prepareFile(req.url);
    const statusCode = file.found ? 200 : 404;
    const mimeType = MIME_TYPES[file.ext] || MIME_TYPES.default;
    res.writeHead(statusCode, { 'Content-Type': mimeType });
    file.stream.pipe(res);
    console.log(`${req.method} ${req.url} ${statusCode}`);
}

export { routerGet }