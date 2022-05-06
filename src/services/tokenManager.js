import { useRef } from "react";
const EventEmitter = require('events');
export default class TokenManager extends EventEmitter {
    constructor() {
        super();
        this.sessionToken = null;
    }

    createToken() {
        let token = Math.random().toString(36).substr(2);
        sessionStorage.setItem('token', JSON.stringify(token));
    };

    getToken() {
        const tokenString = sessionStorage.getItem('token');
        const token = JSON.parse(tokenString);
        return token
    };

    clearToken() {
        sessionStorage.removeItem('token');
    }
}
