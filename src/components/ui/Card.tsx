import { type ReactNode } from 'react'
import { cn } from '@/lib/utils'

export interface CardProps {
  children: ReactNode
  hoverable?: boolean
  clickable?: boolean
  onClick?: () => void
  className?: string
}

export default function Card({
  children,
  hoverable = false,
  clickable = false,
  onClick,
  className,
}: CardProps) {
  return (
    <div
      className={cn(
        'bg-colatech-grey-1 border border-colatech-grey-2 rounded-2xl p-4 sm:p-5 md:p-6 text-center flex flex-col items-center',
        hoverable && 'transition-all duration-200 hover:-translate-y-1 hover:border-colatech-green hover:shadow-lg',
        clickable && 'cursor-pointer',
        className
      )}
      onClick={onClick}
    >
      {children}
    </div>
  )
}
