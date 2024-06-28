import { Suspense, lazy, useEffect, useRef } from "react"
import Navbar from "../../components/Navbar/Navbar" 

import './AllModelsPage.css'
import { FaExternalLinkAlt } from "react-icons/fa";
import { Link } from "react-router-dom"
import SearchBar from "../../components/Input/SearchBar"
import ModelSkeleton from "../../components/Placeholders/Models/ModelSkeleton";

const Table = lazy(() => import('./../../components/Table/Table'))


const AllModelsPage = () => {


    const pageRef = useRef<HTMLElement | null>(null)

 
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

        <section ref={pageRef} className="models--container ">
            
            <h1 className="models--container--heading">Models</h1>
            
            <div className="table--ops--container">
                <SearchBar classnames="table--search">Search...</SearchBar> 
            
            </div>
            <table className="model--table">
                <thead>
                    <tr className="table--headings">
                        <th>Name</th>
                        <th>Description</th>
                        <th  className="no--mobile">Created By</th>
                        <th >Posted On</th>
                    </tr>
                </thead>
                
                <Suspense fallback = {<tbody><ModelSkeleton /> </tbody>} > 
                    <Table />
                </Suspense>
            </table>

            <div className="redirect--container">
                    <p className="redirect--sub">
                        Can't find what
                        you're looking for? 
                    </p>
                     
                    <Link to = "/requests"><p>Drop a request <FaExternalLinkAlt /> </p></Link>
            </div>
        </section>
                

    </div>
    )
}

export default AllModelsPage