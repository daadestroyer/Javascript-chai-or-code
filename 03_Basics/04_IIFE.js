

// IIFE means immediatly invoked functions

// function chai(){
//     console.log("DB CONNECTED");
// }
// chai()

/*
 in this approach also we can immediatly invoke function but, here problem
 is that it still take atleast some amount of time to reach line 8 and 
 to call chai function */

/*
hence we have idea for this, where we just need to place full code of function
inside curved brackets which is shown below
*/


(function coffee(name,age){
        console.log("DB CONNECTED 2"+name+" "+age);
})("shubham",25)


// 2nd way


((salary)=>{
        console.log("DB CONNECTED 3 "+salary);
})(200000)


