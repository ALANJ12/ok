const jwt = require('jsonwebtoken');
const db = require('./db')

const signin = (email, username, password) => {
    return db.User.findOne({ email })
        .then(user => {
            if (user) {
                return {
                    status: false,
                    statusCode: 400,
                    message: "User already registered"
                }
            }
            else {
                const newUser = new db.User({
                    email: email,
                    username: username,
                    password: password,
                   
                })
                newUser.save();
                return {
                    status: true,
                    statusCode: 200,
                    message: "register sucessfull"
                }
            }
        })
}
    const login = (email, pswd) => {
        return db.User.findOne({ email, password: pswd })
            .then(user => {
                if (user) {
                    currentUser = user.username
                    currentemail = email
                    const token = jwt.sign({
                        currentemail: email
                    }, 'superkey2022')//to generate token
                    return {
                        status: 'true',
                        statusCode: 200,
                        message: "login sucessfull",
                        token: token,
                        currentUser: currentUser,
                        currentemail: currentemail
                    }
            
                }
                else {
                    return {
                        status: 'false',
                        statusCode: 400,
                        message: "invalid userdetails"
                    }
                }
            })
    }
    const getdishes = () => {
        return db.dishes.find().then(
            (result) => {
                if (result) {
                    return {
                        status: true,
                        statusCode: 200,
                        dishes:result
                    }
                }
                else {
                    return {
                        status: false,
                        statusCode: 404,
                        message:"no dishes  found"
                        
                    }
                }
            }
    
           
         
     )
}

// const my = (Name, Description, Author) => {
//     return db.dishes.findOne({ Name })
//         .then(user => {
//             if (user) {
//                 {
//                     return {
//                         status: false,
//                         statusCode: 400,
//                         message: "Use "
//                     }
//                 }
//             }
//             else {
   
       
                
            
        
//                 const newdishes = new db.dishes({
//                     Name: Name,
//                     Author: Author,
//                     Description: Description,
//                 })
                
                

//                 newdishes.save();
//                 return {
//                     status: true,
//                     statusCode: 200,
//                     message: " sucessfull"
//                 }
            
//             }
//         }
           
//         )
// }


        
       

    
module.exports = {
    signin,
    login,
    getdishes,
    
   
   
}