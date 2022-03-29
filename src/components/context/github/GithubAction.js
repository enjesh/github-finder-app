import axios from 'axios'
const GITHUB_TOKEN = process.env.REACT_APP_GITHUB_AUTH_TOKEN
const GITHUB_URL = process.env.REACT_APP_GITHUB_URL_API

const github = axios.create({
    baseURL:GITHUB_URL,
    header:{
        Authorization:`token ${ GITHUB_TOKEN}` 
    }
})

 export const searchUsers = async (text) =>{
         
        const params = new URLSearchParams({
            q:text
        })
       const response = await github.get(`/search/users?${params}`)
       return response.data.items
    }

export const getUserandRepos = async (login) =>{
    const [user,repos] = await Promise.all([
        github.get(`users/${login}`),
        github.get(`users/${login}/repos`)
    ])

    return {user:user.data,repos:repos.data}
}
    // GET USER PROFILE
