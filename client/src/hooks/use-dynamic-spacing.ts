import { useEffect, useState } from 'react'

type SpacingConfig = {
  base: string
  dense: string
  sparse: string
}

export function useDynamicSpacing(
  elementRef: React.RefObject<HTMLElement>,
  config: SpacingConfig = {
    base: 'space-y-8',
    dense: 'space-y-4',
    sparse: 'space-y-12'
  }
) {
  const [spacing, setSpacing] = useState(config.base)

  useEffect(() => {
    const calculateDensity = () => {
      const element = elementRef.current
      if (!element) return

      // Calculate content density based on child elements and container height
      const childCount = element.children.length
      const containerHeight = element.getBoundingClientRect().height
      const densityRatio = childCount / (containerHeight / 100) // Normalize by container height

      // Adjust spacing based on density ratio
      if (densityRatio > 0.8) {
        setSpacing(config.dense)
      } else if (densityRatio < 0.3) {
        setSpacing(config.sparse)
      } else {
        setSpacing(config.base)
      }
    }

    calculateDensity()
    
    // Recalculate on resize
    const observer = new ResizeObserver(calculateDensity)
    if (elementRef.current) {
      observer.observe(elementRef.current)
    }

    return () => {
      if (elementRef.current) {
        observer.unobserve(elementRef.current)
      }
    }
  }, [config])

  return spacing
}
