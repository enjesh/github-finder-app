import {createContext,useReducer} from 'react'
import githubReducer from './GithubReducer';

const GithubContext = createContext();

export const GithubContextProvider = ({children}) =>{
   const inintialState = {
       users:[],
       user:{},
       repos:[],
       laoding:false
   }
   const [state,dispatch] = useReducer(githubReducer,inintialState)
   
    return (
        <GithubContext.Provider
        value={
        {
          ...state,
           dispatch,
        }
        }
        >
        {children}
        </GithubContext.Provider>
    )
}

export default GithubContext;