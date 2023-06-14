import {UseGloblaContext} from "../context"

const NavBar = () => {
    return (
        // <nav className="navbar navbar-expand-lg ">
        //     <div className="container-fluid">
        //         <a className="navbar-brand" href="#">Navbar</a>

        //         <form className="d-flex" role="search">
        //             {/* <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search"> */}
        //             <button className="btn btn-outline-success" type="submit">Search</button>
        //         </form>

        //     </div>
        // </nav>
            <h1>
                { UseGloblaContext().name}
            </h1>
    )
}

export default NavBar;