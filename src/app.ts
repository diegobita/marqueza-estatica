import http from 'http';
import fs from 'fs';
import { envs } from './config/envs';

const server = http.createServer((req, res) => {
    //console.log(req.url);

    if(req.url === '/'){
        const htmlFile = fs.readFileSync(`./${envs.PUBLIC_PATH}/index.html`, 'utf-8');
        res.writeHead(200, {'Content-Type': 'text/html'});
        res.end(htmlFile);
        return
    }
    if(req.url?.endsWith('.js')){
        res.writeHead(200, {'Content-Type': 'application/javascript'});
    }
    else if(req.url?.endsWith('.css')){
        res.writeHead(200, {'Content-Type': 'text/css'});
    }
    else if(req.url?.endsWith('.png')){
        res.writeHead(200, {'Content-Type': 'image/png'});
    }
    else if(req.url?.endsWith('.ico')){
        res.writeHead(200, {'Content-Type': 'image/x-icon'});
    }
    const content = fs.readFileSync(`./${envs.PUBLIC_PATH}${req.url}`);
    res.end(content);
});

server.listen(8080, () => {
    console.log("server in 8080");
});
