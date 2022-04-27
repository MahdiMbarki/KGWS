import './css/App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Navigationbar from './component/Navigationbar';
import OffcanvasNavbar from './component/OffcanvasNavbar';
import HeaderSlider from './component/HeaderSlider';





function App() {
    return (
        <div className="App">
            <Navigationbar />
            <OffcanvasNavbar />
            <HeaderSlider />

        </div>
    );
}

export default App;
