import { Tooltip as Tippy } from 'react-tippy'

import 'react-tippy/dist/tippy.css'
import './ToolTip.scss'

const Tooltip = ({ value, children, className = '', innerClassName = '', position, ...props }) => (
    <Tippy title={value} duration={250} animateFill className={className} position={position}>
      <div className={`tooltip-class ${innerClassName}`} {...props}>
        {children}
      </div>
    </Tippy>
  )
  
  export default Tooltip