import { menuData, MENU_TYPE } from './const'
import { useState } from 'react'

export const GameMenu = (props) => {
  const {afterSelectType} = props
  const [displayType, setDisplayType] = useState(MENU_TYPE.Tutorial)

  return (
    <div className='gameMenu'>
      <div className='gameMenu-title'>Game Rules Engine</div>
     {
       menuData.map(item => {
         return (
          <div className={`gameMenu-item ${displayType === item.type ? 'selected': ''}`} 
            key={item.type} 
            onClick={() => {
              setDisplayType(item.type)
              afterSelectType && afterSelectType(item.type)
            }}
          >
            {item.title}
          </div>
         )
       })
     }
    </div>
  )
}