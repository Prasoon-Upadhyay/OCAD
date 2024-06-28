import { useRef, useEffect } from 'react';
import { useThree, useFrame } from '@react-three/fiber';

function CustomCamera({ zoom } : { zoom : number }) {
  const { camera } = useThree();
  const cameraRef = useRef(camera);

  useEffect(() => {
    cameraRef.current.fov = zoom;
    cameraRef.current.updateProjectionMatrix();
  }, [zoom]);

  useFrame(() => {
    cameraRef.current.updateProjectionMatrix();
  });

  return null;
}

export default CustomCamera;
