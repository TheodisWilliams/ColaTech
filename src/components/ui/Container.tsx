import { type ReactNode } from 'react'
import { cn } from '@/lib/utils'

export interface ContainerProps {
  children: ReactNode
  className?: string
}

export default function Container({ children, className }: ContainerProps) {
  return (
    <div className={cn('container mx-auto px-4 max-w-7xl', className)}>
      {children}
    </div>
  )
}
