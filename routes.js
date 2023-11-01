const routeHandler = (req, res) => {
    const url = req.url
    const method = req.method
    if (url === '/') {
        res.setHeader('Content-Type', 'text/html')
        res.write(`<html>
        <head>
        <title>First Assignment</title>
        <body>
        <h1>Welcome to my first assignment</h1>
        <form action='/create-user' method='POST'>
        <input type='text' name='username' placeholder='Enter username' />
        <button type='submit'>Create User</button>
        </form>
        </body>
        </head>
        </html>`)
        return res.end();
    } else if (url === '/create-user' && method === 'POST') {
        res.statusCode = 302
        res.setHeader('location', '/users');
        return res.end();
    } else if (url === '/users') {
        res.setHeader('Content-Type', 'text/html');
        res.write(`<html>
            <head>
            <title>Users List</title>
            </head>
            <body>
            <h1>Dummy users</h1>
            <ul>
            <li>Athulya</li>
            <li>Choco</li>
            <li>Achu</li>
            <li>Ginger</li>
            </ul>
            </body>
            </html>`)
        res.end();
    }

}

module.exports = routeHandler;