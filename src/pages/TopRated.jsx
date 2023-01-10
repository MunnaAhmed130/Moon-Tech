import React from "react";
import ProductCard from "../components/ProductCard";
import { useProducts } from "../context/ProductProvider";

const TopRated = () => {
    const {
        state: { products, loading, error },
    } = useProducts();

    let content;

    if (loading) {
        content = <p>Loading</p>;
    }

    if (error) {
        content = <p>something went wrong</p>;
    }

    if (!loading && !error && products.length === 0) {
        content = <p>Nothing to show, product list is empty</p>;
    }

    if (!loading && !error && products.length) {
        content = products
            .filter((product) => product.rating >= 4)
            .map((product) => (
                <ProductCard product={product} key={product._id} />
            ));
    }

    return <div className="">{content}</div>;
};

export default TopRated;
