import { useLayoutEffect, useRef } from 'react'
import { gsap } from 'gsap'

type Props = {
  from: gsap.TweenVars
  to: gsap.TweenVars
  durationInSeconds?: number
}

export function useTransitionAnimation({
  durationInSeconds = 0.5,
  from,
  to,
}: Props) {
  const ref = useRef(null)

  useLayoutEffect(() => {
    gsap.fromTo(ref?.current, from, { ...to, duration: durationInSeconds })
  }, [ref])

  return [ref]
}
