const http = require('http')
const fs = require('fs')
const qs = require('qs')

const server1 = http.createServer(function (req, res) {
    if (req.method === 'GET') {
        fs.readFile('display.html', function (err, data) {
            res.writeHead(200, {'Content-Type': 'text/html'})
            res.write(data)
            return res.end()
        })
    } else {
        let data = ''
        req.on('data', chunk => {
            data += chunk;
        })
        req.on('end', () => {
            const userInfo = qs.parse(data)
            fs.readFile('todo.html', 'utf8', function (err, info) {
                if (err) {
                    console.log(err)
                }
                info = info.replace('{Sáng}', userInfo.morning)
                info = info.replace('{Trưa}', userInfo.midday)
                info = info.replace('{Tối}', userInfo.night)
                res.writeHead(200, {'Content-Type': 'text/html'})
                res.write(info)
                return res.end()
            })
        })
        req.on('error', () => {
            console.log('error')
        })
    }
})

server1.listen(8080, function () {
    console.log('server running at localhost: 8080')
})