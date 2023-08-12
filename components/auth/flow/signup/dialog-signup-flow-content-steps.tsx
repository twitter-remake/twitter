'use client'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import * as Dialog from '@radix-ui/react-dialog'
import { useState } from 'react'
import { SelectDateOfBirth } from './select-date-of-birth'

type DialogSignUpFlowContentStepsProps = {
  step: number
}

export const DialogSignUpFlowContentSteps = ({
  step,
}: DialogSignUpFlowContentStepsProps) => {
  if (step === 0) {
    return <DialogSignUpFlowContentStep1 nextAction={() => {}} />
  }
}

type DialogSignUpFlowContentStep1Props = {
  nextAction: (value: string) => void
}

const DialogSignUpFlowContentStep1 = ({
  nextAction,
}: DialogSignUpFlowContentStep1Props) => {
  const [login, setLogin] = useState('')

  return (
    <div className="flex justify-center items-center max-w-[600px]">
      <div className="w-full flex flex-col px-20">
        <span className="font-bold text-3xl mt-4 mb-6">
          Create your account
        </span>
        <Input
          name="name"
          placeholder="Name"
          maxLength={50}
          className="w-full my-3"
          onChange={(value) => setLogin(value)}
        />

        <Input
          name="email"
          placeholder="Email"
          type="email"
          className="w-full my-3"
          onChange={(value) => setLogin(value)}
        />
        <span className="font-bold text-base mt-6 mb-2">Date of birth</span>
        <span className="font-normal text-sm text-secondary-light-400 leading-4">
          This will not be shown publicly. Confirm your own age, even if this
          account is for a business, a pet, or something else.
        </span>

        <div className="my-4">
          <SelectDateOfBirth />
        </div>

        <Dialog.Description asChild>
          <Button
            className="mt-28 mb-3 w-full min-h-[52px]"
            variant="secondary"
            disabled
            onClick={() => nextAction(login)}
          >
            Next
          </Button>
        </Dialog.Description>
      </div>
    </div>
  )
}

export default DialogSignUpFlowContentSteps
