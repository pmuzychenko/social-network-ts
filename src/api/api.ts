import axios from "axios"

const instance = axios.create({
    baseURL: 'https://social-network.samuraijs.com/api/1.0/',
    withCredentials: true,
    headers: {
        'API-KEY': '56856179-eee7-4c21-b727-4bf9441a8791'
    }
})


export const usersAPI = {
    getUsers(currentPage: number = 1, pageSize: number = 10) {
        return instance.get(`users?page=${currentPage}&count=${pageSize}`).then(response => {
            return response.data
        })
    },
    // auth(){
    //    return instance.get('auth/me').then(response => {
    //       return response.data
    //    })},
    unfollow(id: number) {
        return instance.delete(`follow/${id}`).then(response => {
            return response.data.resultCode
        })
    },
    follow(id: number) {
        return instance.post(`follow/${id}`).then(response => {
            return response.data.resultCode
        })
    },
    getProfile(userId: string) {
        console.warn('Deprecated method. Please use profileAPI ')
        return instance.get(`profile/${userId}`).then(response => {
            return profileAPI.getProfile(userId)
        })
    }
}
export const profileAPI = {
    getProfile(userId: string) {
        return instance.get(`profile/${userId}`).then(response => {
            return response.data
        })
    },
    getStatus(userId: string) {
        return instance.get(`profile/status/${userId}`).then(response => {
            return response.data
        })
    },
    updateStatus(status: string) {
        return instance.put(`profile/status`,{status}).then(response => {
            return response.data
        })
    }
}

export const authAPI = {
    auth() {
        return instance.get('auth/me').then(response => {
            return response.data
        })
    }
}
