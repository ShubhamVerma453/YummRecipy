import 'bootstrap/dist/css/bootstrap.min.css';
import NavBar from "./Navbar";
import Favorites from './Favorites';
import Meals from './Meals';
import MyModal from './MyModel';
import { UseGloblaContext } from '../context';

function App() {
    const { show } = UseGloblaContext();
    return (
        <main>
            <NavBar />
            <Favorites />
            <Meals />
            {show && <MyModal />}
        </main>
    )
}

export default App;