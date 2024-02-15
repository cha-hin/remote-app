
import "./Button.css"

import { useState } from "react"

export const Button = (props) => {
  const [state, setState] = useState(0)
  return (
    <div>
      <button id='click-btn' className='shared-btn' onClick={props.onClick}>Title is: {props.title}</button>
    </div>
  )
}

export default Button