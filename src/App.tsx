import { useTransitionAnimation } from '@/hooks'

import { Header } from '@/components/layout'
import { HomePage } from '@/pages'

export function App() {
  const [mainRef] = useTransitionAnimation({
    from: {
      y: -30,
      opacity: 0,
    },
    to: {
      y: 0,
      opacity: 1,
    },
  })

  return (
    <div className="grid grid-rows-[10em,1fr] lg:grid-rows-[5em,1fr] lg:overflow-y-auto h-full">
      <Header />

      <main
        ref={mainRef}
        className="row-[2] pb-5 lg:py-8 w-full px-3 flex flex-col items-center justify-center lg:m-auto max-w-5xl"
      >
        <HomePage />
      </main>
    </div>
  )
}
