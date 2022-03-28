const http = require('http');
const fs = require('fs');

let requestsCounter = 0;
let ourResponse = '';
//`F:\\MANIA\\Programming\\JS_studing\\simpleFun\\favicon.ico`
const server = http.createServer((request, response) => {
    switch (request.url) {
        case '/site':
            ourResponse = 'IT-INCUBATOR.BY\n';
            requestsCounter++;
            break;
        case '/':
            ourResponse = 'Nothing\n';
            requestsCounter++;
            break;
        case '/course':
            ourResponse = 'Learning BackEnd\n';
            requestsCounter++;
            break;
        case '/favicon.ico':
            response.writeHead(200, {'Content-Type': 'image/x-icon'});
            fs.readFileSync('favicon.ico',
                (err, iconFile) => {
                    if (!err) {
                        response.end(iconFile);
                    } else {
                        console.log(err);
                    }
                });
            break;
        default:
            ourResponse = '404 not \n';
    }
    response.write(`${ourResponse} counter: ${requestsCounter}\n`);
    response.end();
});
server.listen(3003);