import { makeAutoObservable } from "mobx";
import AuthService from "../service/AuthService";
import axios from "axios";

const API_URL = `http://localhost:5000/api`

export default class Store {
    user = {};
    isAuth = false;

    constructor() {
        makeAutoObservable(this);
    }

    setAuth(bool) {
        this.isAuth = bool;
    }

    setUser(user) {
        this.user = user;
    }

    async login(email, password) {
        try {
            const response = await AuthService.login(email, password);
            console.log(response);
            localStorage.setItem('token', response.data.accessToken);
            this.setAuth(true);
            this.setUser(response.data.user);

            return response
        }
        catch (e) {
            console.log(e.response?.data?.message);
        }
    }

    async registration(email, password) {
        try {
            const response = await AuthService.registration(email, password);
            console.log(response)
            localStorage.setItem('token', response.data.accessToken);
            this.setAuth(true);
            this.setUser(response.data.user)
        }
        catch (e) {
            console.log(e.response?.data?.message)
        }
    }

    async logout() {
        try {
            const response = await AuthService.logout();
            localStorage.removeItem('token');
            this.setAuth(false);
            this.setUser({})
        }
        catch (e) {
            console.log(e.response?.data?.message)
        }
    }

    async checkAuth(){
        try{
            const response = await axios.get(`${API_URL}/refresh`, {withCredentials: true})
            //console.log(response)
            localStorage.setitem('token', response.data.accessToken);
            this.setAuth(true);
            this.setUser(response.data.user);
        }
        catch(e){
            console.log(e.response?.data?.message)
        }
    }
}