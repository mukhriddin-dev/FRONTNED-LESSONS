import "./style.scss";
import { Container } from "@layouts";
import { AiFillAppstore } from "react-icons/ai";

const index = () => {
  return (
    <header className="bg-indigo-600">
      <Container className="container-fluid">
        <nav className="w-full flex justify-between items-center h-[50px]">
          <a href="#" className="text-white font-bold flex items-center gap-x-1">
            <AiFillAppstore  className="text-2xl"/> <span>DASHBOARD</span>
          </a>
          <a href="#" className="text-white">Profile</a>
        </nav>
      </Container>
    </header>
  );
};

export default index;
