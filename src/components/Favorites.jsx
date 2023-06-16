import { UseGloblaContext } from "../context"

const Favorites = () => {
    const {meals} = UseGloblaContext();
    // console.log(meals);
    return (
        <div className="regular-padding bg-coloured">
            <h3>Favorites</h3>
            {
                meals.map(arr => {
                    // console.log(arr.strMeal)
                    return <h1 key={arr.idMeal}>{arr.strMeal}</h1>
                })
            }
        </div>
    )
}



export default Favorites;