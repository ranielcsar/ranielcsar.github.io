import { CloseIcon } from '@/assets/icons'
import { Dialog, Transition } from '@headlessui/react'
import { PropsWithChildren, Fragment } from 'react'

type ModalProps = {
  isOpen: boolean
  onClose(): void
  title: string
}

export function Modal({
  children,
  isOpen,
  onClose,
  title,
}: PropsWithChildren<ModalProps>) {
  return (
    <Transition show={isOpen} as={Fragment}>
      <Dialog as="div" className="relative z-50" onClose={onClose}>
        <div className="fixed inset-0 bg-secondary/50 w-full h-full" />

        <div className="fixed inset-0 overflow-y-auto">
          <div className="m-auto flex h-full w-[90%] items-center justify-center text-center md:p-4">
            <Transition.Child
              as={Fragment}
              enter="ease-out duration-200"
              enterFrom="opacity-0"
              enterTo="opacity-100"
              leave="ease-in duration-200"
              leaveFrom="opacity-100"
              leaveTo="opacity-0"
            >
              <Dialog.Panel className="relative w-full max-w-lg text-primary transform overflow-hidden rounded-sm border-4 border-primary shadow-black shadow-neo-md bg-secondary p-6 text-left align-middle transition-all md:h-[79vh] xl:h-auto">
                <Dialog.Title
                  as="h3"
                  className="mb-10 text-lg font-medium leading-6"
                >
                  {title}
                </Dialog.Title>

                <button
                  type="button"
                  className="absolute outline-none top-6 right-4 h-6 w-6"
                  onClick={onClose}
                >
                  <CloseIcon />
                </button>

                {children}
              </Dialog.Panel>
            </Transition.Child>
          </div>
        </div>
      </Dialog>
    </Transition>
  )
}
