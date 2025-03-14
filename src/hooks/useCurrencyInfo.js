import { useEffect, useState } from "react";

function useCurrencyInfo(baseCurrency) {
    const [data, setData] = useState({});

    useEffect(() => {
        const fetchCurrencyData = async () => {
            try {
                const response = await fetch(`https://open.er-api.com/v6/latest/${baseCurrency}`);
                if (!response.ok) {
                    throw new Error("Failed to fetch currency data");
                }
                const result = await response.json();
                
                console.log("API Response:", result);
                
                if (result.rates) {
                    setData(result.rates);
                } else {
                    console.error("Currency data not found", result);
                }
            } catch (error) {
                console.error("Error fetching currency data:", error);
            }
        };

        fetchCurrencyData();
    }, [baseCurrency]);

    return data;
}

export default useCurrencyInfo;
