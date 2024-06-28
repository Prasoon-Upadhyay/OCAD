 
import './Textarea.css'

interface TAProps extends React.TextareaHTMLAttributes<HTMLTextAreaElement> {
    children: string;
    classnames?: string;
  }

const Textarea : React.FC<TAProps> = ( { children, ...rest } ) => {
    return (
        <textarea {...rest} className='--textarea' placeholder = {children}  />
    )
}

export default Textarea