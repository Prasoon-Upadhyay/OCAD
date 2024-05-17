
import { Link } from "react-router-dom"
import { IoIosClose } from "react-icons/io";
import { useEffect, useRef } from "react";

const Hamburger = ( { isActive, setIsActive } : {isActive:boolean, setIsActive: React.Dispatch<React.SetStateAction<boolean>>}) => {
    
    
    const itemRef = useRef<HTMLUListElement| null>(null)

    useEffect( () => {

        if (isActive) {

            setTimeout( () => {

                itemRef.current?.childNodes.forEach( node => {
    
                    if (node instanceof Element)
                    {

                        node.classList.add('fadeIn')
                        node.classList.add('slideLeftAnimateText')
                    }
                })
            }, 10)
        }
 
        return () => {
            setTimeout( () => {

                itemRef.current?.childNodes.forEach( node => {
    
                    if (node instanceof Element)
                    {   
                        node.classList.remove('fadeIn')
                        node.classList.remove('slideLeftAnimateText')
                    }
                })
            }, 10)
        }

    }, [isActive])
    
    return (
        <>
            <div className='hamburger--close--container'> <IoIosClose onClick={() => {setIsActive(false)}} className='close--logo' /></div>
           
            <ul ref={itemRef} className='hamburger--items' >
                
                <Link to = '/' className='hamburger--item '>Home</Link>
                <Link to = '/' className='hamburger--item '>Dashboard</Link>
                <Link to = '/' className='hamburger--item '>Models</Link> 
                <Link to = '/' className='hamburger--item '>About Us</Link>
            </ul>
        </>
    )
}

export default Hamburger