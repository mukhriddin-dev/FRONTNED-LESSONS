"use strict";// function test1(){//     console.log("test 1");//     // code run// }//// function test2(){//     console.log("test 2");//     // code run// }////// function test3(){//     console.log("test 3");//     // code run// }////// debugger//// test1()//// debugger//// test2()//// debugger//// test3()// const object={//     key1:"value1",//     key2:"value2",//     key3:"value3",//     key4:"value4",// }////// console.table(object);// range Error// function range(){//     console.log("test")//     range()// }//// range()// ReferenceError// console.log(test)// Type Error// const num=1;// console.log(num.includes('12'))// function  renderData(data){//     data.forEach((item)=>{//         console.log(item);//     })// }//// renderData()// Syntax Error// const a// const test=;// console.log(test\12)// function loop(x) {//     if (x >= 1000000000000) return;////     // do stuff//     loop(x + 1);// }// loop(0);//// // InternalError: too much recursion// new InternalError('web')// function  callMe(data){//     try{////         console.log(data.type.str);// state 1////          data.map((item)=>{//              console.log(item)//          }) // state 2////         console.info("state 3")////     }catch (e){//          console.log(e.message)//     }finally {//          console.log("finish");//     }// }//// callMe("data")// function add(x, y) {////     if (typeof x !== 'number') {//         throw "1- argument number bo'lsin!";//     }//     if (typeof y !== 'number') {//         throw  "2- argument number bo'lsin!";//     }////     return x + y;// }//// add(10,"11")// function  createErrors(message){// //     throw new Error(message);// // }// //// // createErrors('xato ketdi ');// function  test(){//     "use strict";//// }// console.table({//     key:"val",//     key2:"val2"// });