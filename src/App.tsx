import { Home } from "./components/ui/home/home";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./assets/styles/reset.css";

function App() {
    return (
        <Router>
            <Routes>
                <Route path="/" element={<Home />} />
            </Routes>
        </Router>
    )
}

export default App;