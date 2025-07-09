const http = require('http');


const Routes = [];


function get(route, cb) {
    Routes.push({ method: 'GET', path: route, handler: cb });
}
// function post(route, cb) {
//     Routes.push({ method: 'POST', path: route, handler: cb });
// }

const server = http.createServer((req, res) => {
    const found = Routes.find(
        (r) => r.method === req.method && r.path === req.url
    );

    if (found) {
        found.handler(req, res);
    } else {
        res.writeHead(404, { 'Content-Type': 'text/plain' });
        res.end('Route not found');
    }
});


get('/login', (req, res) => {
    res.writeHead(200, { 'Content-Type': 'application/json' });
    res.end(JSON.stringify({ message: 'Login Route Hit!' }));
});
get('/profile', (req, res) => {
    res.writeHead(200, { 'Content-Type': 'application/json' });
    res.end(JSON.stringify({ message: 'profile Route Hit!' }));
});
get('/', (req, res) => {
    res.writeHead(200, { 'Content-Type': 'application/json' });
    res.end(JSON.stringify({ message: '/ Route Hit!' }));
});


// get('/post', (req, res) => {
//     res.writeHead(200, { 'Content-Type': 'application/json' });
//     res.end(JSON.stringify({ message: '/ Route Hit!' }));
// });


server.listen(3000, () => {
    console.log("Server is running on http://localhost:3000");
});
