import { createContext, FC} from "react";
import type { ContextLanguage } from "../types";
export const languageContext: any = createContext("uz");


export const LanguageProvider: FC<ContextLanguage> = ({
  lang,
  setLang,
  children
}) => {
  return (
    <languageContext.Provider value={{ lang, setLang }}>
      {children}
    </languageContext.Provider>
  );
};
