const fs = require('fs');

const index = (res) => {
    console.log('[OK][The [index] endpoint has been called]');
    console.log('---------------------------------------\n')

    res.writeHead(200, {'Content-Type':'text/html'});
    fs.createReadStream('index.html').pipe(res);
}

exports.index = index;