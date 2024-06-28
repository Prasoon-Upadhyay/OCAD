
import { Canvas } from "@react-three/fiber"
import { OrbitControls } from "@react-three/drei"
import Model from "./Model"
import { useState } from "react"
import Button from "../Button/Button"

import './Viewer.css'
import CustomCamera from "../CCamera/CCamera"

export default function Viewer ( { fileURL } : { fileURL : string } ) {

 
    
    const [ controls, setControls ] = useState({
        axes: true,
        grid: true,
        zoom: 40
    }) 
    

    return (
       
        <>
        <div className="viewer--controls">
            <div className=" control--area">
                <p>Grid</p>
                <Button classnames={ controls.grid ? ' invert--clrs btn--toggle' : ' btn--toggle'} onClick={() => { setControls({...controls, grid: true})}} > On</Button>
                <Button classnames={ !controls.grid ? ' invert--clrs btn--toggle' : 'btn--toggle '} onClick={() => { setControls({...controls, grid: false})}} > Off</Button>
            </div>
            <div className="control--area " >
                <p>Axes</p>
                <Button classnames={ controls.axes ? ' invert--clrs btn--toggle' : ' btn--toggle'} onClick={() => { setControls({...controls, axes: true})}} > On</Button>
                <Button classnames={ !controls.axes ? ' invert--clrs btn--toggle' : 'btn--toggle '} onClick={() => { setControls({...controls, axes: false})}} > Off</Button>
            </div>

            <div className="slider--range">
                <label htmlFor="FOVSlider">Field of View</label>
                <input value={controls.zoom} onChange={(e) => setControls({...controls, zoom: parseInt(e.target.value)})} type={"range"} id="FOVSlider"/>
            </div>
        </div> 

        <Canvas style={{ width: '100%', height: '50vh', background: '#000' }} camera={{ position: [6, 8, 10], fov: controls.zoom }}> 

                <ambientLight intensity={1.0} />
                <directionalLight position={[5, 5, 5]} intensity={1.0} />
                <pointLight position={[0, 10, 10]} intensity={0.8} />
                <Model url={fileURL} />
                <OrbitControls />
                <CustomCamera zoom={controls.zoom} />
                {controls.axes ? <axesHelper args={[5]} /> : ''}
                {controls.grid ? <gridHelper args={[10, 10]} /> : ''}
        </Canvas>
        </>
    )
}
 