import { Link } from "react-router-dom"
import Navbar from "../../components/Navbar/Navbar"
import { CiLocationArrow1 } from "react-icons/ci";
import { MdOutlinePushPin } from "react-icons/md";
import Document from './../../assets/document.png'

import './Dashboard.css'
import { useEffect, useRef, useState } from "react";
import axios from "axios"; 

 

const DashboardPage = () => {

    const pageRef = useRef<HTMLDivElement | null>(null) 
 
    const [docCount, setDocCount] = useState<{
        models: number,
        requests: number
    }>
    ({
        models: 0,
        requests: 0
    })

    const [ pinnedMessages, setPinnedMessages ] = useState<{
        message: string,
        model: string,
        postedOn: Date,
        _id: string
    }[] | []> ([])

    const URL = 'http://localhost:3000/api/v1'

    const modelAndRequestCount = async () => {

    
        try {
            const response = await axios({
                url: `${URL}/requests/modelAndRequest/count`,
                method: "GET",
                headers: {
                    'Content-Type': 'application/json'
                }
            })
            
            setDocCount({
                models: response.data.modelCount,
                requests: response.data.requestCount
            })
            
        }
        
    
        catch (e) {
            console.log(e);
            
        }
    
    }

    const getAllPinned = async () => { 
    
        try {
            const response = await axios({
                url: `${URL}/pinned`,
                method: "GET",
                headers: {
                    'Content-Type': 'application/json'
                }
            })
             
            setPinnedMessages(response.data.pinnedMessages)
             
        } 
    
        catch (e) {
            console.log(e);
        }
            
    }

    useEffect( () => {
        
        modelAndRequestCount();
        getAllPinned();

        const pageTimeout = setTimeout( () => {

            pageRef.current?.classList.add('pageLoad')

        }, 800)

        return () => {
            clearTimeout(pageTimeout)
        }

    }, [])

    const renderedMessages = pinnedMessages.map(msg =>  <p className="pinned--message">  <MdOutlinePushPin /> <Link to={`/models/${msg.model}`}>{msg.message}</Link></p>)




    return (
        <div>

            <header>
                <Navbar />
            </header>

            <section ref={pageRef} className="dashboard--container">
                <div className="stats--container">
                        <div className="models--count--container">
                            <h1 className="model--count">{docCount.models}</h1>
                            <span>Models</span>
                            <p><Link to= "/models" >Available Models<CiLocationArrow1 /> </Link></p>
                        </div>
                        <div className="requests--count--container">
                            <h1 className="requests--count">{docCount.requests}</h1>
                            <span>Requests</span>
                            <p><Link to= "/requests" >To Requests <CiLocationArrow1 /></Link></p>
                        </div>
                </div>
                <div className="pinned--container">
                    <h1>Pinned</h1>
                    {renderedMessages.length === 0 ? 
                    <div className="empty--msgs">
                        <img src={Document} />
                        <p>No Messages</p>
                    </div>
                         :
                         renderedMessages}

                </div>
            </section>
            
        </div>
    )
}

export default DashboardPage