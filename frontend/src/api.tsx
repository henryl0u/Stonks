import axios from "axios";
import { CompanyBalanceSheet, CompanyCashFlow, CompanyIncomeStatement, CompanyKeyMetrics, CompanyProfile, CompanySearch } from "./company";

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

export const getKeyMetrics = async (query: string) => {
    try {
        const data = await axios.get<CompanyKeyMetrics[]>(`https://financialmodelingprep.com/api/v3/key-metrics-ttm/${query}?apikey=${process.env.REACT_APP_API_KEY}`);
        return data;
    } catch (error: any) {
        console.log("Error fetching company profile:", error.message);
    }
}

export const getIncomeStatement = async (query: string) => {
    try {
        const data = await axios.get<CompanyIncomeStatement[]>(`https://financialmodelingprep.com/api/v3/income-statement/${query}?limit=40&apikey=${process.env.REACT_APP_API_KEY}`);
        return data;
    } catch (error: any) {
        console.log("Error fetching company profile:", error.message);
    }
}

export const getBalanceSheet = async (query: string) => {
    try {
        const data = await axios.get<CompanyBalanceSheet[]>(`https://financialmodelingprep.com/api/v3/balance-sheet-statement/${query}?period=annual&apikey=${process.env.REACT_APP_API_KEY}`);
        return data;
    } catch (error: any) {
        console.log("Error fetching company profile:", error.message);
    }
}

export const getCashFlowStatement = async (query: string) => {
    try {
        const data = await axios.get<CompanyCashFlow[]>(`https://financialmodelingprep.com/api/v3/cash-flow-statement/${query}?period=annual&apikey=${process.env.REACT_APP_API_KEY}`);
        return data;
    } catch (error: any) {
        console.log("Error fetching company profile:", error.message);
    }
}



