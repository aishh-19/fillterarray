let numbers = [3,4,5,6,7,8];
console.log("old arr : " , numbers)
let newArr = [];
function filtered(numbers , callback){
    let filteredArr  = numbers.filter((ele)=>{
        return ele % 2 === 1;
    });
    callback(filteredArr);
}
filtered(numbers , function(filtered){
    newArr = filtered;
})
console.log("new arr: " ,newArr);