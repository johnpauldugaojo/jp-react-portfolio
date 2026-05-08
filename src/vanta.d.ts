declare module 'vanta/dist/vanta.net.min' {
  import * as THREE from 'three';

  interface VantaOptions {
    el: HTMLElement;
    THREE: typeof THREE;
    [key: string]: any;
  }

  interface VantaEffect {
    setOptions(options: Partial<VantaOptions>): void;
    destroy(): void;
  }

  function NET(options: VantaOptions): VantaEffect;
  export default NET;
}
