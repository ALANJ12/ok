const express = require('express')
const cors = require('cors')
const dataService=require('./services/dataService')
const app = express()
app.use(express.json())
const jwt=require('jsonwebtoken')
app.listen(3000, () => {
    console.log("listening on 3000");
})
app.use(cors({
    origin:'http://localhost:4200'
}))


const appMiddleware = (req, res, next) => {
    console.log("application software middleware");
    next();
}
app.use(appMiddleware)
//router specific middleware


const jwtMiddleware = (req, res, next) => {
    try {
        console.log('router specific middleware');
        // const token=req.body.token
        const token = req.headers['x-access-token']
        const data = jwt.verify(token, 'superkey2022')
        console.log(data);
        next();
    }
    catch {
        res.status(422).json({
            statusCode: 422,
            status: false,
            message:"please login first"
        })
    }
}

//registration request
app.post('/signin', (req, res) => {
    console.log(req.body);
    dataService.signin(req.body.email, req.body.username, req.body.pswd)
        .then(result => {
            res.status(result.statusCode).json(result);
        })

    // res.send('signin sucessfull')
})




//login request
app.post('/login', (req, res) => {
    console.log(req.body);
    dataService.login(req.body.email, req.body.pswd)
        .then(result => {
            res.status(result.statusCode).json(result);
        })
})

app.get('/all-dishes', (req, res) => {
    dataService.getdishes()
        .then(result =>{
        res.status(result.statusCode).json(result)
    })
})
// app.post('/my', (req, res) => {
//     console.log(req.body);
//     dataService.my(req.body.Name, req.body.Author, req.body.Description)
//         .then(result => {
//             res.status(result.statusCode).json(result);
//         })

//     // res.send('signin sucessfull')
// })
