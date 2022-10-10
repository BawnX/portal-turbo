import * as React from 'react'
import Link from 'next/link'
import { useTheme } from 'next-themes'
import { LogoNavbar, Button , Moon, Sun, ILink, NavLink } from 'ui'

const themes = [{ name: 'light' }, { name: 'dark' }]
const linksArray: Array<ILink> = [
  {
    text: 'Precios',
    url: '/precios'
  }
]

export const NavBar = () => {
  const { theme, setTheme } = useTheme()

  return (
    <div className="mx-auto flex flex-wrap py-2.5 px-8 flex-col md:flex-row items-center font-medium">
      <Link href="/" passHref>
        <a>
          <LogoNavbar />
        </a>
      </Link>
      <NavLink linksArray={linksArray}/>
      <Button
        color="transparent"
        isRounded={true}
        size="normal"
        onClick={() => {
          setTheme(
            themes[themes.findIndex(el => el.name === theme) === 0 ? 1 : 0].name
          )
        }}
      >
        {theme === 'light' ? (
          <Sun className={'hover:text-gray-600'} />
        ) : (
          <Moon className={'hover:text-gray-400'} />
        )}
      </Button>
      <Button
        color="primary"
        isRounded={true}
        onClick={() => console.log('redirect')}
        size="normal"
      >
        Sistema
      </Button>
      <Button
        color="transparent"
        isRounded={true}
        size="normal"
        onClick={() => console.log('change to spanish')}
      >
        ES
      </Button>
      |
      <Button
        color="transparent"
        isRounded={true}
        size="normal"
        onClick={() => console.log('change to english')}
      >
        EN
      </Button>
    </div>
  )
}
