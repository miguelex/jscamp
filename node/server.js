import { createServer } from 'node:http'
import { json } from 'node:stream/consumers'    
import { randomUUID } from 'node:crypto'
process.loadEnvFile();

const port = process.env.PORT ?? 3000

const users = [
    { id: 1, name: 'Alice' }, 
    { id: 2, name: 'Bob' }
]

function sendJason(res, statusCode, data) {
    res.statusCode = statusCode
    res.setHeader('Content-Type', 'application/json; charset=utf-8')
    res.end(JSON.stringify(data))
}

const server = createServer(async(req, res) => {
    const { method, url } = req
    const [ pathname, queryString ] = url.split('?')

    const searchParams = new URLSearchParams(queryString)

    if (method === 'GET') {
        if (pathname === '/health') {
            return sendJason(res, 200, { status: 'ok', uptime: process.uptime() })
        }
    
        if (pathname === '/users') {

            if (Number.isNaN(parseInt(searchParams.get('limit'))) ||
                Number.isNaN(parseInt(searchParams.get('offset')))) {
                return sendJason(res, 400, { error: 'limit and offset must be numbers' })
            }
            
            const limit = Number(parseInt(searchParams.get('limit'))) || users.length
            const offset = Number(parseInt(searchParams.get('offset'))) || 0

            const paginatedUsers = users.slice(offset, offset + limit)

            return sendJason(res, 200, paginatedUsers)
        }      
    }

    if (method === 'POST' ) {
        if (pathname === '/users') {
            const body = await json(req)

            if (!body || !body.name) {
                return sendJason(res, 400, { error: 'Name is required' })
            }

            const newUser = {
                id: randomUUID(),
                name: body.name
            }

            users.push(newUser)

            return sendJason(res, 201, newUser)
        }
    }


    return sendJason(res, 404, { error: 'Not Found' })
})

server.listen(port, () => {
    console.log(`Server is listening on http://localhost:${port}`)
})

