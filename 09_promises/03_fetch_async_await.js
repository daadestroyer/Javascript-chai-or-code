// const getAllUsers = async () => {
//    try {
//     const resp = await fetch('https://api.github.com/users/daadestroyer');
     
//     const data = await resp.json() // resp.json() takes some time so we need to wait
//     console.log(data);
//    } catch (error) {
//     console.log('ERROR : '+error);
//    }
// }
// getAllUsers()


    fetch('https://api.github.com/users/daadestroyer')
    .then((resp)=>{
        const data = resp.json()
            console.log(data);
    }).catch((error)=>{
            console.log("ERROR : "+error);
    })
