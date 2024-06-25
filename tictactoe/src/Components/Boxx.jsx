import React from 'react'
import './box.css'

const Boxx = ({value,onClick}) => {
    const style=value==="X"?"box x":"box o";
  return (
    <button className={style} onClick={onClick}>{value}</button>
  )
}

export default Boxx