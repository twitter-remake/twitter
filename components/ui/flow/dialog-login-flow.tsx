'use client'
import * as Dialog from '@radix-ui/react-dialog'
import { Button } from '../button'
import DialogLoginFlowContent from './dialog-login-flow-content'

export const DialogLoginFlow = () => {
  return (
    <Dialog.Root>
      <Dialog.Trigger asChild>
        <Button className="w-[320px]" variant="outline-primary">
          Sign in
        </Button>
      </Dialog.Trigger>
      <Dialog.Portal>
        <Dialog.Overlay className="bg-dialog-overlay fixed inset-0" />
        <Dialog.Content className="fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 min-w-[600px] max-w-[80vw] min-h-[400px] h-[650px] max-h-[90vh] bg-black rounded-2xl">
          <DialogLoginFlowContent />
        </Dialog.Content>
      </Dialog.Portal>
    </Dialog.Root>
  )
}

export default DialogLoginFlow
