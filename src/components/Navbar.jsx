import { UseGloblaContext } from "../context"

const NavBar = () => {
    return (
        <div className="regular-padding">
            <h1><a className="navbar-brand" href="#">Yumm Recipe</a></h1>
            <div className="">
                <form className="" role="search">
                    <input className="form-control" type="search" placeholder="Search" aria-label="Search" />
                    <div className="text-center mt-3">
                        <button className="btn me-5" type="submit">Search</button>
                        <button className="btn" type="submit">Random</button>
                    </div>
                </form>
            </div>
        </div>
    )
}



export default NavBar;