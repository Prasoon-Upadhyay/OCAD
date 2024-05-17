
 
import { useState } from 'react'
import './Input.css'
import useModel from '../../hooks/useModel'

const Input = ( { children, classnames } : { children: string, classnames ?: string } ) => {
    
    const [term, setTerm] = useState<string>('')
    const { filterModelsBySearch, getAllModels } = useModel()

    const handleChange = (e) => {

        setTerm(e.target.value)
        
        if (e.target.value === '') return getAllModels(1)
        filterModelsBySearch(e.target.value)
    }

    return <input value={term} size={30} onChange={handleChange} className= {'input-- ' + classnames } placeholder = { children } />
}

export default Input