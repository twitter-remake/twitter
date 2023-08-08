import * as TooltipPrimitive from '@radix-ui/react-tooltip'
import { RefAttributes } from 'react'

type TooltipProps = TooltipPrimitive.TooltipContentProps &
  RefAttributes<HTMLDivElement> &
  TooltipPrimitive.TooltipProps

export function Tooltip({
  children,
  content,
  open,
  defaultOpen,
  onOpenChange,
  ...props
}: TooltipProps) {
  return (
    <TooltipPrimitive.Provider>
      <TooltipPrimitive.Root
        open={open}
        defaultOpen={defaultOpen}
        onOpenChange={onOpenChange}
      >
        <TooltipPrimitive.Trigger asChild>{children}</TooltipPrimitive.Trigger>
        <TooltipPrimitive.Portal>
          <TooltipPrimitive.Content
            side="bottom"
            align="center"
            sideOffset={6}
            className="bg-secondary-light-400 px-1 text-xs rounded"
            {...props}
          >
            {content}
          </TooltipPrimitive.Content>
        </TooltipPrimitive.Portal>
      </TooltipPrimitive.Root>
    </TooltipPrimitive.Provider>
  )
}

export default Tooltip
