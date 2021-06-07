
import axios from "axios"
import * as actions from "../apiActions"

export const api = ({dispatch}) => next => async action => {
    if(action.type !== actions.apiCallBegan.type) return next(action)
    next(action)
    const {url, method, headers, data, onSuccess, onError} = action.payload
  
   
    
try{
    const response = await axios.request({
        url,
        method,
        headers,
        data,
        onSuccess,
        onError
        
    })
    //General
    dispatch(actions.apiCallSuccess(response.data))
    //specific
    if(onSuccess)dispatch({type: onSuccess, payload: response.data})

}catch(error){
    
    
    //general
dispatch(actions.apiCallFailed(error.response))
//specific
if(onError)dispatch({type: onError, payload: error.response})

}
   

}