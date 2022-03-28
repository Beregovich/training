const http = require('http');
const fs = require('fs');
var path = require('path');

let requestsCounter = 0;
let ourResponse = '';

const server = http.createServer((request, response) => {
    let myIcon;
    /*let setFavicon = (req, res) => {

       res.writeHead(200, {'Content-Type': 'image/x-icon'});
        fs.readFileSync(`F:\\MANIA\\Programming\\JS_studing\\simpleFun\\favicon.ico`,
            (err, iconFile) => {
                res.writeHead(200, {'Content-Length': res.length});
                res.end(iconFile);
            });
    }*/
    // 'F:\\MANIA\\Programming\\JS_studing\\simpleFun\\favicon.png'


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
            fs.readFileSync('favicon.ico',
                (err, iconFile) => {
                    response.setHeader('Content-Type', 'image/x-icon');
                    response.setHeader('Content-Length', iconFile.length);
                    response.setHeader('Cache-Control', "public, max-age=2592000");
                    myIcon = iconFile;
                });
            break;
        default:
            ourResponse = '404 not \n';
    }
    //response.writeHead(200, {'Content-Type': 'image/x-icon'});
    response.write(`${ourResponse} counter: ${requestsCounter}\n`);
    response.end(myIcon);
});
server.listen(3003);