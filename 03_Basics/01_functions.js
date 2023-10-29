function greetLoggedInUser(username) {
  if (username == undefined) {
    return "please enter username"
  } else {
    return `${username} just logged in`;
  }
}

// console.log(greetLoggedInUser("shubham"));


function calculateCartPrice1(...num1){ // this approach can take any amount of parameters
  return num1
}


function calculateCartPrice2(val1, val2, ...num1){// using this approach means first 2 values are attached in val1 and val2 rest values are store in num1
  // here 100 and 200 are stored in val1 and val2 
  // after 200 means from 300 till 500 are stored in num1
  return num1
}

// console.log(calculateCartPrice2(100,200,300,400,500));



const user = {
  username:"shubham",
  age:25
}

function handleUser(anyObj){
  console.log(`Username is ${anyObj.username} and age is ${anyObj.age}`);
}

handleUser(user)
handleUser({
  username: "nigam",
  age:25
})

const heroes = ["ironman","thor","captain america","hulk"]

function getHeroes(anyHeroes){
  return anyHeroes[3];
}

console.log(getHeroes(heroes));