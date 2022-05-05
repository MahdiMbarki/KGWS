//import './css/App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { useEffect, useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { data, Home, BackToTopButton, Partenariat, Navigationbar, OffcanvasNavbar, Footer, Newspage } from './components/Common'

function App() {

    const [landingPageData, setLandingPageData] = useState({});
    useEffect(() => {
        setLandingPageData(data);

    }, []);
    return (
        <div className="App">
            <Router>
                <Navigationbar data={landingPageData.navbar} />
                <OffcanvasNavbar />
                <Routes >

                    <Route exact path='/' element={<Home />} />

                    <Route path='/Partenariat' element={<Partenariat />} />
                    {data ? data.news.map((d, i) => (
                        <Route path={d.path} element={<Newspage img={d.image} title={d.title} subtitle={d.subtitle} fullarticle={d.fullarticle} />} />
                    )) : "loading..."}

                </Routes>

                <Footer />
                <BackToTopButton />

            </Router>
        </div>
    );
}

export default App;