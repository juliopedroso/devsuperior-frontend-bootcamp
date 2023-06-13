import axios, { AxiosRequestConfig } from "axios";

import QueryString from "qs";
import customHistory from "./customHistory";

type LoginResponse = {
    access_token: string,
    token_type: string,
    expires_in: number,
    scope: string,
    userFirstName: string,
    userId: number
}

export const BASE_URL = process.env.REACT_APP_BACKEND_URL ?? 'http://localhost:8080';
const tokenKey = 'authData';

const CLIENT_ID = process.env.REACT_APP_CLIENT_ID ?? "dscatalog";
const CLIENT_SECRET = process.env.REACT_APP_CLIENT_SECRET ?? "dscatalog123";

const basicHeader = () => 'Basic ' + window.btoa(CLIENT_ID + ":" + CLIENT_SECRET);

type LoginData = {
    username: string;
    password: string;
}

export const requestBackendLogin = (loginData: LoginData) => {

    const headers = {
        'Content-type': 'application/x-www-form-urlencoded',
        'Authorization': basicHeader()
    }
    const data = QueryString.stringify({
        ...loginData,
        grant_type: 'password'
    });
    return axios({ method: 'POST', baseURL: BASE_URL, url: '/oauth/token', data, headers })
}

export const requestBackend = (config: AxiosRequestConfig) => {
    const headers = config.withCredentials ? {
        ...config.headers,
        Authorization: "Bearer " + getAuthData().access_token
    } : config.headers;

    return axios({ ...config, baseURL: BASE_URL, headers: headers });
}


export const saveAuthData = (obj: LoginResponse) => {
    localStorage.setItem(tokenKey, JSON.stringify(obj));
}

export const getAuthData = () => {
    const str = localStorage.getItem(tokenKey) ?? '{}';
    return JSON.parse(str) as LoginResponse;
}

axios.interceptors.request.use(function (response) {
    console.log('INTERCEPTOR ANTES DA REQUISIÇÃO');
    return response;
}, function (error) {
    console.log('INTERCEPTOR ERRO NA REQUISIÇÃO');
    return Promise.reject(error);
});

axios.interceptors.response.use(function (response) {
    console.log('INTERCEPTOR RESPOSTA COM SUCESSO');
    return response;
}, function (error) {
    console.log('INTERCEPTOR RESPOSTA COM ERRO');

    if (error.response.status === 401 || error.response.status === 403){
        console.log('REDIRECIONADO POR ERRO NA AUTENTICAÇÃO');
        customHistory.push("/error");
        //window.location.href = "/admin/auth/login";
//        navigate('/error')
    }
    
    return Promise.reject(error);
});

