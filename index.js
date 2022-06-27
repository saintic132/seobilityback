import express from 'express'
import cors from 'cors'
import bodyParser from 'body-parser'

const PORT = process.env.PORT || 5005;
const app = express()

app.use(express.json())
app.use(cors())
app.use(bodyParser.json())

const validate = (req, res, next) => {
    const {name, email, phone, birthday, message} = req.body;
    if (!(name && email && phone && birthday && message)) {
        res.status(400).json({
            status: 'error',
            message: 'First and Last name, email, phone, birthday and message cannot be empty'
        })
    }
    next()
}

app.get('/', (req, res) => {
    res.status(200).json({
        status: 'success',
        message: 'Success data load'
    });
});

app.post('/', validate, (req, res) => {
    res.status(200).json({
        status: 'success',
        message: 'Success data send'
    });
});

app.listen(PORT, () => console.log('SERVER START AT PORT ' + PORT))