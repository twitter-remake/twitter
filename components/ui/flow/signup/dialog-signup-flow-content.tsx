'use client'
import Icon from '@/components/icons'
import * as Dialog from '@radix-ui/react-dialog'
import { useState } from 'react'
import Tooltip from '../../tooltip'
import { DialogSignUpFlowContentSteps } from './dialog-signup-flow-content-steps'

type DialogSignUpFlowContentProps = {
  loading?: boolean
}

export const DialogSignUpFlowContent = ({
  loading = false,
}: DialogSignUpFlowContentProps) => {
  const [currentStep, setCurrentStep] = useState(0)

  return (
    <>
      <Dialog.Title asChild>
        <div className="flex items-center justify-start space-x-10 px-4">
          <Tooltip content="Close">
            <Dialog.Close asChild>
              <button
                className="rounded-full focus:ring-secondary-white hover:bg-secondary-light hover:bg-opacity-10 focus:bg-secondary-light focus:bg-opacity-20 transition-colors duration-150"
                aria-label="Close"
                role="button"
                tabIndex={0}
              >
                <Icon name="x" className="text-white w-5 h-5" />
              </button>
            </Dialog.Close>
          </Tooltip>
          <span className="font-bold text-xl my-3">
            Step {currentStep + 1} of 5
          </span>
        </div>
      </Dialog.Title>
      <DialogSignUpFlowContentSteps step={currentStep} />
    </>
  )
}

export default DialogSignUpFlowContent
