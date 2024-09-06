import {  FC , useContext } from 'react'
import type {CardGridPropos ,langContext} from "../../../types"
import "./style.scss"
import { languageContext } from '../../../context/lang-context'


export const CardGrid:FC<CardGridPropos> = ({children}) => {

const {lang}:langContext=useContext(languageContext);

  return (
    <div>
      <h1>{lang}</h1>
      <div className='card-grid'>
        {children}
    </div>
    </div>
  )
}
