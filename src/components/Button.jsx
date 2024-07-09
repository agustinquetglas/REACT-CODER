import React from 'react'
import './Button.css'

export const Button = (props) => {
    const {texto, color, funcion} = props

  return (
    <button className={color} onClick={funcion} > {texto} </button>
  )
}
