import './index.scss'

export const Properties = () => {
  return (
    <div className="properties">
      <div className="properties_title">It’s your game, you name it!</div>
      <div className='properties_content'>
      <div className='properties_form'>
        <div className='form_item'>
          <span className='title'>Game Template:</span>
          <input placeholder='Sport Game'/>
        </div>
        <div className='form_item'>
          <span className='title'>Game Name:</span>
          <input placeholder='FIFA NFT Cup – Goal keeper'/>
        </div>
        <div className='form_item description'>
          <span className='title'>Description:</span>
          <textarea placeholder='This game is for 2 players who has FIFA, IIHF, or Lega Serie A NFTs.  The players will need to bet on the goal keeper every time there is a shoot from the game, either Goal/No Goal.  After 10 rounds, the winner will takes the enrollment fees from the players.  Minimum entry 10 CRO.' />
        </div>
        <div className='form_item'>
          <span className='title'>Players No.:</span>
          <input placeholder='2 Players' />
        </div>
      </div>
      <div className='properties_upload_image'>
        <div className='title'>Game Icon:</div>
        <div className='operation'>
          <div className='upload_button'>Browse to upload</div>
          <img className='cup_image'/>
        </div>
      </div>
      </div>
    </div>
  )
}