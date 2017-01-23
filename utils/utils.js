module.exports.add = (a,b) => a + b; /*following lines show older less efficient setup
{
    return a + b;
 };*/

 module.exports.square = x => x * x;

 module.exports.setName = (user, fullName) => {
     var names = fullName.split(" ");
     user.firstName = names[0];
     user.lastName = names[1];
     return user; 
 };