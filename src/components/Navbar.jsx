import { useState } from "react";
import { UseGloblaContext } from "../context"

const NavBar = () => {
    const { setSearchTerm, fetchRandomMeal } = UseGloblaContext();
    const [text, changeText] = useState("");
    function handelChange(event) {
        changeText(event.target.value);
        // console.log(text)
    }
    function handelSubmit(event) {
        event.preventDefault();
        setSearchTerm(text);
    }
    function handelRandomMeal() {
        setSearchTerm("");
        changeText("");
        fetchRandomMeal();
    }
    return (
        <div className="regular-padding">
            <h1><a className="navbar-brand" href="#">Yumm Recipe</a></h1>
            <div className="">
                <form className="" onSubmit={handelSubmit} role="search">
                    <input className="form-control" type="text" value={text} onChange={handelChange} placeholder="Search" />
                    <div className="text-center mt-3">
                        <button className="btn me-5" type="submit">Search</button>
                        <button className="btn" type="btn" onClick={handelRandomMeal}>Random</button>
                    </div>
                </form>
            </div>
        </div>
    )
}



export default NavBar;