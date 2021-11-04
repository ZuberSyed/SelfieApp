const { time } = require('console')
const { response, request } = require('express')
const express = require('express')
const app = express()
const Datastore = require('nedb')
app.listen(5000,() =>{console.log('Listening at port 5000')})
app.use(express.static('public'))
app.use(express.json({limit:'1mb'}))

const  db = new Datastore('database.db')
db.loadDatabase()
app.post('/api', (request, response) => {
    console.log('I have got data')
    const data = request.body
    const times = Date.now()
    data.timestamp = times
    const date = new Date()
    const min = date.getMinutes()
    data.minutes = min
    db.insert(data)
    response.json(data)
})
app.get('/api',(request,response) => {
    db.find({}, (err,docs) =>{
        if(err){
             response.end()
            return
        }
        response.json(docs)
    })
})