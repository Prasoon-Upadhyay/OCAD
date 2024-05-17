

import { useEffect, useRef, useState } from 'react';
import useModel from '../../hooks/useModel'
import TableRow from '../TableRow/TableRow'

import './Table.css'

const Table =  () => {

    const { models, getAllModels, totalDBModels } = useModel();
    const tBodyRef = useRef<HTMLTableSectionElement | null>(null)
    const [ page, setPage ] = useState<number>(1);
    
    useEffect( () => {

        getAllModels(page);

        
    }, [page]) 
    
    useEffect( () => {
        
        const transitionTimeout = setTimeout( () => {
            tBodyRef.current?.classList.add('pageLoad')
          },1000) 
       
        return () => {
            tBodyRef.current?.classList.remove('pageLoad')
            clearTimeout(transitionTimeout)  
        }

    }, [page])

    let renderedModels; 

    const btnGrp = Array(Math.ceil(totalDBModels/4)).fill(0).map( (_, i) => <td className={`grouped--btn ${i + 1}`} onClick={() => {setPage(i + 1)}}> {i + 1} </td> )
  
    if (models?.length > 0) renderedModels = models?.map( (model, i) => <TableRow model={model} index={i} />) 
    

    return (
        <>
            <tbody ref={tBodyRef}  >
                {renderedModels} 
            </tbody>
            <tfoot className='table--footer'>
                <tr className='btn--grp'>
                    {btnGrp}               
                </tr>
            </tfoot>
        </>
    )
}

export default Table