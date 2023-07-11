import { BrowserRouter as Router, Routes, Route, } from "react-router-dom";
import { Header, FirstPage, SecondPage } from "../../pages/index"


const App = () => {
    return (
        <Router>
            <Routes>
                <Route path="/" element={<Header />} >
                    <Route path="/" element={<FirstPage />} />
                    <Route path="/SecondPage" element={<SecondPage />} />
                </Route>
            </Routes>
        </Router>
    )
}

export default App