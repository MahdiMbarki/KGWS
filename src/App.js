//import './css/App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Home, BackToTopButton, Partenariat, Navigationbar, Partners, OffcanvasNavbar, Footer } from './components/Common'


function App() {
    return (
        <div className="App">
            <Router>
                <Navigationbar />
                <OffcanvasNavbar />
                <Routes >

                    <Route exact path='/' element={<Home />} />

                    <Route path='/Partenariat' element={<Partenariat />} />

                </Routes>
                <Partners />
                <Footer />
                <BackToTopButton />
            </Router>
        </div>
    );
}

export default App;
