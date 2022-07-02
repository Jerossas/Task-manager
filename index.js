const server = require('./server');
const router = require('./router');
const controller = require('./controller');

const handle = {
    '/': controller.index
}

server.init(router.route, handle);
