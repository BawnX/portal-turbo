import Link from 'next/link'
import { LogoNavbar } from 'ui/src/atoms/logoNavbar'

export const NavBar = () => {
  return (
    <div className="mx-auto flex flex-wrap py-2.5 px-8 flex-col md:flex-row items-center font-medium">
      <Link href="/" passHref>
        <a>
          <LogoNavbar/>
        </a>
      </Link>
    </div>
  )
}
