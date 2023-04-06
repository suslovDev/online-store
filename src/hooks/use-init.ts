import { useState, useEffect } from "react";
import { useAppSelector } from "./hooks";

export const useInit = () => {
    const { originProducts } = useAppSelector((state) => state.products);
    const [init, setInit] = useState(false);
    if (originProducts.length && init) localStorage.removeItem("products");

    useEffect(() => {
        if (init) return;
        setInit(true);
    }, [originProducts]);

    return originProducts;
}