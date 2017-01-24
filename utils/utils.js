module.exports.add = (a,b) => a + b; /*following lines show older less efficient setup
{
    return a + b;
 };*/


module.exports.asynchAdd = (a, b, callback) => {
    setTimeout(() => {
        callback(a + b);
    }, 1000)
};
 module.exports.square = (x, callback) => {
     setTimeout(() => {
        callback(x * x);
     }, 1000)
 };

 module.exports.setName = (user, fullName) => {
     var names = fullName.split(" ");
     user.firstName = names[0];
     user.lastName = names[1];
     return user; 
 };