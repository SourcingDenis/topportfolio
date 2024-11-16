import { SpacingConfig } from '@/types/spacing'

type SectionType = 'header' | 'content' | 'footer' | 'features' | 'testimonials' | 'contact' | 'projects' | 'project-detail'

const spacingPresets: Record<SectionType, SpacingConfig> = {
  header: {
    base: 'space-y-6 md:space-y-8 lg:space-y-10',
    dense: 'space-y-4 md:space-y-6 lg:space-y-8',
    sparse: 'space-y-8 md:space-y-10 lg:space-y-12'
  },
  content: {
    base: 'space-y-8 md:space-y-12 lg:space-y-16',
    dense: 'space-y-6 md:space-y-8 lg:space-y-12',
    sparse: 'space-y-12 md:space-y-16 lg:space-y-20'
  },
  footer: {
    base: 'space-y-6',
    dense: 'space-y-4',
    sparse: 'space-y-8'
  },
  features: {
    base: 'space-y-8 md:space-y-12 lg:space-y-16',
    dense: 'space-y-6 md:space-y-8 lg:space-y-12',
    sparse: 'space-y-10 md:space-y-14 lg:space-y-18'
  },
  testimonials: {
    base: 'space-y-12',
    dense: 'space-y-8',
    sparse: 'space-y-16'
  },
  contact: {
    base: 'space-y-6 md:space-y-8',
    dense: 'space-y-4 md:space-y-6',
    sparse: 'space-y-8 md:space-y-10'
  },
  projects: {
    base: 'space-y-8 md:space-y-12',
    dense: 'space-y-6 md:space-y-8',
    sparse: 'space-y-12 md:space-y-16'
  },
  'project-detail': {
    base: 'space-y-10 md:space-y-14',
    dense: 'space-y-8 md:space-y-10',
    sparse: 'space-y-12 md:space-y-16'
  }
}

export function useSpacingPresets(sectionType: SectionType): SpacingConfig {
  return spacingPresets[sectionType]
}
