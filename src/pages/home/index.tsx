import ProfilePic from '@/assets/perfil.jpeg'
import { useTranslation } from 'react-i18next'

export function HomePage() {
  const { t } = useTranslation()

  return (
    <section className="m-auto flex flex-col gap-5">
      <picture className="m-auto bg-accent overflow-hidden h-60 w-60 border-8 border-accent/20 lg:h-[15rem] lg:w-[15rem] rounded-full">
        <img
          src={ProfilePic}
          alt="foto perfil de Raniel César"
          loading="lazy"
          className="w-100% h-100% object-cover object-[0,-85px] md:object-[0,-80px] md:object-fill md:max-h-80"
        />
      </picture>

      <div className="h-max text-lg lg:text-2xl leading-relaxed">
        {t('hello')}!
        <br />
        {t('myName')} <strong className="tracking-wide">Raniel César</strong>{' '}
        {t('iam')} <br />
        <h2 className="bg-accent max-w-3xl text-black font-pixel rounded-sm p-4 border-4 border-secondary shadow-neo-md dark:shadow-accent text-[8.5vw] md:text-[6vw] leading-tight tracking-wider lg:text-5xl lg:p-4 lg:text-center">
          ✦ {t('dev')}
        </h2>
      </div>

      <p className="text-lg leading-relaxed lg:text-2xl">{t('about-student')}</p>
      <p className="text-lg leading-relaxed lg:text-2xl">{t('about-role')}</p>
    </section>
  )
}
