import { useFrame } from "@react-three/fiber";
import { Vector3 } from "three";

const ModelPositionUpdater = ({ modelPosition, setModelPosition, targetModelPosition }) => {
    useFrame(() => {
        const currentModelPosition = new Vector3(...modelPosition);
        currentModelPosition.lerp(targetModelPosition.current, 0.1);
        setModelPosition(currentModelPosition.toArray());
    });
    return null;
};

export default ModelPositionUpdater; 