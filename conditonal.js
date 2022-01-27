// Trafiq signal ----------------------

var danger = 'red';
var notSafe = 'yellow';
var safe = 'green' ;
signal = notSafe;
 if(signal == danger){
     console.log( 'wait and see cz it is danger signal');
 }
 else if ( signal == notSafe){
     console.log('yellow signal but it is not suitable time to movement');
 }
 else{
     console.log('wow! green signal, you can cross the road');
 }
// ---------------------result--------------
var result = 55;

if (result>=90 && result<=100){
    console.log("grad A+");
}
else if (result>=80&&result<90 ){
    console.log("grad A");
}
else if (result>=70&&result<80){
    console.log("grad B");
}
else if (result>=60&&result<70){
    console.log("grad C");
}
else if (result>=50&&result<60){
    console.log("grad D");
}

else if (result<50 && result>=0 ){
    console.log("grad F ");
}
else {
    console.log("Your Input Data is invalid");
}

console.log(6>=6)