import * as axios from "axios";


const instance = axios.default.create({
    withCredentials: true,
    baseURL: 'https://social-network.samuraijs.com/api/1.0/',
    headers: {
        "API-KEY": "e346c4e6-cb05-4091-a8ca-5562e317b58c"
    }
})

export const usersAPI = {
    getUsers(currentPage: number, pageSize: number) {
        return instance.get(`users?page=${currentPage}&count=${pageSize}`).then(response => response.data);
    },
    authMe() {
        return instance.get(`auth/me`).then(response => response.data);
    },
    follow (id: number) {
        return instance.post(`follow/${id}`).then(response => response.data);
    },
    unFollow (id: number) {
        return instance.delete(`follow/${id}`).then(response => response.data);
    }

}



