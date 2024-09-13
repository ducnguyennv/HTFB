declare module 'react-lazy-load-image-component' {
  import { ComponentType, ImgHTMLAttributes } from 'react';

  export interface LazyLoadImageProps extends ImgHTMLAttributes<HTMLImageElement> {
    effect?: string;
    afterLoad?: () => void;
    beforeLoad?: () => void;
    scrollPosition?: { x: number; y: number };
    visibleByDefault?: boolean;
    wrapperClassName?: string;
    useIntersectionObserver?: boolean;
    threshold?: number;
  }

  export const LazyLoadImage: ComponentType<LazyLoadImageProps>;
}