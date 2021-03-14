import React from 'react';
import DeleteForeverIcon from '@material-ui/icons/DeleteForever';
import Button from '@material-ui/core/Button';
const Note = (props) => {
    const deleteNote=()=>{
        props.deleteItem(props.id);
    }
    return (
        <>
            <div className="note">
                <h1>{props.title}</h1>
                <br />
                <p>{props.content}</p>
                <Button onClick={deleteNote}>clicked
                    <DeleteForeverIcon className="deleteicon" />
                </Button>

            </div>
        </>

    );
}
export default Note;