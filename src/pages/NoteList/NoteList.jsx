import { useState, useEffect } from 'react'
import { getNotes } from '../../utilities/notes-api'
import NewNoteForm from '../../components/NewNoteForm.jsx/NewNoteForm'
import NoteListItem from '../../components/NoteListItem/NoteListItem'

export default function NoteList({ user }) {

    const [notes, setNotes] = useState([])

    useEffect(() => {
        async function getAllNotes() {
            const notes = await getNotes();
            setNotes(notes);
        }
        getAllNotes();
    }, []);

    return (
        <>
            <ul className="NoteList">
                {notes.map((note, idx) => (
                    <NoteListItem note={note} key={idx} />
                ))}
            </ul>
            <NewNoteForm setNotes={setNotes} user={user} />
        </>   
    )
}
