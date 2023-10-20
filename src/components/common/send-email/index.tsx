import { MailIcon } from '@/assets/icons'
import { FormEvent, useEffect, useState } from 'react'
import { Modal } from '@/components/common'
import { SendEmailParams, useSendEmail } from '@/hooks'
import { ZodError, z } from 'zod'
import { useMediaQuery } from '@/hooks/useMediaQuery'
import { useLocation } from 'react-router-dom'

const emailSubmitSchema = z.object({
  from: z
    .string()
    .email('Digite um email válido')
    .nonempty('Preciso saber quem envia o Email.'),
  subject: z.string().nonempty('Sem assunto?'),
  message: z.string().nonempty('Não esquece de falar o que você quer!'),
})

function handleZodErrors(err: ZodError) {
  const errors: Record<string, string> = {}

  for (const error of err.errors) {
    errors[error.path[0]] = error.message
  }

  return errors
}

export function SendEmail() {
  const [openSendEmailModal, setOpenSendEmailModal] = useState(false)
  const [errors, setErrors] = useState<SendEmailParams | null>()
  const [loading, setLoading] = useState(false)

  const { handleSendEmail } = useSendEmail()
  const isMobile = useMediaQuery('(max-width: 1020px)')
  const location = useLocation()

  async function handleEmailSubmit(evt: FormEvent) {
    try {
      evt.preventDefault()
      setErrors(null)
      setLoading(true)

      const form = new FormData(evt.currentTarget as HTMLFormElement)
      const data: Record<string, FormDataEntryValue | null> = {}

      for (const [key, value] of form.entries()) {
        data[key] = value
      }

      if (!emailSubmitSchema.parse(data)) return

      await handleSendEmail(data as SendEmailParams)

      setLoading(false)
      handleClose()
    } catch (err) {
      const errors = handleZodErrors(err as ZodError)
      setErrors(errors as SendEmailParams)
      setLoading(false)
    }
  }

  function reset() {
    setErrors(null)
    setOpenSendEmailModal(false)
  }

  function handleClose() {
    if (isMobile) {
      if (location.hash.includes('#email')) {
        window.history.back()
        location.hash = ''
      }

      window.history.replaceState(null, document.title, location.pathname)
      reset()
    } else {
      reset()
    }
  }

  function handleOpen() {
    setOpenSendEmailModal(true)
    isMobile
      ? window.history.pushState(
          null,
          document.title,
          location.pathname + '#email',
        )
      : null
    location.hash = '#email'
  }

  useEffect(() => {
    console.log({ location })
    function close() {
      if (openSendEmailModal) reset()
    }

    window.addEventListener('popstate', close)

    return () => window.removeEventListener('popstate', close)
  }, [window.location.hash])

  return (
    <>
      <button
        className="h-10 w-10 cursor-pointer outline-none transition-colors animate-bounce"
        onClick={handleOpen}
        aria-label="Abrir formulário de contato"
      >
        <MailIcon />
      </button>

      <Modal
        title="Me manda um salve! ;)"
        isOpen={openSendEmailModal}
        onClose={handleClose}
      >
        <form
          onSubmit={handleEmailSubmit}
          className="grid h-full grid-rows-[max-content,max-content,1fr] gap-2 xl:gap-5"
        >
          <label htmlFor="from" className="flex flex-col gap-2">
            <span className="text-lg text-black">De (email):</span>
            <input
              type="text"
              name="from"
              id="from"
              aria-label="Input de remetente do email"
              className="w-full rounded-md border border-black p-2 text-zinc-900 focus:outline-accent"
            />
            <p className="text-red-500">{errors?.from}</p>
          </label>

          <label htmlFor="subject" className="flex flex-col gap-2">
            <span className="text-lg text-black">Assunto:</span>
            <input
              type="text"
              name="subject"
              id="subject"
              aria-label="Input de assunto do email"
              className="w-full rounded-md border border-black p-2 text-zinc-900 focus:outline-accent"
            />
            <p className="text-red-500">{errors?.subject}</p>
          </label>

          <label htmlFor="message" className="flex flex-col gap-2">
            <span className="text-lg text-black">Mensagem:</span>
            <textarea
              name="message"
              id="message"
              aria-label="Área de texto para mensagem do email"
              className="w-full h-[20vh] resize-none rounded-md border border-black p-2 text-zinc-900 focus:outline-accent"
            />
            <p className="text-red-500">{errors?.message}</p>
          </label>

          <button
            type="submit"
            disabled={loading}
            className={`w-max justify-self-end rounded-md bg-primary px-5 py-2 transition-colors hover:bg-secondary hover:text-zinc-50 ${
              loading ? 'bg-secondary text-zinc-50' : 'bg-primary'
            }`}
          >
            {loading ? (
              <div role="status" className="flex items-center gap-2">
                <svg
                  aria-hidden="true"
                  className="mr-2 h-6 w-6 animate-spin fill-accent text-zinc-50"
                  viewBox="0 0 100 101"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z"
                    fill="currentColor"
                  />
                  <path
                    d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z"
                    fill="currentFill"
                  />
                </svg>
                <span>Enviando Email...</span>
              </div>
            ) : (
              'Enviar'
            )}
          </button>
        </form>
      </Modal>
    </>
  )
}
