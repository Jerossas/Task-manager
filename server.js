const http = require('http');
const url = require('url');
const port = 8000;

const init = (route, handle) => {
    http.createServer((req, res) => {
        const pathname = url.parse(req.url).pathname;
        console.log(`[Incoming request to [${pathname}]]`);
        console.log(`[Calling the router]`)

        route(pathname, handle, res);
    }).listen(port);
}

console.log('[OK][Server started]');
console.log(`[OK][Server listening on port ${port}]`);
console.log('-------------------------------------\n');

exports.init = init;