import axios from "axios"

export const auth = {
    state: {
        token: null,
        user: null
    },
    mutations: {
        SET_AUTHENTICATION(state, loginResponse) {
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
                })
                .catch((response) => {
                    console.error('response', response)
                    commit('SET_AUTHENTICATION', null)
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
                })
                .catch((response) => {
                    console.error('response', response)
                    commit('SET_USER', null)
                })
        }
    },
    getters: {
        isAuthenticated: state => state.authenticated,
        accessToken: state => state.token ? state.token.access_token : null
    }
}
