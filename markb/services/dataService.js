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

const my = (Name, Description, Author,Ingredients,Method) => {
    return db.dishes.findOne({ Name })
        .then(user => {
            if (user) {
                {
                    return {
                        status: false,
                        statusCode: 400,
                        message: "Use "
                    }
                }
            }
            else {
   
       
                
            
        
                const newdishes = new db.dishes({
                    Name: Name,
                    
                    Description: Description,
                    Author: Author,
                    Ingredients: Ingredients,
                    Method:Method
                })
                
                

                newdishes.save();
                return {
                    status: true,
                    statusCode: 200,
                    message: " sucessfully submitted"
                }
            
            }
        }
           
        )
}
const ok = (talk,a) => {
    return db.chat.findOne({talk})
        .then(user => {
            if (user) {   const aa=   new db.chat({
                talk: talk,
                user:a
            })
               
               
               

               aa.save();
                {
                    return {
                        status: true,
                        statusCode: 200,
                        message: "send "
                    }
                }
            }
            else {
   
       
             const aa=   new db.chat({
                 talk: talk,
                 user:a
             })
                
                
                

                aa.save();
                return {
                    status: true,
                    statusCode: 200,
                    message: " send"
                }
            
            }
        }
           
        )
}
const gettalk = () => {
    return db.chat.find().then(
        (result) => {
            if (result) {
                return {
                    status: true,
                    statusCode: 200,
                    chat:result
                }
            }
            else {
                return {
                    status: false,
                    statusCode: 404,
                    message:"no chat  found"
                    
                }
            }
        }

       
     
 )
}

// const save = (FF,GG) => {
//     return db.favs.findOne({ FF ,GG})
//         .then(user => {
//             if (user) {
//                 const newman = new db.favs({
//                     username: FF,
//                     email:GG
//                 })
                
//                 newman.save();
//                 return {
//                     status: true,
//                     statusCode: 200,
//                     message: " sucessfully submitted"
//                 }
               
//             }
//             else {
//                 {
//                     return {
//                         status: false,
//                         statusCode: 400,
//                         message: "Use "
//                     }
//                 }
   
               
            
//             }
//         }
           
//         )
// }
// const save = (FF, GG, a) => {
   
//     return db.favs.findOne({ FF })
//         .then(user => {
//             if (user ) {
//                 user.recipie1.push({
//                     a
               
                 
//                 })
//                 user.save()
                
                
//                 return {
//                     status: true,
//                     statusCode: 200,
//                     message: "updated"
//                 }
               
          
//             }
          
//             else {
//              new  db.favs({
//                     FF: FF,
//                     recipie1: a
                
//                 })
//                user.save
              
//                 return {
//                     status: 'true',
//                     statusCode: 200,
//                     message: "OK"
//                 }
//             }
//         }
//         )
// }
// const getm = () => {
//     return db.favs.find().then(
//         (result) => {
//             if (result) {
//                 return {
//                     status: true,
//                     statusCode: 200,
//                     dishes:result
//                 }
//             }
//             else {
//                 return {
//                     status: false,
//                     statusCode: 404,
//                     message:"no dishes  found"
                    
//                 }
//             }
//         }

       
     
//  )
// }
  
// }
// const gettransaction = (FF) => {
   
//     return db.User.findOne({ FF })
//       .then(user => {
//         if(user){
//         return {
//           status: 'true',
//           statusCode: 200,
//           transaction: user.transaction
//         }
//         // return this.userdetails[acno]['transaction']
//         }
//         else {
//           return {
//             status: "false",
//             statusCode: 400,
//             message:"user not found"
//           }
//       }})
//     user.save();
//   }
        
        
    
  
  


        
       

    
module.exports = {
    signin,
    login,
    getdishes,
    my,
    ok,
    gettalk
   
 
   
   
}