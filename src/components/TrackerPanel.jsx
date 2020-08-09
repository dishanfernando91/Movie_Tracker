import React from 'react'
import { MdDelete } from 'react-icons/md'

export default function TrackerPanel({ movie, handleRemoveWatched }) {


    return (
        <div className="tracker-panel">
            <ul className="watched-list">
                <li>{movie}</li>
                <div className="icons">
                    <button className="delete-icon" onClick={()=> handleRemoveWatched(movie)}><MdDelete size={16}/></button>
                </div>
            </ul>
            <hr/>
              
        </div>
        
    )
}
