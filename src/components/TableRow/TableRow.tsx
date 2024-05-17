
import { useEffect, useRef } from "react"
import { Model } from "../../assets/utils/types"
import './TableRow.css'
import { Link } from "react-router-dom"

import { TbExternalLink } from "react-icons/tb";


const TableRow = ( { model, index } : { model: Model, index: number } ) => {

    const tRowRef = useRef<HTMLTableRowElement | null>(null)

    const readableDateGen = (date: Date) => {
        
      const months = ['Jan', "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"]
      return `${date.getDate()} ${months[date.getMonth()]}, ${date.getFullYear()} ${date.getHours()}:${date.getMinutes()} ${date.getHours() > 12 ? 'PM' : 'AM'}`
  } 

    useEffect( () => {

      const rowTimeout = setTimeout( () => {

          tRowRef.current?.classList.add('dropFade')

      }, 500)

      return () => {
        clearTimeout(rowTimeout)
      }

    }, [])
 

    return (
    <tr ref={tRowRef} className="table--row" style={{'--order': index}} key={index}>
        <td><Link to = {`/models/${model._id}`}>{model.name} <span><TbExternalLink /></span>  </Link></td>
        <td>{model.description || 'No Description'}</td>
        <td className="no--mobile">{model.publishedBy}</td>
        <td>{readableDateGen(new Date(model.postedOn))}</td>
    </tr>

  )
}

export default TableRow