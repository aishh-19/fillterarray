function userData (userID , Callback){
let obj = {
    name : "xyz",
    ID : 45 ,
    email : "ashishsinghnegi@gmail.com",
}
setTimeout(() => {
    Callback(obj.name , obj.ID , obj.email);
}, 2000);
}
function displayUserData(name , ID , email){
console.log(email);
}
let userID = "someuserID"
userData(userID , displayUserData);