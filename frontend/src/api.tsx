import axios from "axios";
import { CompanySearch } from "./company";

interface SearchResponse {
    companies: CompanySearch[];
}

export const searchCompanies = async (query: string) => {
    try {
        const data = await axios.get<SearchResponse>(`https://financialmodelingprep.com/api/v3/search?query=${query}&apikey=${process.env.REACT_APP_API_KEY}`);
        return data
    } catch (error) {
        if (axios.isAxiosError(error)) {
            console.error("Error:", error.message);
            return error.message;
        } else {
            console.error("Unexpected error:", error);
            return "An unexpected error occurred.";
        }
    }
}