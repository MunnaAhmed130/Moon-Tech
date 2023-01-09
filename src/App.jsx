import { RouterProvider } from "react-router-dom";
import "./App.css";
import Home from "./pages/Home";
import About from "./pages/About";
import Main from "./layout/Main";
import ProductProvider from "./context/ProductProvider";
import routes from "./routes/routes";
// import "./products.json";

function App() {
    return (
        <ProductProvider>
            <RouterProvider router={routes} />
        </ProductProvider>
    );
}

export default App;
