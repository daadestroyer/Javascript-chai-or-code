function greetLoggedInUser(username) {
  if (username == undefined) {
    return "please enter username"
  } else {
    return `${username} just logged in`;
  }
}

console.log(greetLoggedInUser("shubham"));
