import React from "react";
import { useProducts } from "../context/ProductProvider";

const About = () => {
    const { data } = useProducts();
    console.log(data);
    return <h1 className="font-bold">About</h1>;
};

export default About;
