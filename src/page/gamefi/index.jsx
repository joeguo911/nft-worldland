import { useState } from 'react'
import { MENU_TYPE } from './const'
import { GameMenu } from './menu'
import { GameModules } from './modules/gameModules'
import './index.scss'

export const GameFi = () => {
  const [currentType, setCurrentType] = useState(MENU_TYPE.Tutorial)
  const afterSelectType = (type) => {
    setCurrentType(type)
  }

  return (
    <div className="gamefi">
      <div className="gamefi-bg-image"></div>
      <div className='gamefi-container'>
        <GameMenu afterSelectType={afterSelectType}/>
        <div className='gamefi-content'>
          <GameModules type={currentType} />
        </div>
     
      </div>
    </div>
  )
}