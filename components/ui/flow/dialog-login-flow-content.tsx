'use client'
import IconComponent from '@/components/icons'
import * as Dialog from '@radix-ui/react-dialog'
import { useCallback, useState } from 'react'
import { Button } from '../button'
import { Input } from '../input'

type DialogLoginFlowContentProps = {
  loading?: boolean
}

export const DialogLoginFlowContent = ({
  loading = false,
}: DialogLoginFlowContentProps) => {
  const [currentStep, setCurrentStep] = useState(0)
  const [login, setLogin] = useState('')

  const handleNextAction = useCallback((login: string) => {
    setCurrentStep((prev) => prev + 1)
    setLogin(login)
  }, [])

  if (currentStep === 0) {
    return <DialogLoginFlowContentStep1 nextAction={handleNextAction} />
  } else if (login && currentStep === 1) {
    return <DialogLoginFlowContentStep2 login={login} />
  }
}

type DialogLoginFlowContentStep1Props = {
  nextAction: (value: string) => void
}

const DialogLoginFlowContentStep1 = ({
  nextAction,
}: DialogLoginFlowContentStep1Props) => {
  const [login, setLogin] = useState('')

  return (
    <>
      <Dialog.Title asChild>
        <div className="flex items-center justify-between px-4">
          <Dialog.Close asChild>
            <button
              className="rounded-full focus:ring-secondary-white hover:bg-secondary-light hover:bg-opacity-10 focus:bg-secondary-light focus:bg-opacity-20 transition-colors duration-150"
              aria-label="Close"
              role="button"
              tabIndex={0}
            >
              <IconComponent icon="x" className="text-white w-5 h-5" />
            </button>
          </Dialog.Close>
          <IconComponent
            icon="twitter"
            className="text-secondary-light-200 w-10 h-10 my-3"
          />
          <div></div>
        </div>
      </Dialog.Title>
      <div className="flex justify-center items-center max-w-[600px]">
        <div className="flex flex-col">
          <span className="font-bold text-4xl mb-6">Sign in to Twitter</span>

          <Button
            className="!bg-white hover:!bg-secondary-light-200 my-3 w-[320px]"
            variant="secondary"
            icon="google"
          >
            <span className="!font-normal">Sign in with Google</span>
          </Button>
          <Button
            className="!bg-white hover:!bg-secondary-light-200 my-3 w-[320px]"
            variant="secondary"
            icon="github"
          >
            Sign in with GitHub
          </Button>

          <div className="min-w-[320px] max-w-[320px] flex items-center justify-between mb-3 space-x-2">
            <div className="w-full h-[1px] bg-secondary-light-400 bg-opacity-50"></div>
            <span className="text-secondary-light-100">or</span>
            <div className="w-full h-[1px] bg-secondary-light-400 bg-opacity-50"></div>
          </div>

          <Input
            name="login"
            placeholder="Phone, email, or username"
            className="min-w-[320px] max-w-[320px]"
            onChange={(value) => setLogin(value)}
          />

          <Button
            className="mt-6 mb-3 w-[320px]"
            variant="secondary"
            onClick={() => nextAction(login)}
          >
            Next
          </Button>

          <Button className="my-3 w-[320px]" variant="outline-secondary">
            Forgot password?
          </Button>
          <Dialog.Description className="mt-8 text-secondary-light-400 text-base">
            Don't have an account?{' '}
            <span
              className="text-primary-blue hover:underline focus:underline focus:outline-none"
              role="button"
              tabIndex={0}
            >
              Sign Up
            </span>
          </Dialog.Description>
        </div>
      </div>
    </>
  )
}

type DialogLoginFlowContentStep2Props = {
  login: string
}

const DialogLoginFlowContentStep2 = ({
  login,
}: DialogLoginFlowContentStep2Props) => {
  const [password, setPassword] = useState('')

  return (
    <>
      <Dialog.Title asChild>
        <div className="flex items-center justify-between px-4">
          <Dialog.Close asChild>
            <button
              className="rounded-full focus:ring-secondary-white hover:bg-secondary-light hover:bg-opacity-10 focus:bg-secondary-light focus:bg-opacity-20 transition-colors duration-150"
              aria-label="Close"
              role="button"
              tabIndex={0}
            >
              <IconComponent icon="x" className="text-white w-5 h-5" />
            </button>
          </Dialog.Close>
          <IconComponent
            icon="twitter"
            className="text-secondary-light-200 w-10 h-10 my-3"
          />
          <div></div>
        </div>
      </Dialog.Title>
      <div className="flex justify-center items-center max-w-[600px]">
        <div className="flex flex-col flex-grow w-full px-20">
          <span className="font-bold text-4xl mb-6">Enter your password</span>

          <Input
            className="mb-6"
            name="login"
            placeholder="Username"
            value={login}
            disabled
          />

          <Input
            type="password"
            name="password"
            placeholder="Password"
            onChange={(value) => setPassword(value)}
          />

          <Button
            className="mt-64 mb-3 min-h-[52px] w-full"
            variant="secondary"
          >
            Log in
          </Button>
          <Dialog.Description className="mt-3 text-secondary-light-400 text-base">
            Don't have an account?{' '}
            <span
              className="text-primary-blue hover:underline focus:underline focus:outline-none"
              role="button"
              tabIndex={0}
            >
              Sign Up
            </span>
          </Dialog.Description>
        </div>
      </div>
    </>
  )
}

export default DialogLoginFlowContent
