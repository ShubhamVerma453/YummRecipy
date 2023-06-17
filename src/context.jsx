import React, { useContext, useEffect, useState } from "react";
import axios from "axios";

const AppContext = React.createContext();

const mealURL = "https://www.themealdb.com/api/json/v1/1/search.php?s=";
const randomMeal = "https://www.themealdb.com/api/json/v1/1/random.php";

const AppProvider = ({ children }) => {
    const [meals, setMeals] = useState([]);
    const [loading, setLoading] = useState(false);
    const [searchTerm, setSearchTerm] = useState("");

    const fetchData = async (url) => {    // loads meal on basis of API
        setLoading(true);
        try {
            const data = await axios(url);
            if (data.data.meals) {
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

    const fetchRandomMeal = () => {
        fetchData(randomMeal);
    }

    useEffect(() => {        // loads some default meals on first render
        // console.log("data fetching");
        fetchData(mealURL);
    }, [])

    useEffect(() => {        // loads meal is there is any search text present
        if (!searchTerm) return;
        fetchData(`${mealURL}${searchTerm}`);
    }, [searchTerm])

    return <AppContext.Provider value={{ loading, meals, setSearchTerm, fetchRandomMeal }} >
        {children}
    </AppContext.Provider>
}

export const UseGloblaContext = () => useContext(AppContext);
export { AppContext, AppProvider }