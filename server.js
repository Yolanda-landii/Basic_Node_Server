const http = require('http');

const server = http.createServer((req, res) => {
    res.setHeader('Content-Type', 'application/json');

    if (req.url === '/' && req.method === 'GET') {
        res.end(JSON.stringify({ message: 'Welcome to the Node.js Server' }));
    } else if (req.url === '/submit' && req.method === 'POST') {
        let body = '';
        req.on('data', chunk => {
            body += chunk.toString();
        });

        req.on('end', () => {
            try {
                const parsedData = JSON.parse(body);
                res.statusCode = 200;
                res.end(JSON.stringify({ message: 'Data received', data: parsedData }));
            } catch (error) {
                res.statusCode = 400;
                res.end(JSON.stringify({ message: 'Invalid JSON input', error: error.message }));
            }
        });
    } else {
        res.statusCode = 404;
        res.end(JSON.stringify({ message: 'Route not found' }));
    }
});

server.listen(3000, () => {
    console.log('Server running at http://localhost:3000/');
});
