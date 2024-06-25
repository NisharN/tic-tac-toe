import React from 'react'
import Boxx from './Boxx'
import './Board.css'

const Board = ({board,onClick}) => {
  return (
    <div className="board">
        {board.map((value,index)=>{
        return <Boxx value={value} onClick={()=>onClick(index)}/>
        })} 
        

    </div>
  )
}

export default Board