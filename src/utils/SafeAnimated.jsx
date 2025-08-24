import { useEffect, useState } from 'react';

export const SafeAnimated = () => {
  const [SafeAnimated, setSafeAnimated] = useState({
    ambientLight: 'ambientLight',
    directionalLight: 'directionalLight',
    group: 'group',
    mesh: 'mesh',
  });

  useEffect(() => {
    let mounted = true;
    import('@react-spring/three')
      .then((mod) => {
        if (mounted) {
          setSafeAnimated({
            ambientLight: mod.a.ambientLight,
            directionalLight: mod.a.directionalLight,
            group: mod.a.group,
            mesh: mod.a.mesh,
          });
        }
      })
      .catch((err) => {
        console.error('Failed to load @react-spring/three:', err);
      });

    return () => {
      mounted = false;
    };
  }, []);

  return SafeAnimated;
};
