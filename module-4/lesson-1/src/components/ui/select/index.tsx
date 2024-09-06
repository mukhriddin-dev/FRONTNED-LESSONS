import { useContext, FC } from "react";
import { languageContext } from "../../../context/lang-context";
import type { langContextType } from "../../../types";
export const Select: FC = () => {
  const { setLang }: langContextType = useContext(languageContext);

  return (
    <select onChange={(e) => setLang(e.target.value)}>
      <option value="uz">Uzbek</option>
      <option value="ru">Russian</option>
      <option value="en">English</option>
    </select>
  );
};
