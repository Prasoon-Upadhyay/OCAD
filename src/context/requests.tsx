
import { ReactNode, createContext, useState } from "react";
import { Request } from "../assets/utils/types";
import axios from "axios";
import useError from "../hooks/useError";


type GlobalRequests = {

    requests: Request[] | [],

    setRequests: React.Dispatch<React.SetStateAction<Request[] | []>>

    getAllRequests: (page: number, show: string) => void,
    postNewRequest: (data : {modelName: string, modelDescription: string, requestedBy: string, contactInfo: string }) => Promise<boolean>
}


const RequestContext = createContext<GlobalRequests>({

    requests:[],

    setRequests: () => {},

    getAllRequests: () => {},
    postNewRequest: () => Promise.reject()

})


export default function RequestProvider( { children } : { children : ReactNode }){
    

    const [ requests, setRequests ] = useState<Request[] | [] >([])

    const { globalErrorHandler } = useError();


    const URL = 'http://localhost:3000/api/v1';

    const getAllRequests = async (page: number, show: string) => {


        try {
            const response = await axios({
                url: `${URL}/requests?page=${[page]}&show=${show}`,
                method: "GET",
                headers: {
                    'Content-Type': 'application/json'
                }
                
            })
    
            setRequests(response.data.requests);
        }

        catch (e) {
            console.log(e);
            
        }

    }

    const postNewRequest = async (data : {modelName: string, modelDescription: string, requestedBy: string, contactInfo: string }) => {

        try {

            const response = await axios({
                url: `${URL}/requests`,
                method: "POST",
                data,
                headers: {
                    'Content-Type': "application/json"
                }
            })

            if (response.status === 201) {
                return true
            }

            return false;
            
        }

        catch (e: Error ) {
            globalErrorHandler(e)
            return false;
        }

    }
  

    return <RequestContext.Provider value={{requests, setRequests, getAllRequests, postNewRequest}}>
        { children }
    </RequestContext.Provider>

}

export { RequestContext };