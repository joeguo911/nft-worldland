import { ConnectWallet } from "../../../../component/connectWallet"
import './index.scss'
import { tutorialData } from './const'

export const Tutorial = () => {
  return (
    <div className="tutorial">
      <ConnectWallet />
      <div className="tutorial-container">
        {
          tutorialData.map(item => {
           return (
            <div className="tutorial-item">
              <div className="tutorial-item__title">{item.name}</div>
              <div className="tutorial-item__description">{item.description}</div>
            </div>
           )
          })
        }
      </div>
    </div>
  )
}