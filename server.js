'use strict';

import http from 'node:http';

const PORT = 8000;
import { router } from "./scr/router/router.js";

http.createServer(async (req, res) => {
    await router({ req, res });
}).listen(PORT);

console.log(`Server running at http://127.0.0.1:${PORT}/`);