import ProfilePic from '@/assets/perfil.png'
import { useTranslation } from 'react-i18next'

export function HomePage() {
  const { t } = useTranslation()

  return (
    <section className="m-auto flex flex-col gap-5">
      <picture className="m-auto bg-accent overflow-hidden h-[14rem] w-[14rem] rounded-full">
        <img
          src={ProfilePic}
          alt="foto perfil de Raniel César"
          loading="lazy"
          className="object-fill lg:object-contain w-[inherit] h-auto object-center max-h-48 max-w-sm lg:max-h-60"
        />
      </picture>

      <div className="h-full text-xl lg:text-2xl leading-relaxed">
        {t('hello')}!
        <br />
        {t('myName')} <strong className="tracking-wide">Raniel César</strong>{' '}
        {t('iam')} <br />
        <h2 className="bg-accent max-w-3xl text-black font-pixel rounded-sm p-2 mb-2 border-4 border-secondary shadow-neo-md dark:shadow-accent text-[8.5vw] md:text-[6vw] leading-tight tracking-wider lg:text-5xl lg:p-4 lg:text-center">
          ✦ {t('dev')}
        </h2>
      </div>

      <p className="text-xl leading-relaxed lg:text-2xl">{t('current')}</p>
      <p className="text-xl leading-relaxed lg:text-2xl">{t('about')}</p>
    </section>
  )
}
