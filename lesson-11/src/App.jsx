import {  useReducer, useEffect } from "react";

const App = () => {

  const initialState = {
    count: 1,
    post:[],
    load:true,
    postLength:0
  };
 
const reducer = (state, action) => {

console.log("AC: ",action)

 switch(action.type){
         case "INCREMENT" : return {...state, count: state.count + 1 };
         case 'DECREMENT' : return {...state, count: state.count - 1 };
         case 'REST'      : return {...state, count: 0 };
         case 'SET_POST'  : return {...state, post:action.payload};
         case 'STOP_LOAD' : return {...state, load:false}
         case 'SET_LENGTH': return {...state, postLength:action.payload}
         default:  throw new Error("Nimadur xato :( ")
} }

useEffect(()=>{
fetch(`https://jsonplaceholder.typicode.com/comments`)
.then((req)=>req.json())
.then((res)=>{

  dispatch( {type:'SET_POST', payload:res})
  dispatch({type:'STOP_LOAD'})
  dispatch({type:'SET_LENGTH', payload:res.length})
  
})
}, [])


   
  const [{ post , load , postLength , count}, dispatch] = useReducer(reducer, initialState);

  return (
    <div className="container mx-auto">

      <h1>
        {count}
      </h1>

      <button onClick={() => dispatch({ type: "INCREMENT" })}>Increment</button>
      <button onClick={() => dispatch({ type: "DECREMENT" })}>Decrement</button>
      <button onClick={() => dispatch({ type: "REST" })}>Rest</button>

     {
      load ? <h1>LOADING.....</h1> : ""
     }

     <ul>
     {
      postLength && post.map((item)=>{
        return <li key={item.id}>{item.name}</li>
      })
     }
     </ul>
     
    </div>
  );
};

export default App
