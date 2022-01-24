let http = require("http");
http.createServer( function (req,res){
    res.writeHead(200, 
        {
            'Content-type':'text/html'});
            res.end("Hello From my new Node server");
        }        
).listen(8080);