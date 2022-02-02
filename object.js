var dcdIntroduce = {
    name:'Dhananjoy',
    age: 19,
    id: 117486,
    email: "dcd2020@gmail.com"
};
// Object theke property  er value dekhte caile
console.log(dcdIntroduce.age);

// Variable hisabe
var dcdAge = dcdIntroduce.age
console.log(dcdAge);

// reset property value 
dcdIntroduce['age'] = 21;
dcdIntroduce.age = 20;
// as a variable hisabe
var dcdAge = "age"
dcdIntroduce[dcdAge] = 22 ;

console.log(dcdIntroduce);