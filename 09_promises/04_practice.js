// const promiseOne = new Promise((resolve,reject) => {
//   // after some time this promise will return some data
//   setTimeout(() => {
//     console.log('promise one called');
//     resolve()
//   }, 2000);
// });

// promiseOne.then(() => {
//     console.log('promise completed...');
// })

// console.log();
// ************************************************************************************************************************
  
// const promiseTwo = new Promise((resolve,reject)=>{
//     const error = false
//     setTimeout(() => {
//         if(!error){
//             resolve({username:'shubham',age:'25'})
//         }
//         else{
//             reject('ERROR : Something went wrong')
//         }
//     }, 1000);
// })

// promiseTwo.then((data)=>{
//     console.log("Promise Completed + "+data);
// }).catch((err)=>{
//     console.log("ERROR : "+err);
// })


const fetchUsers = async ()=>{
    try{
        const users = await fetch('https://api.github.com/users/daadestroyer')
        const userData = await users.json()
        console.log(userData);
    }
    catch(error){
        console.log('ERROR : something went wrong');
    }
}
fetchUsers()