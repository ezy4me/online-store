// import {  $host } from "./index";

// export const registration = async (Email, Password) => {
//     const response = await $host.post('api/auth/registration', {Email, Password, Role: 'USER'})
//     return response
// }

// export const login = async (Email, Password) => {
//     const response = await $host.post('api/auth/login', {Email, Password})
//     return response
// }

// export const check = async () => {
//     const response = await $host.post('api/auth/registration')
//     return response
// }

import { LoginAPIInstatnce, DefaultAPIInstatnce } from "./index";

export const AuthAPI = {
    login(Email, Password) {
        const url = 'api/user/login'
        const data = {Email, Password}
        console.log(data);
        return LoginAPIInstatnce.post(url, data)
    },

    logout() {
        const url = 'api/user/login'
        return DefaultAPIInstatnce.post(url)
    }
}