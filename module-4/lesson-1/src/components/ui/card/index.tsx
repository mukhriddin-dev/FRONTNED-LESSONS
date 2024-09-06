import {useContext, FC} from 'react'
import { Select } from '../select';
import type { ContextType } from '../../../types';
import { themeContext } from '../../../context/them-context';
import "./style.scss"
import { languageContext } from '../../../context/lang-context';

interface LanguageType{
  lang: string;
}

export const Card:FC= () => {

  const { theme , toggleTheme}:ContextType= useContext(themeContext);
  const {lang}:LanguageType=useContext(languageContext)

  const cardStyle = {
    backgroundColor: theme === 'light'? '#fff' : '#333',
    color: theme === 'light'? '#333' : '#fff',
  };

  return (
    <div className='card' style={cardStyle} onClick={toggleTheme}>

        <img src="https://picsum.photos/id/122/300/250" alt="photo" />
        <div className="card-body">
            <h5 className="card-title">Card title {lang}</h5>
            <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
            <a href="#" className="btn btn-primary">Go somewhere</a>
            <Select/>
        </div>
    </div>
  )
}
