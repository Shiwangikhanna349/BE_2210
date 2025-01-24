console.log("hi");
// node js is the free js environment which helps to run the code in the server side 
// cjs: common javascript which is the older one in this we will write the required keyword is used to import
// mjs: is the latest syntax of js(module javascript) and this is Es6(ecpascript 6) 
// module is the bunch of code 
// object distructuring is taking only required functions from the module using {} curly braces  and createServer is the function
// library in js is called module

const { createServer } = require('node:http');

const hostname = '127.0.0.1';
const port = 3000;

const server = createServer((req, res) => {
  res.statusCode = 200;
  res.setHeader('Content-Type', 'text/plain');
  res.end('Hello World');
});

server.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
});
