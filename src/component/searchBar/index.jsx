import './index.scss'
import { AiOutlineSearch } from 'react-icons/ai'

export const SearchBar = ({title}) => {
  return  (
    <div className='search-bar'>
      <input />
      <div className='search-bar__submit'>
        <AiOutlineSearch />
        <span>{title}</span>
      </div>
    </div>
  )
}