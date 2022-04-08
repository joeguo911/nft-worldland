import './index.scss'
import { ConnectWallet } from '../../../../component/connectWallet'
export const Customize = () => {
  return (
    <div className="customize">
      <ConnectWallet />
      <div className='title'>It’s your game, you set the rules!</div>
      <div className='customize_content'>
        <div className='form_item'>
          <span className='item_title'>Enrollment Criteria:</span>
          <select>
            <option value="1">CRO</option>
            <option value="2">FIFA(NFT)</option>
            <option value="3">IIHF(NFT)</option>
            <option value="3">Lega(NFT)</option>
          </select>
        </div>
        <div className='form_item'>
          <span className='item_title'>Enrollment fee:</span>
          <select>
            <option value="1">10 CRO</option>
            <option value="2">20 CRO</option>
            <option value="3">30 CRO</option>
          </select>
        </div>
        <div className='form_item'>
          <span className='item_title'>Rounds:</span>
          <select>
            <option value="1">10</option>
            <option value="2">20</option>
            <option value="3">30</option>
            <option value="3">40</option>
          </select>
        </div>
        <div className='form_item'>
          <span className='item_title'>Total Time:</span>
          <select>
            <option value="1">10 mins</option>
            <option value="2">20 mins</option>
            <option value="3">30 mins</option>
            <option value="3">40 mins</option>
          </select>
        </div>
        <div className='form_item'>
          <span className='item_title'>Win/Lose:</span>
          <select>
            <option value="1">Highest Score Win</option>
            <option value="2">Fastest Score Win</option>
          </select>
        </div>
        <div className='form_item'>
          <span className='item_title'>Rewards type:</span>
          <select>
            <option value="1">Winner takes all</option>
            <option value="2">Winner takes 80%</option>
            <option value="1">Winner takes 70%</option>
            <option value="2">Winner takes 60%</option>
          </select>
        </div>
      </div>
    </div>
  )
}