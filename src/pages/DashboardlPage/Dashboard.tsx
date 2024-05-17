import { Link } from "react-router-dom"
import Navbar from "../../components/Navbar/Navbar"
import { CiLocationArrow1 } from "react-icons/ci";
import { MdOutlinePushPin } from "react-icons/md";


import './Dashboard.css'
import { useEffect, useRef } from "react";

const DashboardPage = () => {

    const pageRef = useRef<HTMLDivElement | null>(null) 

    useEffect( () => {

        const pageTimeout = setTimeout( () => {

            pageRef.current?.classList.add('pageLoad')

        }, 800)

        return () => {
            clearTimeout(pageTimeout)
        }


    }, [])

    return (
        <div>

            <header>
                <Navbar />
            </header>

            <section ref={pageRef} className="dashboard--container">
                <div className="stats--container">
                        <div className="models--count--container">
                            <h1 className="model--count">15</h1>
                            <span>Models</span>
                            <p><Link to= "/" >Available Models<CiLocationArrow1 /> </Link></p>
                        </div>
                        <div className="requests--container">
                            <h1 className="requests--count">8</h1>
                            <span>Requests</span>
                            <p><Link to= "/" >Pending Requests <CiLocationArrow1 /></Link></p>
                        </div>
                </div>
                <div className="pinned--container">
                    <h1>Pinned</h1>
                    <p className="pinned--message">  <MdOutlinePushPin /> <Link to={"/"}> [REQUEST RESOLVED] New Model: Heat Sink </Link></p>
                    <p className="pinned--message">  <MdOutlinePushPin /> <Link to={"/"}> [REQUEST RESOLVED] New Model: Heat Sink </Link></p>
                    <p className="pinned--message">  <MdOutlinePushPin /> <Link to={"/"}> [REQUEST RESOLVED] New Model: Heat Sink </Link></p>
                </div>
            </section>
            
        </div>
    )
}

export default DashboardPage