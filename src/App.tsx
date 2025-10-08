import { Home } from "./components/ui/home/home";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./assets/styles/reset.css";
import { Login } from "./components/ui/login/login";

function App() {
    return (
        <Router>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/login" element={<Login />} />
            </Routes>
        </Router>
    )
}

export default App;