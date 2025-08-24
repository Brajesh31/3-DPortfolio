import { useFrame, useThree } from "@react-three/fiber";
import { useRef } from "react";
import { Vector3 } from "three";
import ClientOnly from "./ClientOnly";

const SceneContent = ({ scrollProgress, startAnimation, activeSection, modelPosition }) => {
    const { camera } = useThree();
    const targetCameraPosition = useRef(new Vector3(0, 4, 5));

    useFrame(() => {
        if (camera && targetCameraPosition.current) {
            camera.position.lerp(targetCameraPosition.current, 0.1);
            if (modelPosition) {
                camera.lookAt(...modelPosition);
            }
        }
    });

    return (
        <>
            {/* Use regular Three.js components instead of SafeAnimated */}
            <ambientLight intensity={1.2} />
            <directionalLight position={[2, 2, 2]} intensity={1.2} />
        </>
    );
};

// Wrap the component with ClientOnly to prevent SSR issues
const Scene = (props) => (
    <ClientOnly>
        <SceneContent {...props} />
    </ClientOnly>
);

export default Scene;