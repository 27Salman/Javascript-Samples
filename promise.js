function fakeApi(name,delay,shouldFail = false){
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            if(shouldFail){
                reject(`${name} fails`);
            }else{
                resolve(`${name} success`);
            }
        },delay);
    });
}


Promise.all([
    fakeApi("salman",1000),
    fakeApi("safwan",2000),
    fakeApi("sumu",3000)
    ])
    .then((results)=>console.log("promise all:",results))
    .catch((err)=>console.log("Not resolved:",err));
    
    
Promise.allSettled([
    fakeApi("service A",1000),
    fakeApi("service B",2000,true),
    fakeApi("Service c",3000)
    ])
    .then((results)=>console.log("promise allSettled:",results))
    .catch((err)=>console.log("Not Settled:",err));
    
    
Promise.race([
    fakeApi("The Fast API",500),
        //fakeApi("The Fast API",500,true),  // Race failing condition
    fakeApi("The Slow API",2000)
    ])
    .then((results)=>console.log("Promise race:",results))
    .catch((err)=>console.log("Race fails",err));


Promise.any([
    fakeApi("Failing X",1000,true),
    fakeApi("Failing Y",2000,true),
    fakeApi("Working Z",3000)
    ])
    .then((results)=>console.log("Promise any:",results))
    .catch((err)=>console.log("Any fails",err));




