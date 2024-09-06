import React, { useState } from "react";
import { Container } from "./components/containers/container";
import { Button } from "./components/ui/button";
import { Card } from "./components/ui/card";
import { ThemeProvider } from "./context/them-context";
import { LanguageProvider } from "./context/lang-context";
import { CardGrid } from "./components/containers/card-grid";

const App: React.FC = () => {

  const [theme, setTheme] = useState<string>("light");
  const [lang, setLang] = useState<string>("uz");

  const toggleTheme = (): void => {
    setTheme(theme === "light" ? "dark" : "light");
    console.log("theme changed");
  };

  const changeLanguage = (lang: string): void => {
    setLang(lang);
    console.log(`language changed to ${lang}`);
  };

  return (
    <LanguageProvider lang={lang} setLang={changeLanguage} >
    
      <ThemeProvider theme={theme} toggleTheme={toggleTheme}>

        <h1>{lang}</h1>
        <Container>
          <Button
            text="submit"
            type="submit"
            onClick={() => {
              toggleTheme();
            }}
          />
          <h1>Hello TypeScript</h1>
        </Container>

        <Container>
          <CardGrid>
            <Card />
            <Card />
            <Card />
            <Card />
          </CardGrid>
        </Container>

      </ThemeProvider>
    </LanguageProvider>
  );
};

export default App;
