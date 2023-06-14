import React, {useContext} from "react";

const AppContext = React.createContext();

const AppProvider = ({children}) => {
    return <AppContext.Provider value={{name:"jon", age:20}} >
        {children}
    </AppContext.Provider>
}

export const UseGloblaContext = () => useContext(AppContext);
export {AppContext, AppProvider}