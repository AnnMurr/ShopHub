import { Home } from "./components/ui/home/home";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Login } from "./components/ui/login/login";
import { ProductDetails } from "./components/ui/productDetails/productDetails";
import { Header } from "./components/shared/header/header";
import "./assets/styles/reset.css";
import "./assets/styles/main.css";

function App() {
    return (
        <Router>
            <Header />
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/login" element={<Login />} />
                <Route path="/product/:id" element={<ProductDetails />} />
            </Routes>
        </Router>
    )
}

export default App;