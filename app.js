const express = require('express')
const {connectToDb, getDb} = require('./db')
const app = express()
const cors = require('cors');
const corsOptions ={
    origin:'http://localhost:8080',
    credentials:true,            //access-control-allow-credentials:true
    optionSuccessStatus:200
}
app.use(cors(corsOptions));


// db connection
let db

connectToDb((err)=>{
    if(!err){
        app.listen(3000, ()=>{
            console.log('app listening on port 3000')
        })
        db = getDb()
    }
})


app.get('/produces',(req, res)=>{

    let produces = []

    db.collection('produces')
    .find() //returns a cursor
    // .sort({ popular: true })
    .forEach(produce => produces.push(produce))
    .then(()=>{
        res.status(200).json(produces)
    })
    .catch(()=>{
        res.status(500).json({error: 'could not fetch the documents'})
    })
})
app.get('/notifications',(req, res)=>{

    let notifications = []

    db.collection('notifications')
    .find() //returns a cursor
    // .sort({ popular: true })
    .forEach(note => notifications.push(note))
    .then(()=>{
        res.status(200).json(notifications)
    })
    .catch(()=>{
        res.status(500).json({error: 'could not fetch the documents'})
    })
})

