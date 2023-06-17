import { UseGloblaContext } from "../context"

const Meals = () => {
    const { loading, meals } = UseGloblaContext();
    // console.log(meals);
    if (!loading) {                 // If fetchData for meals in context.jsx has completed and we have result
        if(meals.length === 0){         // If meals is empty
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
                                const { idMeal, strMeal: title, strMealThumb: image } = singleMeal;
                                return (
                                    <div key={idMeal} className="card meal-card col-lg-3 col-md-4 col-sm-6" >
                                        <img src={image} className="card-img-top" alt="foodImage" />
                                        <div className="card-body">
                                            <h5 className="card-title">{title}</h5>
                                            <a href="#" className="btn">check</a>
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