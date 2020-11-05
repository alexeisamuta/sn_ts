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
    follow(id: number) {
        return instance.post(`follow/${id}`).then(response => response.data);
    },
    unFollow(id: number) {
        return instance.delete(`follow/${id}`).then(response => response.data);
    }

}

export const profileAPI = {
    getProfile(id: number) {
        return instance.get(`profile/${id}`).then(response => response.data);
    },
    getStatus(id: number) {
        return instance.get(`profile/status/${id}`).then(response => response.data);
    },
    updateStatus(status: string) {
        return instance.put(`profile/status`, {status}).then(response => response.data);
    },
    savePhoto(photoFile: string) {
        const formData = new FormData();
        formData.append("image", photoFile)
        return instance.put(`profile/photo`, formData,{headers:{"Content-Type": "multipart/form-data"}}).then(response => response.data);
    },
}

export const authAPI = {
    me() {
        return instance.get(`auth/me`).then(response => response.data);
    },
    login(email: string, password: string, rememberMe: boolean = false, captcha: string | null = null) {
        return instance.post(`auth/login`, {email, password, rememberMe, captcha}).then(response => response.data);
    },
    logout() {
        return instance.delete(`auth/login`).then(response => response.data);
    },
}

export const securityAPI = {
    getCaptchaUrl() {
        return instance.get(`security/get-captcha-url`);
    }
}



