import { MoonIcon } from '@/assets/icons'
import { Menu } from '@headlessui/react'

const accents = [
  {
    value: 'default',
    label: 'Yellow',
    bg: 'bg-default-accent',
  },
  {
    value: 'green',
    label: 'Green',
    bg: 'bg-green-accent',
  },
  {
    value: 'purple',
    label: 'Purple',
    bg: 'bg-purple-accent',
  },
  {
    value: 'black',
    label: 'Black',
    bg: 'bg-black-accent',
  },
  {
    value: 'blue',
    label: 'Blue',
    bg: 'bg-blue-accent',
  },
]

export function ThemeSelector() {
  return (
    <Menu as="div" role="theme-menu" className="relative h-6 xl:h-8">
      <Menu.Button className="h-[1.6em]" aria-label="Button for change theme">
        <MoonIcon />
      </Menu.Button>

      <Menu.Items
        className={`data-[headlessui-state="open"]:opacity-100 opacity-0 transition-all absolute -right-28 lg:right-0 mt-2 w-56 border-secondary border divide-y divide-secondary bg-primary focus:outline-none z-20`}
      >
        <Menu.Item
          as="button"
          className="gap-3 text-xl items-center w-full m-auto px-2 py-2 flex hover:border-4 hover:border-secondary transition-[border]"
          onClick={handleChangeMode}
        >
          <div
            className={`bg-gradient-to-r from-primary to-secondary rounded-full w-6 h-6`}
          />
          Dark/Light
        </Menu.Item>

        <section>
          {accents.map((accent) => (
            <Menu.Item key={accent.value}>
              {({ active }) => (
                <button
                  className={`${
                    active && 'bg-secondary text-primary'
                  } flex gap-3 items-center border border-primary px-2 py-2 w-full text-xl`}
                  onClick={() => handleChangeAccent(accent.value)}
                >
                  <div className={`${accent.bg} rounded-full w-6 h-6`} />
                  {accent.label}
                </button>
              )}
            </Menu.Item>
          ))}
        </section>
      </Menu.Items>
    </Menu>
  )
}

function handleChangeMode() {
  const currentMode = document.documentElement.getAttribute('data-mode')

  if (currentMode === 'dark')
    return document.documentElement.setAttribute('data-mode', 'light')

  return document.documentElement.setAttribute('data-mode', 'dark')
}

function handleChangeAccent(newAccent: string) {
  document.documentElement.setAttribute('data-accent', newAccent)
}
