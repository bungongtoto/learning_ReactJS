import axios from "axios";
import { useEffect, useState } from "react";

const useAxiosFetch = (dataUrl) => {
    const [data, setData] = useState([]);
    const [fetchError, setFetchError] = useState(null);
    const [isLoading, setIsLoading] = useState(false);

    useEffect(() => {
        let isMounted = true;
        const controller = new AbortController();

        const fetchData = async (url) => {
            setIsLoading(true);
            try {
                const response = await axios.get(url, {
                    signal: controller.signal
                });
                if(isMounted) {
                    setData(response.data);
                    setFetchError(null);
                }
            } catch (error) {
                if(isMounted) {
                    setFetchError(error.message);
                    setData([]);
                }
            } finally {
                isMounted &&  setIsLoading(false)
            }
        }

        fetchData(dataUrl);

        const cleanUp = () => {
            isMounted = false;
            controller.abort();
        }

        return cleanUp;
    }, [dataUrl]);

    return {data, fetchError, isLoading}
}

export default useAxiosFetch;