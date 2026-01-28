import { GithubIcon, LinkedinIcon } from '@/assets/icons'

export function SocialLinksAndContact() {
  return (
    <>
      <a
        className="hover:-translate-y-1 h-10 w-10 md:h-10 md:w-10 cursor-pointer shadow-neo shadow-secondary rounded-full bg-primary text-secondary transition-transform border-2 border-secondary p-1"
        href="https://github.com/ranielcsar"
        referrerPolicy="no-referrer"
        target="_blank"
        aria-label="Acessar perfil no Github"
      >
        <GithubIcon />
      </a>

      <a
        className="hover:-translate-y-1 h-10 w-10 md:h-10 md:w-10 bg-primary shadow-neo shadow-secondary rounded-full text-secondary cursor-pointer transition-transform border-2 border-secondary p-2"
        href="https://www.linkedin.com/in/ranielcsar"
        referrerPolicy="no-referrer"
        target="_blank"
        aria-label="Acessar perfil no Linkedin"
      >
        <LinkedinIcon />
      </a>
    </>
  )
}
