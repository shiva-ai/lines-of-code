const { error } = require('console');
const express = require('express')
const mongoose = require('mongoose')
const linesModel = require('./models/linesSchema')
const cors = require('cors')

const app = express()

mongoose.connect('mongodb+srv://saishiva191:Qb0iWMgYlFW5bdaf@cluster0.l6mx4.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0' ,
    {
        useNewUrlParser: true,
        useUnifiedTopology: true,
    }
).then(() => {console.log('Connected to DB');})
.catch((error) => {console.log(error);})

app.use(express.json())
app.use(cors())

app.get('/' , async (req , res) => {
    const lines = await linesModel.find()
    res.send(lines)
})

app.post('/' , async (req , res) => {
    const text = req.body
    const textInfo = new linesModel(text)
    await textInfo.save()

    res.send(textInfo)
})

app.listen(5000 , ()=>console.log("Server is Listening"))



