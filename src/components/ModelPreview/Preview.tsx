import { Canvas } from "@react-three/fiber"
import Model from "../3DViewer/Model"
import './Preview.css'
import { IoMdEye } from "react-icons/io";
import { useRef } from "react";

const Preview = ( { fileURL } : { fileURL: string }) => {

    const icoRef = useRef<HTMLSpanElement | null>(null)

    return (
        <div className="preview--canvas--container">
            <Canvas  className="preview--canvas"  onMouseEnter = {() => {icoRef.current?.classList.add("preview--icon--visible")} } onMouseLeave={() => {icoRef.current?.classList.remove("preview--icon--visible")} } style={{ width: '100%', height: '50vh', background: '#000' }} camera={{ position: [6, 8, 10], fov: 30}}> 
                    <ambientLight intensity={1.0} />
                    <directionalLight position={[5, 5, 5]} intensity={1.0} />
                    <pointLight position={[0, 10, 10]} intensity={0.8} />
                    <Model url={fileURL} /> 
            </Canvas>

            <span  className="preview--icon" ref={icoRef}  ><IoMdEye /></span>
        </div>
    )
}

export default Preview