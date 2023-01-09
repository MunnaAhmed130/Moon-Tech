import React, {
    createContext,
    useContext,
    useEffect,
    useReducer,
    useState,
} from "react";
import {
    initialState,
    productReducer,
} from "../state/ProductState/productReducer";

export const PRODUCTS_CONTEXT = createContext();

const ProductProvider = ({ children }) => {
    const [data, setData] = useState([]);

    const [state, dispatch] = useReducer(productReducer, initialState);
    useEffect(() => {
        fetch("http://localhost:4000/all")
            .then((res) => res.json())
            .then((data) => setData(data));
    }, []);

    const value = { data };
    return (
        <PRODUCTS_CONTEXT.Provider value={value}>
            {children}
        </PRODUCTS_CONTEXT.Provider>
    );
};

export const useProducts = () => {
    const context = useContext(PRODUCTS_CONTEXT);
    return context;
};

export default ProductProvider;
