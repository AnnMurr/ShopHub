import { Suspense } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Login } from "./components/ui/login/login";
import { ProductDetails } from "./components/ui/productDetails/productDetails";
import { Spinner } from "./components/reusable/spinner/spinner";
import { Header } from "./components/shared/header/header.lazy";
import { HomePage } from "./components/ui/home/home.lazy";
import "./assets/styles/reset.css";
import "./assets/styles/main.css";

function App() {
    return (
        <Router>
            <Suspense fallback={<Spinner />}>
                <Header />
                <Routes>
                    <Route path="/" element={<HomePage />} />
                    <Route path="/login" element={<Login />} />
                    <Route path="/product/:id" element={<ProductDetails />} />
                </Routes>
            </Suspense>
        </Router>
    )
}

export default App;