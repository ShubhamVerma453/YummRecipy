import { UseGloblaContext } from "../context"

const Favorites = () => {
    const { favorite, removeFromFavorite, selectMeal } = UseGloblaContext();
    return (
        <div className="regular-padding bg-coloured">
            <h3>Favorites</h3>
            <div className="favorite-box">
                {
                    favorite.map(meal => {
                        return (
                            <div key={meal.idMeal} className="favorite-meal">
                                <img src={meal.strMealThumb} onClick={() => selectMeal(meal.idMeal)} alt="foodImage" className="favorite-img" />
                                <button type="button" onClick={() => removeFromFavorite(meal.idMeal)} className="favorite-btn">remove</button>
                            </div>
                        )
                    })
                }
            </div>
        </div>
    )
}

export default Favorites;