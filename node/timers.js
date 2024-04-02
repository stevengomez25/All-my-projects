// setInterval(()=>{
//     console.log("Hello ma nigga");
// },200);

console.log(__filename);
console.log(__dirname);

setTimeout(()=>{
    console.log("Hello ma boy")
},1000)

let sum=function(num1,num2){
    console.log(num1+num2);
}

sum(3,4);

let rest=(num1,num2)=>{
    console.log(num1-num2);
}

rest(3,4);

let multiplier = (num1,num2)=>{
    console.log(num1*num2);
}

module.exports ={
    sum,
    rest,
    multiplier
}
