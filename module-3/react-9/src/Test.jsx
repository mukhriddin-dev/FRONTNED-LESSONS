import {useEffect , useState} from 'react';

const Test = () => {

    const [num, setNum]=useState(0);
    const [str, setStr]=useState("");
    


    useEffect(()=>{ 

        console.log("component did mounut !") // first rendering...
        console.log("re rendering...")

        return ()=>{
            console.log("unmounting")
        }

     })


    return (
        <div className='card shadow-lg p-5 m-4'>
            <button onClick={()=>setNum(num+1)}>++</button>
            <h1>{num}</h1> 
            <p>{str}</p>
           <input type="text" value={str} onChange={(e)=>setStr(e.target.value)} />
        </div>
    );
};

export default Test;