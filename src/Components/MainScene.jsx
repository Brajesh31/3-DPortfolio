import { Canvas } from "@react-three/fiber";
import Model1 from "./Model";
import ModelPositionUpdater from "./ModelPositionUpdater";
import Scene from "./Scene";

const MainScene = ({ 
    scrollProgress, 
    startAnimation, 
    activeSection, 
    modelPosition, 
    modelScale,
    modelRotation,
    setModelPosition,
    targetModelPosition,
    modelZIndex 
}) => {
    return (
        <div style={{ 
            position: "fixed", 
            top: 0, 
            left: 0, 
            width: "100vw", 
            height: "100vh", 
            zIndex: modelZIndex,
            pointerEvents: "none",
            transition: "z-index 1s ease-in-out" 
        }}>
            <Canvas>
                <Scene 
                    scrollProgress={scrollProgress} 
                    startAnimation={startAnimation} 
                    activeSection={activeSection} 
                    modelPosition={modelPosition} 
                />
                <Model1 
                    scrollProgress={scrollProgress} 
                    startAnimation={startAnimation} 
                    scale={modelScale} 
                    rotation={modelRotation}
                    activeSection={activeSection} 
                    position={modelPosition} 
                />
                <ModelPositionUpdater 
                    modelPosition={modelPosition} 
                    setModelPosition={setModelPosition} 
                    targetModelPosition={targetModelPosition} 
                />
            </Canvas>
        </div>
    );
};

export default MainScene; 