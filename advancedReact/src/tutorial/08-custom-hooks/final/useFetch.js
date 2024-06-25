import { useState, useEffect } from "react";

const useFetch = (url) => {
    const [isLoading, setIsLoading] = useState(true);
    const [isError, setIsError] = useState(false);
    const [data, setData] = useState(null); // change state name!

    useEffect(() => {
        const fetchData = async () => {
            try {
                const resp = await fetch(url);
                if (!resp.ok) {
                    setIsError(true);
                    setIsLoading(false);
                    return;
                }
                const response = await resp.json(); // change name to response!
                setData(response);
            } catch (error) {
                setIsError(true);
            }
            setIsLoading(false);
        };
        fetchData();
    }, []);

    return { isLoading, isError, data };
};

export default useFetch;
