//Immediately Invoked Function Execution

(function chai(){
    // Named IIFE
console.log(`DB Connected`);
})();

( () => {
    console.log(`DB Connected Two`);
    
})();

( function aurcode() {
    console.log(`DB Connected Three `);
    
})();

( (name) => {
    console.log(`DB Connected Two ${name}`);
    
})("suham");

