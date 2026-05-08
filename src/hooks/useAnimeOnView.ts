import { useEffect, useRef } from 'react';
import { animate } from 'animejs';

type AnimeProps = Parameters<typeof animate>[1];

export function useAnimeOnView<T extends HTMLElement>(
  props: AnimeProps,
  initialStyle?: Partial<CSSStyleDeclaration>,
  threshold = 0.5,
) {
  const ref = useRef<T>(null);

  useEffect(() => {
    if (!ref.current) return;
    const el = ref.current;

    if (initialStyle) {
      Object.assign(el.style, initialStyle);
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          animate(el, props);
          observer.disconnect();
        }
      },
      { threshold },
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  return ref;
}
