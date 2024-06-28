

import { Suspense, lazy, useEffect, useRef, useState } from 'react'
import Navbar from '../../components/Navbar/Navbar'
import './RequestsPage.css' 
import Form from '../../components/Form/Form' 
import ReqSkeleton from '../../components/Placeholders/Requests/ReqSkeleton'
const Requests = lazy(() => import('./../../components/Requests/Requests'))

const RequestsPage = () => {

    const pageRef = useRef<HTMLElement | null>(null)
    const [ show, setShow ] = useState<string>("Pending") 
 
    useEffect( () => {
        
        const pageTimeout = setTimeout( () => {

            pageRef.current?.classList.add('pageLoad')

        }, 800)


        return () => {
            clearTimeout(pageTimeout)
            pageRef.current?.classList.remove('pageLoad')
        }

    }, [])

    return(
        <div>

            <header>
                <Navbar />
            </header>

            <section ref={pageRef} className='requests--container'>

                <h1 className='requests--heading'>Requests</h1>
                
                <div className='req--filters'>
                    <span className={`req--filter--span pending--reqs ${show === "Pending" ? 'active' : ''}`} onClick={() => {setShow("Pending")}}>Pending</span>
                    <span className={`req--filter--span resolved--reqs ${show === "Resolved" ? 'active' : ''}`} onClick={() => {setShow("Resolved")}}>Resolved</span>
                </div>
                <div className='requests--content'>
                    <div className='requests--accs'>
                        <Suspense fallback = {<ReqSkeleton />}>
                            <Requests show={show}/>
                        </Suspense>
                    </div>

                    <div className='request--form--container'> 
                        <Form />
                    </div>
                </div>

            </section>
        </div>
    )

}

export default RequestsPage