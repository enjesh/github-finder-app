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

// const getUserandRepo = async (login) =>{
//     const [user,repos] = await Promise.all([
//         github.get(`users/${login}`),
//         github.get(`users/${login}/repos`)
//     ])

//     return {user:user.data,repos:repos.data}
// }
    // GET USER PROFILE
   export const getUser = async (login) =>{
         const ac = new AbortController(); 
       
        const response = await fetch(`${GITHUB_URL}/users/${login}`,{
            headers:{
                Authorization:`token ${GITHUB_TOKEN}`
            },
            signal:ac.signal
        })
        if(response.status===404){
            window.location = '/notfound'
        }else{

            const data = await response.json()
            return data
        }
    }
      // Get User Repo
   export const getUserRepo = async (login) =>{
          const params = new URLSearchParams({
            sort:"created",
            per_page:10

        })
        const ac = new AbortController(); 
        const response = await fetch(`${GITHUB_URL}/users/${login}/repos?${params}}`,{
            headers:{
                Authorization:`token ${GITHUB_TOKEN}`
            },
             signal:ac.signal
        })
        const data = await response.json()
        return data
       
    }