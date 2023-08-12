import * as Label from '@radix-ui/react-label'
import { HTMLInputTypeAttribute, useState } from 'react'
import cn from '../../lib/cn'

type InputProps = {
  name: string
  className?: string
  placeholder?: string
  maxLength?: number
  type?: HTMLInputTypeAttribute
  value?: string
  disabled?: boolean
  onChange?: (value: string) => void
  tabIndex?: number
}

export const Input = ({
  name,
  className,
  placeholder,
  maxLength,
  type = 'text',
  value,
  disabled = false,
  onChange,
  tabIndex = 0,
}: InputProps) => {
  const [focused, setFocused] = useState(false)
  const [length, setLength] = useState(0)
  const [filled, setFilled] = useState(false)

  return (
    <Label.Root className={cn(className, 'relative h-14')} htmlFor={name}>
      <div className="absolute z-10 w-full h-full px-2 flex items-center">
        <span
          className={cn('text-lg transition-all duration-150', [
            (filled || (value && value.length > 0)) &&
              'text-sm font-thin transform -translate-y-3',
            disabled && 'text-secondary-light-400 text-opacity-60',
            !disabled && {
              'font-normal text-secondary-light-400': !focused,
              'text-sm font-thin text-primary-blue transform -translate-y-3':
                focused || filled || (value && value.length > 0),
            },
          ])}
        >
          {placeholder}
        </span>
      </div>
      {focused && maxLength && (
        <div className="absolute -top-3 right-0 z-10 w-full h-full px-2 flex items-center justify-end">
          <span className="text-sm text-secondary-light-400">
            {length} / {maxLength}
          </span>
        </div>
      )}
      <div
        className={cn('relative h-full px-2 z-20 rounded', [
          disabled && 'bg-secondary-black bg-opacity-60',
          !disabled && {
            'border border-secondary-light-400 border-opacity-50': !focused,
            'border border-primary-blue border-opacity-100': focused,
          },
        ])}
      >
        <input
          className={cn(
            'w-full h-full pt-4 appearance-none bg-transparent focus:outline-none placeholder-transparent',
            disabled && 'text-secondary-light-400 text-opacity-40'
          )}
          id={name}
          type={type}
          value={value}
          disabled={disabled}
          maxLength={maxLength}
          onFocus={() => setFocused(true)}
          onBlur={() => setFocused(false)}
          onChange={(e) => {
            setFilled(e.target.value.length > 0)
            setLength(e.target.value.length)
            onChange?.(e.target.value)
          }}
          dir="auto"
          autoCapitalize="sentences"
          autoComplete={name}
          spellCheck={true}
          tabIndex={tabIndex}
        />
      </div>
    </Label.Root>
  )
}
