import { Children } from 'react'
import { Logo } from 'ui'

export const LogoNavbar = (props) => {
  return (
    <div className="flex title-font font-bold items-center">
      {props.Children}
      <span className="font-bold text-3xl ml-1">Allian</span>
    </div>
  )
}
