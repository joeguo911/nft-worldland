import { Tutorial } from "./Tutorial/tutorial"
import { Template } from "./Template/template"
import { Mint } from "./Mint/mint"
import { Properties } from "./Properties"
import { Customize } from "./Customize/customize"
import { MENU_TYPE } from "../const"
import './index.scss'

const moduleMap = {
  [MENU_TYPE.Tutorial]: <Tutorial />,
  [MENU_TYPE.Template]: <Template />,
  [MENU_TYPE.Customize]: <Customize />,
  [MENU_TYPE.Properties]: <Properties />,
  [MENU_TYPE.Mint]: <Mint />,
}
export const GameModules = (props) => {
  const {type} = props

  return (
    <div className="gameModule">
      {moduleMap[type]}
    </div>
  )
}