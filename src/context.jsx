import React, {useContext, useEffect, useState} from "react";
import axios from "axios";

const AppContext = React.createContext();

const mealByFirstLetter = "https://www.themealdb.com/api/json/v1/1/search.php?f=c";
const randomMeal = "https://www.themealdb.com/api/json/v1/1/random.php";

const AppProvider = ({children}) => {
    const [meals, setMeals] = useState([]);

    const fetchData = async (url) => {
        try {
            const data = await axios(url);
            setMeals(data.data.meals);
            // console.log(data.data.meals);
        } catch (error) {
            console.log(error);
        }
    }

    useEffect(()=>{
        // console.log("data fetching");
        fetchData(mealByFirstLetter);       
    },[])

    return <AppContext.Provider value={{meals}} >
        {children}
    </AppContext.Provider>
}

export const UseGloblaContext = () => useContext(AppContext);
export {AppContext, AppProvider}