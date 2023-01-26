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
app.post('/my', (req, res) => {
    console.log(req.body);
    dataService.my(req.body.Name, req.body.Description, req.body.Author, req.body.Ingredients, req.body.Method)
        .then(result => {
            res.status(result.statusCode).json(result);
        })
})
app.post('/req', (req, res) => {
    console.log(req.body);
    dataService.req(req.body.dishname, req.body.suggestion, req.body.b)
        .then(result => {
            res.status(result.statusCode).json(result);
        })
})
    

    // res.send('signin sucessfull')})
app.post('/ok', (req, res) => {
    console.log(req.body);
    dataService.ok(req.body.talk,req.body.a)
        .then(result => {
            res.status(result.statusCode).json(result);
        })

    // res.send('signin sucessfull')
})

app.get('/cc', (req, res) => {
    dataService.gettalk()
        .then(result =>{
        res.status(result.statusCode).json(result)
    })
})
app.post('/save', (req, res) => {
    console.log(req.body);
    dataService.save(req.body.FF,req.body.GG,req.body.a)
    .then(result => {
        res.status(result.statusCode).json(result)
    })
})
// app.post('/save', (req, res) => {
//     dataService.save(req.body.Name, req.body.Author, req.body.Description,req.body.FF,)
//         .then((result) => {
//             res.status(result.statusCode).json(result)
//         })
// })
// app.get('/all', (req, res) => {
//     dataService.getm()
//         .then(result => {
//             res.status(result.statusCode).json(result)
//         })
// })
