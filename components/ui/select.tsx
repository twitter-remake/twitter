import * as ScrollArea from '@radix-ui/react-scroll-area'
import * as SelectPrimitive from '@radix-ui/react-select'
import { RefAttributes, forwardRef, useState } from 'react'
import cn from '../../lib/cn'
import Icon from '../icons'

type SelectProps = SelectPrimitive.SelectProps & {
  placeholder?: string
}

export const Select = forwardRef<HTMLButtonElement, SelectProps>(
  ({ children, ...props }, forwardedRef) => {
    const [focused, setFocused] = useState(false)
    return (
      <SelectPrimitive.Root
        {...props}
        onOpenChange={(open) => {
          setFocused(open)
        }}
      >
        <SelectPrimitive.Trigger
          ref={forwardedRef}
          onFocus={() => setFocused(true)}
          onBlur={() => setFocused(false)}
          className="relative w-full h-14"
        >
          <div
            className={cn(
              'relative w-full h-full px-2 z-20 rounded border focus:outline-none',
              {
                'border-secondary-light-400 border-opacity-50': !focused,
                'border-primary-blue': focused,
              }
            )}
          >
            <div className="absolute z-10 w-full h-full flex items-center transform -translate-y-3">
              <span
                className={cn(
                  'text-sm transition-all duration-150 font-normal',
                  {
                    'text-secondary-light-400 ': !focused,
                    'text-primary-blue': focused,
                  }
                )}
              >
                {props.placeholder}
              </span>
            </div>
            <div className="flex h-full items-center justify-between">
              <div className="mt-4">
                <SelectPrimitive.Value />
              </div>
              <SelectPrimitive.Icon>
                <Icon
                  name="chevron-down"
                  className="text-secondary-light-400 w-6 h-6"
                />
              </SelectPrimitive.Icon>
            </div>
          </div>
        </SelectPrimitive.Trigger>
        <SelectPrimitive.Portal>
          <SelectPrimitive.Content
            side="bottom"
            position="popper"
            className="w-[var(--radix-popper-anchor-width)] bg-black rounded border border-secondary-light-400 border-opacity-50 overflow-hidden"
          >
            <ScrollArea.Root type="auto">
              <SelectPrimitive.Viewport
                className="w-full h-full max-h-72"
                asChild
              >
                <ScrollArea.Viewport className="w-full h-full">
                  {children}
                </ScrollArea.Viewport>
              </SelectPrimitive.Viewport>
              <ScrollArea.Scrollbar
                className="w-1 p-1"
                style={{ boxSizing: 'unset' }}
                orientation="vertical"
              >
                <ScrollArea.Thumb className="bg-secondary-light-400 rounded" />
              </ScrollArea.Scrollbar>
            </ScrollArea.Root>
          </SelectPrimitive.Content>
        </SelectPrimitive.Portal>
      </SelectPrimitive.Root>
    )
  }
)

type SelectItemProps = SelectPrimitive.SelectItemProps &
  RefAttributes<HTMLDivElement>

export const SelectItem = forwardRef<HTMLDivElement, SelectItemProps>(
  ({ children, ...props }, forwardedRef) => {
    return (
      <SelectPrimitive.Item
        ref={forwardedRef}
        className="px-2 select-none hover:bg-primary-blue focus:bg-primary-blue focus:outline-none"
        {...props}
      >
        <SelectPrimitive.ItemText>{children}</SelectPrimitive.ItemText>
      </SelectPrimitive.Item>
    )
  }
)
