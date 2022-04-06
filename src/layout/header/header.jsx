import { useNavigate } from "react-router-dom";
import { LogoSVG } from "./logoSVG"
import { SearchBar } from './searchBar'
import { Menu } from './menu'

import './header.scss'

export const Header = () => {
  const navigate = useNavigate()
  return (
    <div className="header">
      <div onClick={() => { navigate('/') }}>
        <LogoSVG />
      </div>
      <SearchBar />
      <Menu />
    </div>
  )
}