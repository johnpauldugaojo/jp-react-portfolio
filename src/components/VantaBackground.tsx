import { useEffect, useRef } from 'react';
import * as THREE from 'three';
// @ts-ignore
import NET from 'vanta/dist/vanta.net.min';
import { useTheme } from '../hooks/useTheme';

const DARK_BG = 0x23153c;
const LIGHT_BG = 0xf8fafc;
const DARK_COLOR = 0xff3f81;
const LIGHT_COLOR = 0x6366f1;

// THREE.VertexColors was removed in r125 but Vanta still references it.
// Use a Proxy so we don't mutate the sealed ES module namespace.
const patchedTHREE = new Proxy(THREE as any, {
  get(target, prop) {
    if (prop === 'VertexColors') return true;
    return target[prop];
  },
});

const VantaBackground: React.FC = () => {
  const vantaRef = useRef<HTMLDivElement>(null);
  const vantaEffect = useRef<any>(null);
  const { theme } = useTheme();

  useEffect(() => {
    if (!vantaRef.current) return;

    if (vantaEffect.current) {
      vantaEffect.current.destroy();
      vantaEffect.current = null;
    }

    vantaEffect.current = NET({
      el: vantaRef.current,
      THREE: patchedTHREE,
      mouseControls: true,
      touchControls: true,
      gyroControls: false,
      minHeight: 200.0,
      minWidth: 200.0,
      scale: 1.0,
      scaleMobile: 1.0,
      color: theme === 'dark' ? DARK_COLOR : LIGHT_COLOR,
      backgroundColor: theme === 'dark' ? DARK_BG : LIGHT_BG,
      points: 10.0,
      maxDistance: 22.0,
      spacing: 18.0,
    });

    return () => {
      if (vantaEffect.current) {
        vantaEffect.current.destroy();
        vantaEffect.current = null;
      }
    };
  }, [theme]);

  return (
    <div
      ref={vantaRef}
      className='fixed inset-0 -z-10'
      style={{ backgroundColor: theme === 'dark' ? '#23153c' : '#f8fafc' }}
    />
  );
};

export default VantaBackground;
