import type { ComponentPropsWithRef } from 'react'
import { forwardRef } from 'react'
import cn from '../../lib/cn'
import Icon, { type IconName } from '../icons'

type ButtonProps = ComponentPropsWithRef<'button'> & {
  variant?: 'primary' | 'secondary' | 'outline-primary' | 'outline-secondary'
  icon?: IconName
  loading?: boolean
}

export const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  (
    { variant = 'primary', loading, icon, children, className, ...props },
    ref
  ) => {
    const primaryVariantClasses = cn(
      variant === 'primary' && {
        'bg-primary-blue hover:bg-primary-dark-blue': !props.disabled,
        'bg-primary-blue bg-opacity-50': props.disabled,
      }
    )

    const secondaryVariantClasses = cn(
      variant === 'secondary' && {
        'bg-secondary-light hover:bg-secondary-light-200': !props.disabled,
        'bg-secondary-light bg-opacity-50': props.disabled,
      }
    )

    const outlineVariantClasses = cn(
      (variant === 'outline-primary' || variant === 'outline-secondary') &&
        'bg-transparent border border-secondary-light-400 hover:bg-primary-blue hover:bg-opacity-10'
    )

    return (
      <button
        ref={ref}
        className={cn(
          'flex items-center justify-center w-72 min-w-[32px] min-h-[32px] p-2 rounded-full transition-colors duration-150',
          primaryVariantClasses,
          secondaryVariantClasses,
          outlineVariantClasses,
          className
        )}
        {...props}
      >
        {icon && (
          <span className="mr-2">
            <Icon name={icon} className="w-5 h-5" />
          </span>
        )}

        <span
          className={cn('font-bold', {
            'text-secondary-black': variant === 'secondary',
            'text-secondary-white':
              variant === 'primary' || variant === 'outline-secondary',
            'text-primary-blue': variant === 'outline-primary',
          })}
        >
          {children}
        </span>
      </button>
    )
  }
)
