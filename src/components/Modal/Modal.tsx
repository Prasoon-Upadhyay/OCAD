import { ReactNode, useEffect, useRef } from "react";
import ReactDOM from "react-dom";
import './Modal.css' 
import { IoCloseOutline } from "react-icons/io5";


const Modal = ( { isOpen, closeModalFn, children } : { isOpen: boolean,closeModalFn : React.Dispatch<React.SetStateAction<boolean>>, children: ReactNode } ) => {
  
    const modalRef = useRef<HTMLDivElement | null>(null)
 

    useEffect( () => {
        
        const transitionTimeout = setTimeout( () => {

            modalRef.current?.classList.add('fadeIn')

        }, 800)

        return () => {
            clearTimeout(transitionTimeout)
            modalRef.current?.classList.remove('fadeIn')
        }

    }, [isOpen] )

    if (!isOpen) return null;


    const modalRoot : Element = document.querySelector('.modal-root') as Element;

    return ReactDOM.createPortal(
        <div className="viewer--modal">
            <div ref={modalRef} className="modal--content"> 
                <span className="close--btn" onClick = {() => {closeModalFn(false)}}><IoCloseOutline/></span>
                {children} 
            </div>  
        </div>, modalRoot
    )
}

export default Modal;