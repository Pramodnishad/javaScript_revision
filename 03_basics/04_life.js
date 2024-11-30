// Immediately Invoked function Expressions   EIFE


(function one(){
    console.log(`DB CONNECTED`)
})();

(()=>{
    console.log(`DB CONNECTED SECOND`)
})();
( data = (userName) => {
    console.log(`DB CONNECTED SECOND ${userName}`)
})('Pramod')