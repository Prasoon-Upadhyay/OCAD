import { useEffect, useState } from "react";
import useRequest from "../../hooks/useRequests"
import Accordion from "../Accordion/Accordion";  
import EmptyBox from './../../assets/emptyBox.png'
import './Requests.css'


const Requests = ( { show } : { show: string }) => {

    const { requests, getAllRequests } = useRequest();
    const [ page, setPage ] = useState<number>(1)

    
    useEffect( () => {
        
        getAllRequests(page, show)

    }, [page, show ])


    const renderedReqs = requests.map( (request, index ) => <Accordion request={request} i = { index + 1 } /> )

    if (renderedReqs.length === 0)  
        {
            return <div className="empty--reqs">
                <img className="empty--img" src = {EmptyBox}/>
                <h1>No Requests </h1>
            </div>
        }
    
    return (
        <>
            {renderedReqs}
        </>
    )
}

export default Requests