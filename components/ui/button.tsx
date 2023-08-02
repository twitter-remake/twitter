import cn from 'clsx'
import type { ComponentPropsWithRef } from 'react'
import { forwardRef } from 'react'
import IconComponent, { type Icon } from '../icons/icons'

type ButtonProps = ComponentPropsWithRef<'button'> & {
  variant?: 'primary' | 'secondary' | 'outline'
  icon?: Icon
  loading?: boolean
}

export const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  (
    { variant = 'primary', loading, icon, children, className, ...props },
    ref
  ) => {
    return (
      <button
        ref={ref}
        className={cn(
          className,
          'flex items-center justify-center w-72 min-w-[32px] max-w-xs min-h-[32px] p-2 rounded-full transition-colors duration-150',
          {
            'bg-secondary-light hover:bg-secondary-light-200':
              variant === 'secondary',
            'bg-primary-blue hover:bg-primary-dark-blue': variant === 'primary',
            'bg-transparent border border-secondary-light-400 hover:bg-primary-blue hover:bg-opacity-10':
              variant === 'outline',
          }
        )}
        {...props}
      >
        {icon && (
          <span className="mr-2">
            <IconComponent icon={icon} className="w-5 h-5" />
          </span>
        )}

        <span
          className={cn('font-bold', {
            'text-secondary-black': variant === 'secondary',
            'text-secondary-white': variant === 'primary',
            'text-primary-blue': variant === 'outline',
          })}
        >
          {children}
        </span>
      </button>
    )
  }
)
