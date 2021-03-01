const http = require('http');
const fs = require('fs');
const hostname ='127.0.01';
const port = 3000;


    const server = http.createServer((req,res) => {
        console.log('outer',req.url)
    if (req.url === '/') {
        console.log('1',req.url)
        fs.readFile('index.html',(err,html) =>{
            if(err){
                throw err;
            }
        res.statusCode=200;
        res.setHeader= ('Content-type','text/html');
        res.write(html);
        //console.log(req.headers['user-agent'])
        res.end();
        
        }) }
    else if (req.url === '/models.js') {
        console.log('2',req.url)
        fs.readFile('models.js', function (err, data) {
            if (err) { throw err; }
            res.writeHead(200, { 'Content-Type': 'text/javascript' });
            res.write(data);
            res.end();
            
            }) }
    else if (req.url === '/main.js') {
        console.log('3',req.url)
        fs.readFile('main.js', function (err, data) {
            if (err) { throw err; }
            res.writeHead(200, { 'Content-Type': 'text/javascript' });
            res.write(data);
            res.end();
            
            }) }
            else {
                console.log("nothing to do");
                res.writeHead(200, { 'Content-Type': 'text/javascript' });
                res.write("");
                res.end();
            }
    });

    server.listen(port,hostname,() => {
        console.log('Server running on port '+ port + '...');
       
    });
//});