import { useState, useEffect } from "react";
import axios from "../configs/axios.config";

type HTTPMethods = "get" | "post" | "put" | "patch" | "delete";
interface useAxiosProps {
    url: string;
    method: HTTPMethods;
    body?: any;
    headers?: any;
}

const useAxios = <T>({ url, method, body = null, headers = null }: useAxiosProps) => {
    const [response, setResponse] = useState<T | null>(null);
    const [error, setError] = useState("");
    const [loading, setLoading] = useState(true);

    const fetchData = async () => {
        try {
            const res = await axios[method](url, body, headers);

            setResponse(res.data.data);
        } catch (err: any) {
            setError(err);
        } finally {
            setLoading(false);
        }
    };

    useEffect(() => {
        fetchData();
    }, [url]);

    return { response, error, loading };
};

export default useAxios;
