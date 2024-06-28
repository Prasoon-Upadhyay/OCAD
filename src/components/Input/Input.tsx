
 
import { useState } from 'react'
import './Input.css' 

interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
    children: string;
    classnames?: string;
}
const Input: React.FC<InputProps>= ( { children, classnames, ...rest }) => {
    
    const [term, setTerm] = useState<string>('') 

    const handleChange = (e) => {

        setTerm(e.target.value)
         
    }

    return <input value={term} size={30} onChange={handleChange} className= {'input-- ' + classnames } placeholder = { children }    {...rest}  />
}

export default Input;