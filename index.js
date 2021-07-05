const http = require('http');
const fs = require('fs')


const hostname = '127.0.0.1';

const port = process.env.PORT || 5000;

const server = http.createServer((req, res) =>{
    let path = './userStories/';
    if(req.url === '/' || req.url === '/home'){
        path = path + 'home.html'
    }else if(req.url === '/contact'){
        path = path + 'contact.html'
    }else if(req.url === '/about' || req.url === '/about-us'){
        path = path + 'about.html'
    }
    else {
        path = path + 'error.html';
    }
   

    
    fs.readFile(path, (err, data)=>{
         

    if(path === './userStories/error.html'){
        res.writeHead(404, {'content-type':'text/html'})
    }else{
        res.writeHead(200, {'content-type':'text/html'})
    }
      
        if(err){
            console.log(err)
            return;
        }
            res.end(data)
    })
    
})

server.listen(port, hostname, () =>{
    console.log(`Server listening on http://${hostname}:${port}`)
})