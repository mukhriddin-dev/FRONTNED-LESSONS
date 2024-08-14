import { useState } from "react";
import Header from "./components/header";
import Mainlayout from "./components/main-layout";
import Footer from "./components/footer";
import PostCard from "./components/post-card";
import { langContext } from "./context";
import { langs } from './lang/langs';

const App = () => {

  const [currentLang, setCurrentLang]=useState('uz');
  const t=langs[currentLang];
  
    return (
        <>
        <langContext.Provider value={{currentLang , setCurrentLang , t}}>

            <Header/>
              <Mainlayout>
                  <PostCard />
              </Mainlayout>
            <Footer />

        </langContext.Provider>
        </>
    );
};

export default App;
