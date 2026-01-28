import { useTranslation } from 'react-i18next'

export function LanguageSwitch() {
  const {
    i18n: { changeLanguage, language },
  } = useTranslation()

  return (
    <button onClick={() => changeLanguage(language === 'en' ? 'pt' : 'en')}>
      <span className="text-[1.4rem] tracking-wider font-bold">
        {language === 'en' ? 'PT' : 'EN'}
      </span>
    </button>
  )
}
