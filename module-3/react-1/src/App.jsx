import { useState } from "react";
import { Header } from "./components/header";
import MainLayout from "./components/main-layout";
import { Footer } from "./components/footer";
import Buton from "./components/ui/button";



function App() {

  const [val,setVal]=useState('salom');
  const [count, setCount] = useState(100);
  const [toggle, setToggle] = useState(true);
  const cardStyle={display: toggle ? 'block' : 'none'}
 

  return (
    <>
      <Header />
      <MainLayout>

        <h1>{val}</h1>

        <input value={val} onChange={(e)=>setVal(e.target.value)} type="text" placeholder="smth text" />
        <button onClick={()=>setVal("")}>save</button>

        <button >{count}</button>
        <button onClick={()=>setToggle(!toggle)}>hide card</button>
        <button onClick={()=> setCount(count + 1)}>click</button>
        <Buton
          className="success"
          text="delete"
          type="submit"
          fun={() => setCount(count + 1)}
        />

        <div className="card" style={cardStyle}>
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Enim
          repellat perferendis, repudiandae cupiditate corrupti odit quam nemo
          eum nihil minima temporibus inventore minus voluptas dolor, eligendi
          praesentium est ut mollitia harum culpa pariatur cum! Tempore incidunt
          nostrum ab asperiores neque voluptatibus nisi quas dolores.
        </div>
      </MainLayout>
      <Footer />
    </>
  );
}
export default App;
