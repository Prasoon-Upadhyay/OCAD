
import { useEffect, useRef, useState } from "react";
import { Request } from "../../assets/utils/types"
import './Accordion.css'
import { readableDateGen } from "../../assets/utils/utilityMethods";

import { IoIosArrowDown } from "react-icons/io";

const Accordion = ( { request, i } : { request : Request, i: number } ) => {

    const [ isOpen, setIsOpen ] = useState<boolean>(false)
    const accRef = useRef<HTMLDivElement | null>(null)
    const accParentRef = useRef<HTMLDivElement | null>(null)

    useEffect( () => {

        const accLoadTimeout = setTimeout( () => {

            accParentRef.current?.classList.add('accFadeIn')

        },800)

        let transitionTimeout = setTimeout(() => {}, 0); 

        if (isOpen) {

            transitionTimeout = setTimeout( () => {

                accRef.current?.classList.add('pageLoad')
                
            }, 200)         
        }

        return () => {

            clearTimeout(transitionTimeout); 
            clearTimeout(accLoadTimeout); 
            accRef.current?.classList.remove('pageLoad')
            accParentRef.current?.classList.remove('accFadeIn')
        }

    }, [isOpen])

    return(
        <div ref={accParentRef} style={{'--order': i}} className={`request--accordion`}> 
            <div className="accordion--heading">
                <p>{request.modelName}</p>
                <span> <IoIosArrowDown onClick={() => {setIsOpen(!isOpen)}} className = {`accordion--arrow ${isOpen ? ' openAccordionArrow ' : ' '}`}    /> </span>
            </div>  
        
            <div ref={accRef} className={`request--details ${isOpen ? ' open--accordion  ' : ' '}`}>
                    <p>
                        {request.modelDescription}
                    </p>
                    <p>- {request.requestedBy}</p>
                    <p>{request.contact}</p>
                    <p className="request--date">{readableDateGen(new Date(request.postedOn))}</p>
                    <p className="request--status" style={{'--status--clr': request.status === "Posted" || request.status === "Seen" ? 'rgb(249, 249, 178)': 'rgb(85, 236, 123)'}}>{request.status}</p>
            </div>
        </div>
    )

}

export default Accordion