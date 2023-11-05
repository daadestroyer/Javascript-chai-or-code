// creation of promise
const promiseOne = new Promise((resolve, reject) => {
  setTimeout(() => {
    console.log("Async task is completed");
    resolve();
  }, 2000);
});

//  resolve is directly connected with then
//  promiseOne.then() ka matlab hai ki jab promiseOne wala function complete hojaega tab uske baad hamara code chalege means then wala code chalega

promiseOne.then(() => {
  console.log("promise consumed");
});

new Promise((resolve, reject) => {
  setTimeout(() => {
    console.log("async task 2");
    resolve();
  }, 2000);
}).then(() => {
  console.log("async task 2 resolved");
});

const promiseThree = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve({ username: "shubham", age: "25" });
  }, 3000);
});

promiseThree.then((user) => {
  console.log(user);
});

const promiseFour = new Promise((resolve, reject) => {
  setTimeout(() => {
    let error = true;
    if (!error) {
      resolve({ username: "ram", age: "25" });
    }
    else{
        reject('ERROR: Something went wrong')
    }
  }, 4000);
});


promiseFour.then((user)=>{
    console.log(user);
}).catch((err)=>{
    console.log(err);
})
