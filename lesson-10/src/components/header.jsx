import { useContext } from "react";
import { langContext } from "../context";

const header = () => {

  const {t,setCurrentLang}=useContext(langContext);

 
    return (
        <header className="bg-success">
        <div className="container">
          <nav className="d-flex justify-content-between align-items-center">
            <a href="#">LOGO.UZ</a>

            <ul className="d-flex gap-5 list-unstyled">
              <li>
                <a href="#">{t.home}</a>
              </li>
              <li>
                <a href="#">{t.about}</a>
              </li>
              <li>
                <a href="#">{t.service}</a>
              </li>
              <li>
                <a href="#">{t.contact}</a>
              </li>
            </ul>
            <select onChange={(e)=>setCurrentLang(e.target.value)}>

              <option selected disabled>change language</option>
              <option value="uz">uz</option>
              <option value="en">en</option>

            </select>
          </nav>
        </div>
      </header>
    );
};

export default header;