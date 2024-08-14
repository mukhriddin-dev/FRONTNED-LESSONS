import { Outlet } from "react-router";
import { Header, Footer } from "./components";
import { MainLayout } from "./components/layouts";


const App = () => {
  return (
    <>
      <Header/>
      <MainLayout>
         <Outlet/>
      </MainLayout>
      <Footer />
    </>
  );
};

export default App;
