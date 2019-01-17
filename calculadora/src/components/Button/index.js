import React from 'react'
import './index.css'

const Button = (props) => (
  <button onClick={props.onClick} className="buttonStyle">{props.name}</button>
)

export default Button
