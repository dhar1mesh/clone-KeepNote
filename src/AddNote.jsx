import React, { useState } from 'react';
import Button from '@material-ui/core/Button';
import AddIcon from '@material-ui/icons/Add';
import TextField from '@material-ui/core/TextField';
const AddNote = (props) => {
    const [note, setNote] = useState({
        title: '',
        content: '',
    });
    const inputevent = (event) => {
        const { name, value } = event.target;
        setNote((predata) => {
            return {
                ...predata,
                [name]: value,

            };
        });

    };
    const addEvent = () => {
        props.passNote(note);
        setNote({
            title: '',
            content: '',
        })
    }
    return (
        <>
            <div className="main_note">
                <form>
                    <input
                        type="text"
                        onChange={inputevent}
                        value={note.title}
                        placeholder="Title"
                        name="title"

                    />
                    <br />
                    <textarea
                        rows=""
                        column=""
                        onChange={inputevent}
                        value={note.content}
                        placeholder="write note"
                        autocomplet="off"
                        name="content"
                    >
                    </textarea>
                    <Button onClick={addEvent}>
                        <AddIcon className="plus_sign" />
                    </Button>
                    {/* <TextField/> */}
                </form>

            </div>
        </>

    );
};
export default AddNote; 