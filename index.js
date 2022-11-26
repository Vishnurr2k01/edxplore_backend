const express = require('express');
const app = express();
const userRouter = require('./routes/user');
const initialRouter = require('./routes/initial');
const resourceRouter = require('./routes/resources')
const bookmarkRouter = require('./routes/bookmarks')

const bodyParser = require('body-parser');

app.use(bodyParser.urlencoded({ extended: false }))

app.use(bodyParser.json())

const db = require('./db/connect');


app.use('/user', userRouter);
app.use('/init',initialRouter)
app.use('/res',resourceRouter)
app.use('/bookmark',bookmarkRouter)

const port = 5000;

const start = async () => {
    try {
        await db.connect()
        app.listen(port, () => {
            console.log(`Server is listening on port ${port}...`)
        })
    } catch (error) {
        console.log(error)
    }
}

start()



// 876609046
