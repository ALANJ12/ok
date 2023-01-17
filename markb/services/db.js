
var mongoose = require('mongoose');
mongoose.connect('mongodb://localhost:27017/a', {
    useNewUrlParser: true
});

 





const User = mongoose.model('User',
{
    email:String,
    username: String,
    password: String,
   
    });
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


module.exports = {
    User,
    dishes
    
}
