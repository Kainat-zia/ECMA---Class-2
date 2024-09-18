         // 16-9-24

// ...................................... ECMA script 6...........................
// .......................Asynchorous programming -> synchorous programming -> call back  ->  callback hells (neste3d statement) -> promoises................
//  call back --> to pass argument in one function into another function. 
// we  cant put paranthesis in callfunction./ when we take diff argument in function we cant put paranthesis in call back functuion. and if I put paranthesis than its output is NAN


// ................................................Sychronous  (Line by line show hoga)....................................................
// console.log("one");
// console.log("two");
// console.log("three");

// ......................................Asychronous  (phalay start show hoga phir end hoga then hello world last may show hoga )........................................................................
// console.log("start");
// setTimeout(()=>{
//     console.log("hello world");
// }, 5000);
// console.log("End");

// ......................................................call back : function k andr function as a argument pass krna...............................................................


// function myCalculator(num1, num2, myCallback){

// }
// function sum(a,b){
//     console.log(a + b);
// }
// function calculator(a,b,sumCallback){
//   sumCallback(a,b)
// }
// calculator(7,8,sum)

// callback hell

//  function getData(dataId){
//     setTimeout(() => {
//         console.log("data", dataId, );
//     }, 2000);
//  }
//  getData(1)
//  getData(2)
//  getData(3)


// // when we apply multiple callbacks then its called callbackhell. it also known as pyramis of broom
// function getData(dataId , getNextData){
//     setTimeout(() => {
//         console.log("data", dataId, );
//         if(getNextData){
//            getNextData();
//                  }
//                 }, 2000);
//         }
//    getData(1,()=>{
//      getData(2,()=>{
//         console.log("loading for data 3");
//         getData(3,()=>{
//             getData(4 ,()=>{

//             })
//         })
//      })
//    })

//     to resolve the callback we use promise
//  prmise is build in class in javascript
// 1. fullfiled accept -> resolve
// 2. reject
// 3. pending state

// let promise = new Promise((resolve, reject) =>{
//    console.log("this is a promise");
//    resolve("i am resolve")
// })


// let promise = new Promise((resolve, reject) =>{
//     console.log("this is a promise");
//     reject("some errors caught")
//  })


// ...............wednesday 18-september
 
// setInterval(myFunction ,1000);

// function myFunction(){
//   let d = new Date();
//   document.getElementById("demo").innerHTML = 
//   d.getHours() + ":" + 
//   d.getMinutes() + ":" +
//   d.getSeconds() ;
// };

// let complete = true;
// let prom = new Promise(function(resolve,reject){
//     if(complete){
//         resolve("I am success");
//     }
//     else{
//         reject("I am failure")
//     }
// })
// console.log(prom);

let promise = new Promise((resolve, reject) => {
    let x = "hellow world";
    let y = "hellow world";
    if(x==y){
        resolve();
    }
    else{
        reject();
    }
})
promise.then(function(){
    console.log("I am resolve");
})
.catch(function(){
    console.log("I am a failure");
})


//  then -> handle resolve
// reject -> work as a catch







//  replace of then , we also doing by this method too

// function prom (complete) {
//    return new Promise(function(resolve,reject){
//     if(complete){
//         resolve("i am resolve");
//     }
//     else{
//         reject("i am failed");
//     }
// });
// }
// let onFulfilment = (result) =>{
//     console.log(result)
//     }
//     let onRejection = (error) =>{
//         console.log(error);
//     }
//     prom(true).then(onFulfilment)
//     prom(true).catch(onRejection)

    



    // function prom (complete) {
    //     return new Promise(function(resolve,reject){  
    //         console.log("fetching data , please wait");
    //         setTimeout(() =>{
    //      if(complete){
    //          resolve("I am resolve");
    //      }
    //      else{
    //          reject("i am failed");
    //      }
    //     }, 4000);
    //  });
    //  }

    //  let onFulfilment = (result) =>{
    //      console.log(result)
    //      }
    //      let onRejection = (error) =>{
    //          console.log(error);
    //      }
    //      prom(true).then(onFulfilment).catch(onRejection)




  //  division
        
    function prom (a,b) {
        return new Promise(function(resolve,reject){  
            console.log("fetching data , please wait");
            let division = a/b
            setTimeout(() =>{
         if(a, b){
             resolve("your answer :  " + division);
         }
         else{
             reject("failed to calculate");
         }
        }, 4000);
     });
     }

     prom(12, 9).then((result) =>{
        console.log(result);
     })
     .catch((error) =>{
        console.log(error);
     })
