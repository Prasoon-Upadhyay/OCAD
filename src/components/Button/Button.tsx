import { ReactNode } from "react"


interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
    children: ReactNode;
    classnames?: string;
  }
  
import './Button.css'
const Button: React.FC<ButtonProps> = ( { children, classnames, ...rest}) => {
  

    return <button  {...rest} className={`btn ${classnames}`}>{children}</button>
}

export default Button