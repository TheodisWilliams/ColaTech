import { type ButtonHTMLAttributes, type ReactNode } from 'react'
import { cn } from '@/lib/utils'

export interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'ghost'
  size?: 'sm' | 'md' | 'lg'
  icon?: ReactNode
  children: ReactNode
}

export default function Button({
  variant = 'primary',
  size = 'md',
  icon,
  className,
  children,
  ...props
}: ButtonProps) {
  return (
    <button
      className={cn(
        'rounded-2xl font-semibold transition-all duration-200 inline-flex items-center justify-center gap-2',
        'hover:-translate-y-0.5 active:translate-y-0 disabled:opacity-50 disabled:cursor-not-allowed',
        variant === 'primary' &&
          'bg-colatech-green text-white hover:shadow-glow-green',
        variant === 'secondary' &&
          'border-2 border-colatech-grey-2 text-colatech-grey-3 hover:border-colatech-grey-3',
        variant === 'ghost' &&
          'text-colatech-grey-3 hover:bg-colatech-grey-1',
        size === 'sm' && 'px-4 py-2 text-sm',
        size === 'md' && 'px-6 py-3 text-base',
        size === 'lg' && 'px-8 py-4 text-lg',
        className
      )}
      {...props}
    >
      {icon && <span>{icon}</span>}
      {children}
    </button>
  )
}
