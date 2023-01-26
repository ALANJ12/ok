
var mongoose = require('mongoose');
mongoose.connect('mongodb://localhost:27017/a', {
    useNewUrlParser: true
});

const chat = mongoose.model('chat', {
    talk: String,
    user:String
}) 





const User = mongoose.model('User',
{
    email:String,
    username: String,
    password: String,
   
    });
const request = mongoose.model('request', {
    dishname: String,
    suggestion: String,
    user:String
})


        

const dishes = mongoose.model('dishes', {
    
Name:String,
url:String,
Description:String,
Author:String,


Ingredients: [
    0, String,
    1,String,
],

Method: [
    0, String,
    1,String,
]
// Method:String
})
const favs = mongoose.model('favs',
    {
        FF: String,
        recipie1:[]
    
    
   
   
   
    });



module.exports = {
    User,
    dishes,
    chat,
    request,
    favs
  
    
    
}
