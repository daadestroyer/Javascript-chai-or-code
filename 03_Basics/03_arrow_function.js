const user = {
  username: "Shubham",
  age: 25,
  welcomeMessage: function() {
    console.log(`${this.username}, welcome to website`);
    console.log(this); // printing the current context
  },
};

user.welcomeMessage();

user.username = "ram";

user.welcomeMessage();

// way - 1 to declare function
const chai = function () {
  console.log("chai is good for healthy life");
};

// way - 2 to declare function [arrow function]
const coffee = () => {
  console.log("coffee pee lo ");
};
chai();
coffee();


// basic arrow function
const addNum = (num1,num2)=>{
    console.log(num1+num2);
}

// implicit return function
const addThree = (num1,num2) => (num1+num2) // this is implicit return, here no need to type return


const returnObj = () => ({username:"shubham"})
addNum(1,2)
addThree(1,2,3)

returnObj()