import axios from "axios";
import { CompanyProfile, CompanySearch } from "./company";

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

export const getCompanyProfile = async (query: string) => {
    try {
        const data = await axios.get<CompanyProfile[]>(`https://financialmodelingprep.com/api/v3/profile/${query}?apikey=${process.env.REACT_APP_API_KEY}`);
        return data;
    } catch (error: any) {
        console.log("Error fetching company profile:", error.message);
    }
}
