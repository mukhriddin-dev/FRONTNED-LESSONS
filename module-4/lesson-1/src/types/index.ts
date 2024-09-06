export interface ContainerProps{
    children: React.ReactNode;
    className?: string; 
}

export interface SectionProps extends ContainerProps{}

export interface ButtonProps{
    children?: React.ReactNode;
    text?: string;
    type?: 'button' | 'submit' | 'reset';
    className?: string;
    onClick?: React.MouseEventHandler<HTMLButtonElement>; 
}

export interface ContextType{
    theme: 'light' | 'dark' | string;
    toggleTheme: () => void;
}

export interface ContextProps{
    theme: 'light' | 'dark' | string;
    toggleTheme?: () => void;
    children: React.ReactNode,
}

export interface ContextLanguage {
    lang: "uz" | "eng" | "rus" | string;
    setLang: (lang:string) => void;
    children: React.ReactNode;
}


export interface CardGridPropos{
    children: React.ReactNode
}

export interface langContext {
  lang: string;
}

export interface langContextType{
        setLang: (lang: string) => void;
}

  
