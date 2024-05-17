import { Suspense, lazy, useEffect, useRef } from "react"
import Navbar from "../../components/Navbar/Navbar" 

import './AllModelsPage.css'
import Button from "../../components/Button/Button"
import Input from "../../components/Input/Input"
import { MdFilterAlt } from "react-icons/md";

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
                <Input classnames="table--search">Search...</Input> 
            
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
                
                <Suspense fallback = {<tbody><tr><td>Fetching...</td></tr></tbody>} >
                    <Table />
                </Suspense>
            </table>

            <div className="redirect--container">
                    <p className="redirect--sub">
                        Can't find what
                        you're looking for? 
                    </p>
                    <p>Drop a request.</p>
                    <Button classnames="req--btn">Request</Button>
            </div>
        </section>
                

    </div>
    )
}

export default AllModelsPage