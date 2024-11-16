import { clsx, type ClassValue } from "clsx"
import { twMerge } from "tailwind-merge"

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

// Image optimization utility
export const getImageProps = (
  src: string,
  alt: string,
  className?: string,
  priority: boolean = false
) => ({
  src,
  alt,
  className,
  loading: priority ? "eager" : "lazy",
  decoding: priority ? "sync" : "async",
  ...(className && { className }),
})

// Placeholder image while loading
export const getPlaceholderStyles = (blur: boolean = true) => ({
  style: {
    backgroundColor: "#f3f4f6",
    filter: blur ? "blur(8px)" : "none",
    transition: "filter 0.3s ease-out",
  },
})

// Optimize animation settings for better performance
export const optimizedAnimationSettings = {
  initial: { opacity: 0 },
  whileInView: { opacity: 1 },
  viewport: { once: true, margin: "100px" },
  transition: { 
    duration: 0.5,
    ease: [0.4, 0, 0.2, 1],
  }
}

// Debounce function for performance optimization
export function debounce<T extends (...args: any[]) => any>(
  func: T,
  wait: number
): (...args: Parameters<T>) => void {
  let timeoutId: ReturnType<typeof setTimeout>
  return function (this: any, ...args: Parameters<T>) {
    clearTimeout(timeoutId)
    timeoutId = setTimeout(() => func.apply(this, args), wait)
  }
}
