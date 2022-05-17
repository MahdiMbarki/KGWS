import './css/App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { useEffect, useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Aboutpage, data, Home, BackToTopButton, Partenariat, Navigationbar, Footer, Newspage } from './components/Common'
function App() {

    const [landingPageData, setLandingPageData] = useState({});
    useEffect(() => {
        setLandingPageData(data);

    }, []);
    return (
        <div className="App">
            <Router>
                <Navigationbar data={landingPageData.navbar} />

                <Routes >

                    <Route exact path='/' element={<Home />} />
                    <Route path='/Partenariat' element={<Partenariat />} />
                    <Route path='/Aboutpage' element={<Aboutpage />} />
                    {data ? data.news.map((d, i) => (
                        <Route key={i} path={d.path} element={<Newspage img={d.image} title={d.title} subtitle={d.subtitle} fullarticle={d.fullarticle} date={d.date} author={d.author} />} />
                    )) : "loading..."}

                </Routes>
                <Footer />
                <BackToTopButton />

            </Router>
        </div>
    );
}

export default App;