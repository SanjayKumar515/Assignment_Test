import axios from 'axios';
const STAGING_API_URL = 'http://api.coingecko.com/api/v3/';
export const API_URL = STAGING_API_URL;
let APIKit = axios.create( {
    baseURL: STAGING_API_URL,
    timeout: 30000,
} );


export const UserService = {
    geCryptoData: async ( ) => {
        const apiHeaders = {
            headers: {
                'Content-Type': 'application/json',
                Accept: 'application/json',
            },
        };
        return APIKit.get(
            `coins/markets?vs_currency=usd`,
            apiHeaders,
        );
    },
};
