import { Home } from "./components/ui/home/home";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Login } from "./components/ui/login/login";
import "./assets/styles/reset.css";

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