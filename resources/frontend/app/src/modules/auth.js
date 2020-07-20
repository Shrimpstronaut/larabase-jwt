import axios from "axios"

export const auth = {
    state: {
        token: JSON.parse(localStorage.getItem('token')),
        user: null
    },
    mutations: {
        SET_AUTHENTICATION(state, loginResponse) {
            if (loginResponse) localStorage.setItem('token', JSON.stringify(loginResponse))
            state.token = loginResponse
        },
        SET_USER(state, profileResponse) {
            state.user = profileResponse
        }
    },
    actions: {
        login({commit}, credentials) {
            return axios.post('/api/auth/login', credentials)
                .then((response) => {
                    console.log('response', response)
                    commit('SET_AUTHENTICATION', response.data)
                    return response.data
                })
                .catch((response) => {
                    console.error('response', response)
                    commit('SET_AUTHENTICATION', null)
                    throw response
                })
        },
        logout({commit, getters}) {
            let headers = getters.accessToken ? {
                'Authorization': 'bearer ' + getters.accessToken
            } : {}

            return axios.post('/api/auth/logout', {}, {headers: headers})
                .then((response) => {
                    console.log('response', response)
                    commit('SET_AUTHENTICATION', null)
                    commit('SET_USER', null)
                    localStorage.removeItem('token')
                    return response.data
                })
                .catch((response) => {
                    console.error('response', response)
                    throw response
                })
        },
        fetchUser({commit, getters}) {
            let headers = getters.accessToken ? {
                'Authorization': 'bearer ' + getters.accessToken
            } : {}

            return axios.get('/api/auth/profile', {headers: headers})
                .then((response) => {
                    console.log('response', response)
                    commit('SET_USER', response.data)
                    return response.data
                })
                .catch((response) => {
                    console.error('response', response)
                    commit('SET_USER', null)
                    throw response
                })
        }
    },
    getters: {
        isAuthenticated: state => state.token !== null,
        accessToken: state => state.token ? state.token.access_token : null,
        user: state => state.user
    }
}
