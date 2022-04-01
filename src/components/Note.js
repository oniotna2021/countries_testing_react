import React from "react";

const Note = ({note,toggleImportance}) => {
    const label = note.important
    ? 'make not importantly '
    : 'make important';
    return(
        <li className="note">
            <div>
                {note.content}
            </div>
            <button onclick={toggleImportance}>{label}</button>
        </li>
    )
}

export default Note