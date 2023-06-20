import { UseGloblaContext } from "../context"

const Meals = () => {
    const { loading, meals, selectMeal, addtoFavorite } = UseGloblaContext();
    // console.log(meals);
    if (!loading) {                 // If fetchData for meals in context.jsx has completed and we have result
        if (meals.length === 0) {         // If meals is empty
            return (
                <div className="regular-padding">
                    <h3>Meals</h3>
                    <div className="row text-center">
                        <h2>Nothing Found</h2>
                    </div>
                </div>
            )
        } else {             // If meals has content
            return (
                <div className="regular-padding">
                    <h3>Meals</h3>
                    <div className="row text-center">
                        {
                            meals.map(singleMeal => {
                                // console.log(singleMeal)
                                const { idMeal, strMeal: title, strMealThumb: image, } = singleMeal;
                                return (
                                    <div key={idMeal} className="card meal-card col-lg-3 col-md-4 col-sm-6" >
                                        <img src={image} className="card-img-top" alt="foodImage" />
                                        <div className="card-body text-start">
                                            <h5 className="card-title">{title}</h5>
                                            <div className="card-buttons">
                                                <button onClick={() => selectMeal(idMeal)} className="btn">check</button>
                                                <i onClick={() => addtoFavorite(idMeal)} className="fa-regular fa-star fa-xl "></i>
                                            </div>
                                        </div>
                                    </div>
                                )
                            })
                        }
                    </div>
                </div>
            )
        }
    } else {         // If fetchData for meals in context.jsx is running
        return (
            <div className="regular-padding">
                <h3>Meals</h3>
                <div className="row text-center">
                    <h2>Loading...</h2>
                </div>
            </div>
        )
    }
}

export default Meals;