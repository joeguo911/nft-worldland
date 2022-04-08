import './index.scss'
import { ConnectWallet } from '../../../../component/connectWallet'
import { data } from './const'
import { Card } from './card'
import { SearchBar } from '../../../../component/searchBar'

export const Template = () => {
  return (
    <div className='template'>
      <ConnectWallet />
      <SearchBar title="Search game template"/>
      <div className='template-content'>
        {
          data.map(item => {
            return <Card info={item} />
          })
        }
      </div>
    </div>
  )
}