
 
import { useState } from 'react'
import './SearchBar.css'
import useModel from '../../hooks/useModel'

const SearchBar = ( { children, classnames, ...rest } : { children: string, classnames ?: string } ) => {
    
    const [term, setTerm] = useState<string>('')
    const { filterModelsBySearch, getAllModels } = useModel()

    const handleChange = (e) => {

        setTerm(e.target.value)
        
        if (e.target.value === '') return getAllModels(1)
        filterModelsBySearch(e.target.value)
    }

    return <input {...rest} value={term} size={30} onChange={handleChange} className= {'input-- ' + classnames } placeholder = { children } />
}

export default SearchBar;