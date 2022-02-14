import { useEffect } from "react";
import { useState } from "react";

const usePrograms = () => {
    const [programs, setPrograms] = useState([]);
    useEffect(() => {
        fetch('./Programs.JSON')
            .then(res => res.json())
            .then(data => setPrograms(data))
    }, []);
    // returing Data
    return [programs, setPrograms]
}

export default usePrograms;