import { Canvas, useThree } from "@react-three/fiber";
import { Suspense, useEffect } from "react";

const CameraControl = () => {
    const { camera } = useThree();
    useEffect(() => {
        camera.fov = 75;
        camera.updateProjectionMatrix();
        camera.position.set(10, 6, 25);
        camera.lookAt(8, 4, -2);
        camera.far = 500;
        camera.near = 0.1;
    }, [camera]);
    return null;
};

const NameScene = ({ LazyName, fadeOpacity }) => {
    return (
        <div style={{
            position: "absolute",
            top: "5%",
            width: "100vw",
            height: "100vh",
            zIndex: 3000,
            opacity: fadeOpacity,
            transition: "opacity 2s ease-in-out"
        }}>
            <Canvas style={{ width: "100%", height: "100%" }}>
                <Suspense fallback={null}>
                    <LazyName position={[10, 3, 2]} />
                </Suspense>
                <CameraControl />
            </Canvas>
        </div>
    );
};

export default NameScene; 