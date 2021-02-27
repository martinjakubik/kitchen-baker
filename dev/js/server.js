import http from 'http';
import fs from 'fs';

let nPort = 2701;

let respondToBrowserRequest = function (request, response) {

    let sPath = 'app/html/index.html';
    
    let sContentType = 'text/html';
    
    let oHeaders =  {
       'Content-Type': sContentType
    };
    
    response.writeHead(200, oHeaders);
    
    let oFileStream = fs.createReadStream(sPath);
    oFileStream.pipe(response);

};

let server = http.createServer(respondToBrowserRequest);
server.listen(nPort);

console.log('listening on port ' + nPort);
