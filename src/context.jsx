import React, {useContext, useEffect, useState} from "react";
import axios from "axios";

const AppContext = React.createContext();

const mealByFirstLetter = "https://www.themealdb.com/api/json/v1/1/filter.php?a=Indian";
const randomMeal = "https://www.themealdb.com/api/json/v1/1/random.php";

const AppProvider = ({children}) => {
    const [meals, setMeals] = useState([]);
    const [loading, setLoading] = useState(false);

    const fetchData = async (url) => {
        setLoading(true);
        try {
            const data = await axios(url);
            if(data.data.meals){
                setMeals(data.data.meals);
            } else {
                setMeals([]);
            }
            // console.log(data.data.meals);
        } catch (error) {
            console.log(error);
        }
        setLoading(false);
    }

    useEffect(()=>{
        // console.log("data fetching");
        fetchData(mealByFirstLetter);       
    },[])

    return <AppContext.Provider value={{loading, meals}} >
        {children}
    </AppContext.Provider>
}

export const UseGloblaContext = () => useContext(AppContext);
export {AppContext, AppProvider}