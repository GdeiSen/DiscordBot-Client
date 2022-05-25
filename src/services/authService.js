import { useDispatch } from "react-redux";
import api from "../http";
import { setIsAuth, setIsLoading, setUser } from "../store/reducers/userSlice";
import { API_URL } from "../http";
import axios from "axios";
export default class AuthService {

    constructor() {
        this.dispatch = useDispatch();
    }

    async login(email, password) {
        try {
            const responce = await api.post('/login', { email, password });
            console.log(responce);
            localStorage.setItem('token', responce.data.accesToken);
            this.dispatch(setIsAuth(true));
            this.dispatch(setUser(responce.data.user))
        } catch (e) {
            console.log(e.response?.data?.message);
        }
    }

    async registration(email, password) {
        try {
            const responce = await api.post('/registration', { email, password });
            console.log(responce)
            localStorage.setItem('token', responce.data.accesToken);
            this.dispatch(setIsAuth(true));
            this.dispatch(setUser(responce.data.user))
        } catch (e) {
            console.log(e.response?.data?.message);
        }
    }

    async logout() {
        try {
            const responce = await api.post('/logout')
            localStorage.removeItem('token');
            this.dispatch(setIsAuth(false));
            this.dispatch(setUser(null))
        } catch (e) {
            console.log(e.response?.data?.message);
        }
    }

    async checkAuth() {
        try {
            this.dispatch(setIsLoading(true));
            const response = await axios.get(`${API_URL}/refresh`, { withCredentials: true })
            console.log(response);
            localStorage.setItem('token', response.data.accesToken);
            this.dispatch(setIsAuth(true));
            this.dispatch(setUser(response.data.user));
        } catch (e) {
            console.log(e.response?.data?.message);
        } finally {

            this.dispatch(setIsLoading(false));

        }
    }

}