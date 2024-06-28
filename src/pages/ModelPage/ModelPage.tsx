
import { useParams } from 'react-router-dom'
import Navbar from '../../components/Navbar/Navbar'
import useModel from '../../hooks/useModel'
import { Model } from '../../assets/utils/types'

import { useEffect, useRef, useState } from 'react'
import './ModelPage.css' 
import Button from '../../components/Button/Button'
import { GoDownload } from "react-icons/go";
import Viewer from '../../components/3DViewer/Viewer'
import Modal from '../../components/Modal/Modal'
import Preview from '../../components/ModelPreview/Preview'

const ModelPage = () => {


    const { models, getModelByID } = useModel();
    const param = useParams();
    const modelID: string = param.id as string;

    const [currentModel, setCurrentModel] = useState<Model>(models.filter(model => model._id === modelID)[0])
    const [ modalOpen, setModalOpen ] = useState<boolean>(false)

    const pageRef = useRef<HTMLDivElement | null>(null)
    
    
    

    useEffect( () => {
        
        if (!currentModel) getModelByID(modelID, setCurrentModel)
        
        
    }, [models]) 
    
    useEffect( () => {

        const pageTimeout = setTimeout( () => {

            pageRef.current?.classList.add('pageLoad')
        
        }, 800)

        
        return () => {
            clearTimeout(pageTimeout)
        }


    }, [])


    const readableDateGen = (date: Date) => {
        
        const months = ['Jan', "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"]
        return `${date.getDate()} ${months[date.getMonth()]}, ${date.getFullYear()} ${date.getHours()}:${date.getMinutes()} ${date.getHours() > 12 ? 'PM' : 'AM'}`
    }   
    

    return (
        <div>
            <header>
                <Navbar />
            </header>

            <div ref={pageRef} className='model--container'>


                <div className='file--container'>

                    <div className='file--img' onClick={() => setModalOpen(true)}> 
                        {!modalOpen && currentModel ? <Preview fileURL = {`http://localhost:3000/modelFiles/${currentModel?.glbFile}`} /> : ''}
                    </div>

                    <div className='about--file'>
                            <p className='file--name'>{currentModel?.name}</p>
                            <p className='file--desc'>{currentModel?.description}</p>
                            <p className='file--size'>{currentModel?.fileSize / 1000} KB</p>
                            <p className='file--creator'>- {currentModel?.publishedBy}</p>
                            <p className='file--date'>{readableDateGen(new Date(currentModel?.postedOn))}</p>
                            <div>
                                <a href={`http://localhost:3000/modelFiles/${currentModel?.modelFile}`} download > <Button> Download <GoDownload className='download--ico'/> </Button> </a> 
                            </div>
                    </div>
 

                </div>

                <div className='threeD-viewer'>
                    <Modal isOpen = { modalOpen } closeModalFn = {setModalOpen}>
                        <Viewer fileURL = {`http://localhost:3000/modelFiles/${currentModel?.glbFile}` } /> 
                    </Modal>
                </div>

 
            </div>
        </div>
    )
}

export default ModelPage