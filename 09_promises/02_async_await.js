const promiseFour = new Promise((resolve, reject) => {
    setTimeout(() => {
      let error = true;
      if (!error) {
        resolve({ username: "ram", age: "25" });
      }
      else{
          reject('ERROR: Something went wrong')
      }
    }, 1000);
  });

const consumePromiseFive = async () => {
    try {
    // consumePromiseFive function is waiting for promiseFour to call promiseFour where as promiseFour function made promise with
    // consumePromiseFive that it will return a response
    const resp = await promiseFour
    console.log(resp);    
    } catch (error) {
        console.log(error);
    }
    
};


consumePromiseFive()