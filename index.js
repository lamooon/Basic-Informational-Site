const http = require('http');
const fs = require('fs');
const path = require('path');

const hostname = '127.0.0.1';
const port = 7000;

const server = http.createServer((req, res) => {
    res.statusCode = 200;


    let page_to_serve = req.url;

    switch(page_to_serve) {

        case '/':
            page_to_serve = "index.html";
            break;
        case '/about':
            page_to_serve = "about.html";
            break;
        case '/contact-me':
            page_to_serve = "contact-me.html";
            break;
        default:
            page_to_serve = "404.html";
            break;
    }

    const filePath = path.join(__dirname, "pages", page_to_serve);

    fs.readFile(filePath, (err, data) => {
        if (err) console.log(err);
        res.writeHead(200, { "Content-Type": "text/html" });
        res.end(data);
    });

});

server.listen(port, hostname, () => {
    console.log(`server running at http://${hostname}:${port}`);
});

