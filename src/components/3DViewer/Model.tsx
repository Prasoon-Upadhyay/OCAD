
import { useGLTF } from "@react-three/drei";
import { useEffect } from "react";
import * as THREE from 'three';


export default function Model( { url } : { url : string}){

    const { scene } = useGLTF(url);
 
    useEffect(() => {
        if (scene) {
          // Adjust position and scale
          scene.position.set(0, 1, 0); // Example: Center the model
          scene.scale.set(20, 20, 20); // Example: Adjust scale if necessary
    
          // Add a box helper for visualization
 
    
          // Traverse through all meshes in the scene

          scene.traverse((object) => {
            if (object.isMesh) {
              // Apply a basic material with wireframe
              object.material = new THREE.MeshBasicMaterial({
                color: 0x00ff00,
                wireframe: true,
              });
              object.material.side = THREE.DoubleSide; // Ensure the material is double-sided 
            }
          });
        }

      }, [scene, url]);
    
    return <primitive object={scene} scale = {3} />
}