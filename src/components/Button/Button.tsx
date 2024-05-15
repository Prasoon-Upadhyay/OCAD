import { ReactNode } from "react"

import './Button.css'
const Button = ( { children, classnames } : { children : ReactNode, classnames ?: string } ) => {

    return <button className={`btn ${classnames}`}>{children}</button>
}

export default Button