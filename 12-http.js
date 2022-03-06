const http = require('http');

const server = http.createServer((req,res)=>{
    /*
    console.log(req)
    res.write('Welcome to our home page');
    res.end()
    */
   
   if(req.url === '/'){
       res.end('welcome to our home page')
   }
   if(req.url === '/about'){
       res.end('Here is our short history')
   }
   res.end(`
        <h1>Oops!</h1>
        <p>We cant seem to find the page that you're looking for</p>
        <a href="/">Home</a>
        `)
    
})

server.listen(5000)