
import { ReactNode, createContext, useState } from "react";

import { ErrorInterface } from "../assets/utils/types";
import { AxiosError } from "axios";

type GlobalError = {

    error: ErrorInterface,

    setError: React.Dispatch<React.SetStateAction<ErrorInterface>>

    globalErrorHandler: (error : Error) => void
}


export const ErrorContext = createContext<GlobalError>({
    
    error: {
        message: '',
        code: 400,
        type: '',
        timestamp: null,
    },

    setError: () => {},

    globalErrorHandler: () => {}
})



export default function ErrorProvider ( { children } : { children: ReactNode } ) {

    const [error, setError] =  useState<ErrorInterface>({
        message: '',
        code: 200,
        type: '',
        timestamp: null,
    })

    const globalErrorHandler = ( err: AxiosError ) => {
 
        console.log(err);
        
        if (err.response.data.error.statusCode === 400) 
        { 
            
                setError({
                type: "ValidationError",
                code: 400,
                message: err.response.data.message,
                timestamp: new Date(Date.now())
            })
        }
          
    } 


    return <ErrorContext.Provider value = { {error, setError, globalErrorHandler} }>
        { children }
    </ErrorContext.Provider>

}

