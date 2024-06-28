
import './ModelSkeleton.css'

const ModelSkeleton = () => {


    const skeletons = Array(3).fill(0).map(ske => 
        <tr className="model--skeleton">
            <td className='skeleton--item sItem--1'></td>
            <td className='skeleton--item sItem--2'></td>
            <td className='skeleton--item sItem--3'></td>
            <td className='skeleton--item sItem--4'></td>
        </tr>)

console.log(skeletons);

    return skeletons
}

export default ModelSkeleton