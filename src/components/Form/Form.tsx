

import { useState } from 'react'
import Input from '../Input/Input'
import './Form.css'
import Textarea from '../Input/Textarea';
import Button from '../Button/Button';
import useRequest from '../../hooks/useRequests';
import { BsPatchCheckFill } from "react-icons/bs";
import { MdError } from "react-icons/md";

import useError from '../../hooks/useError';

const Form = () => {

    const [step, setStep] = useState<number>(1); 
    const [modelName, setModelName] = useState<string>('')
    const [modelDesc, setModelDesc] = useState<string>('')
    const [formSubmitted, setFormSubmitted] = useState<boolean>(false)

    const { error } = useError();

    const { postNewRequest } = useRequest();

    const handleSubmit = async (event) => { 

        event.preventDefault();
        
        const obj = {
            modelName,
            modelDescription: modelDesc,
            requestedBy: event.target[0].value || undefined,
            contact: event.target[1].value || undefined
        }
         

        const success = await postNewRequest(obj)

        if (success) setFormSubmitted(true)
    }
    console.log(error);
    
    let stepForm =(
     step === 1 ?
    <div className='step--one--form'>
        <h1>Drop a request.</h1>
        { error.code !== 200 ? <div className = 'err--label' >{error.message.split('.').map( msg => <p> <MdError className='error--icon' /> {msg}</p>)}</div> : ''}
        <Input  value={modelName} onChange = {(e) => {setModelName(e.target.value)} } >Model Name</Input>
        <Textarea  value={modelDesc} onChange = {(e) => {setModelDesc(e.target.value)} }>Model Description</Textarea>
        <div>
            <Button onClick={() => {setStep(2)}} type = {"button"} >Next</Button>
        </div>
    </div> 

    :

    <div className='step--one--form'>
        <h1>Drop a request.</h1>
        { error.code !== 200 ? <div className = 'err--label' >{error.message.split('.').map( msg => <p> <MdError className='error--icon' /> {msg}</p>)}</div> : ''}
        <Input >Your Full Name</Input>
        <Input >Contact Info</Input>
        <div className='form--two--btns'>
            <Button type='button' onClick={() => {setStep(1)}} >Back</Button>                
            <Button>Submit</Button>
        </div>
    </div>)


    if (formSubmitted) {

        stepForm = 
        <div className='ack--container'>
            <span> <BsPatchCheckFill/> </span>
            <h1> Request Sent</h1>
        </div>
    }

    return (
        <form className='request--form' onSubmit = {handleSubmit} >

            {stepForm}
            <div className={`steps ${formSubmitted ? ' hidden ' : ' '}`}>
                <div className = {`step--one ${step === 1 ? 'active--step' : ' '}`} > 
                    <div className='step '> 
                    </div>
                    <span>Model Description</span>
                </div>
                <div className ={`step--two ${step === 2 ? 'active--step' : ' '}`} > 
                    <div className='step '>  
                    </div>
                    <span>About You</span>
                </div>
            </div>
        </form>
    )
}

export default Form