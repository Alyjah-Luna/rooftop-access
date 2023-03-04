import { useState } from 'react'
import { createNote } from '../../utilities/notes-api'

export default function NewNoteForm({ user, setNotes }) {
    const [newNote, setNewNote] = useState("")

    async function handleAddNote(evt) {
        evt.preventDefault()
        try {
            const note = await createNote({ text: newNote, user: user._id });
            setNotes(prevNotes => [...prevNotes, note]);
            setNewNote('');
        } catch (err) {
            console.log(err);
        }
    }

    return (
        <>
            <h3>Add A Note</h3>
            <textarea 
            name="new-note" 
            placeholder="Create A New Note"
            value={newNote}
            onChange={(evt) => setNewNote(evt.target.value)}
            />
            <button name="submit-note" type='submit' onClick={handleAddNote}>Add Note</button>
        </>
    )
}
