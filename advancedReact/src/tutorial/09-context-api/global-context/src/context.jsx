import { createContext, useContext, useState } from "react";

const GlobalContext = createContext();

// custom hook!
export const useGlobalContext = () => {
    return useContext(GlobalContext);
};
// custom hook end!

const AppContext = ({ children }) => {
    const [name, setName] = useState("peter");

    return (
        <GlobalContext.Provider value={{ name: name, setName: setName }}>
            {children}
            <h1>hello</h1>
        </GlobalContext.Provider>
    );
};

export default AppContext;
