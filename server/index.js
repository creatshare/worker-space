const e = require('express')
const app = e.Router()

const workerSpace = e()

const user = require('./user')

workerSpace.use('/workerSpace', app)

// app.use(e.bodyParser())

app.use('/user', user)

app.use(({data = [], success = true, msg = ''}, res) => {
    res.send(JSON.stringify({
        data,
        success,
        msg
    }))
})

workerSpace.listen(3001, () => {
    console.log('success')
})