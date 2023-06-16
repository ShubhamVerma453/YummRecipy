import { UseGloblaContext } from "../context"

const Meals = () => {
    const { meals } = UseGloblaContext();
    // console.log(meals);
    return (
        <div className="regular-padding">
            <h3>Meals</h3>
            <div className="row text-center">
                {
                    meals.map(singleMeal => {
                        console.log(singleMeal)
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
// style={{ width: '18rem' }}


export default Meals;