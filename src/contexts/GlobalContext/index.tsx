/* eslint-disable react-refresh/only-export-components */
import { createContext, PropsWithChildren, useState } from 'react';

type GlobalContextType = {
    currentSelectedPageContent: string;
    setCurrentSelectedPageContent: (content: string) => void;
}

export const GlobalContext = createContext<GlobalContextType>({} as GlobalContextType);

export const GlobalProvider = ({ children } : PropsWithChildren) => {
    const [currentSelectedPageContent, setCurrentSelectedPageContent] = useState<string>('home');

    return (
        <GlobalContext.Provider
            value={{
                currentSelectedPageContent,
                setCurrentSelectedPageContent,
            }}
        >
            {children}
        </GlobalContext.Provider>
    );
};
