import { MainTitle } from '../../component/mainTitle'
import { ImageGroup } from '../../component/imageGroup'
import { Entrance } from './entrance'
import { MintButton } from './mintBtn'
import { ConnectWallet } from '../../component/connectWallet'
import './landingPage.scss'

const imageData = [ {
  name: 'lion',
  title: 'Brave loaded lions',
  src: '/landingPage/lion.gif'
},{
  name: 'F1',
  title: 'F1 Need for speed',
  src: '/landingPage/F1.png'
},{
  name: 'FIFA',
  title: 'FIFA Best Gate Keeper',
  src: '/landingPage/FIFA.png'
},{
  name: 'ufc',
  title: 'Top Fighters in UFC',
  src: '/landingPage/UFC.png'
},{
  name: '76er',
  title: '76ers Who’s MVP',
  src: '/landingPage/76er.png'
},{
  name: 'card',
  title: 'Crypto Poker Game',
  src: '/landingPage/card.gif'
}]

export const LandingPage = () => {
  return (
    <div className="landingPage">
      <ConnectWallet />
      <MainTitle />
      <Entrance />
      <ImageGroup imageData={imageData}/>
      <MintButton />
    </div>
  )
}