declare module 'keen-slider/react' {
  import { RefObject } from 'react'
  
  export function useKeenSlider<T extends HTMLElement = HTMLDivElement>(
    options?: any
  ): [RefObject<T>, KeenSliderInstance]
  
  interface KeenSliderInstance {
    // Thêm các phương thức và thuộc tính của KeenSliderInstance nếu cần
  }
}