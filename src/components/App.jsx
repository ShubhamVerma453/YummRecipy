import 'bootstrap/dist/css/bootstrap.min.css';
import NavBar from "./Navbar";
import Favorites from './Favorites';
import Meals from './Meals';

function App() {
    return (
        <main>
            <NavBar />
            <Favorites />
            <Meals />
        </main>
    )
}

export default App;