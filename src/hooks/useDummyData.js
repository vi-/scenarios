import { useEffect, useReducer } from "react";
import { dummyApiData } from "../assets/dummyData";

const simulatedApiCall = () => {
  return new Promise( 
    resolve => setTimeout( () => {
      resolve(dummyApiData)
    }, Math.random() * 2000 ),
    reject => reject(console.error('could not simulate fake API call...'))
  )
}

const useDummyData = () => {
  let [state, dispatch] = useReducer((state, action) => {
    switch (action.type) {
      case 'LOADING': {
        return { ...state, loading: true }
      }
      case 'RESOLVED': {
        return { ...state, loading: false, response: action.response, error: null }
      }
      case 'ERROR': {
        return { ...state, loading: false, response: null, error: action.error }
      }
      default: {
        return state
      }
    }
  }, { loading: false, response: null, error: null })

  useEffect(() => {
    let isCurrent = true

    const pretendToCallApi = async() => {
      dispatch({ type: "LOADING" })
      const fakeApiCall = simulatedApiCall().then((response) => {
        if (isCurrent) dispatch({type: "RESOLVED", response})
      }).catch(err => {
        dispatch({type: "ERROR", err})
      })
    }

    pretendToCallApi()
    
    return () => {
      isCurrent = false
    }
  }, [])

  return [state.loading, state.response, state.error]
}

export default useDummyData