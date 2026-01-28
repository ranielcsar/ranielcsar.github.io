import {
  LanguageSwitch,
  SocialLinksAndContact,
  ThemeSelector,
} from '@/components/common'

export function Header() {
  return (
    <header className="sticky top-0 bg-primary z-10 w-full h-max py-3 border-b-2 border-secondary">
      <div className="flex flex-col gap-4 md:px-6 xl:px-3 lg:gap-8 md:flex-row items-center justify-between max-w-5xl m-auto">
        <strong className="tracking-wider text-lg xl:text-2xl m-auto flex-[2] text-center">
          {'<'}
          ranielcsar
          {'/>'}
        </strong>

        <div className="flex w-[95%] justify-between px-6 md:px-0 ga items-center">
          <div className="flex gap-5 items-center">
            <SocialLinksAndContact />
          </div>

          <ChangeThemeAndLang />
        </div>
      </div>
    </header>
  )
}

function ChangeThemeAndLang() {
  return (
    <div className="flex h-full lg:max-w-[15vw] items-center justify-center gap-5">
      <ThemeSelector />

      <LanguageSwitch />
    </div>
  )
}
