let a = 200

if(true){
    let a = 10
    const b= 20
    // console.log("inner : ", a);
    
}

// console.log(a);
// console.log(b);


function one (){
    const username = "suham"

    function two(){
        const website = "youtube"
        console.log(username);
        
    }
    // console.log(website);
    two()

}

// one()

if (true) {
    const user = "suham"
    if (user === "suham") {
        const website = " youtube"
        // console.log(user + website);
        
        
    }
    // console.log(website);              //can not access inside function
     
}
// console.log(user);         //can not access inside function


// +++++++++++++++  Interesting  ++++++++++++++++

function addone(num){
    return num + 1

}
addone(5)

const addtwo = function(num){
    return num + 2
}

addtwo(6)