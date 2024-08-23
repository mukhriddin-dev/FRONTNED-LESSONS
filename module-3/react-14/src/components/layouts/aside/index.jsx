import {  NavLink } from "react-router-dom";
import "./style.scss";
import { navigation } from "@mocks/navigation";
import { logOut } from "@utils";

const index = () => {
  return (
    <aside className="bg-indigo-600 w-[15%] min-h-screen">
      <nav>
        <ul className="list">
          {navigation.length &&
            navigation?.map((item) => (
              <li key={item}>
                <NavLink to={item.path} className="text-white item">
                  <i className={`bi ${item.icon}`}></i> <span>{item.name}</span>
                </NavLink>
              </li>
            ))}
        </ul>
    
          <button onClick={()=>logOut()} className="px-3 absolute bottom-[100px] left-4 py-1 border bg-indigo-500 block mx-auto">chiqish</button>
       
      </nav>
    </aside>
  );
};

export default index;
