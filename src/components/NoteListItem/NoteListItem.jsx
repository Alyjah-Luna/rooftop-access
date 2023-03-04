export default function NoteListItem({ note }) {

    return(
        <li className="NoteListItem">
            <div className="flex-ctr-ctr">
                <h3>Date: {new Date(note.createdAt).toLocaleString()}</h3>
                <p>Note: {note.text}</p>
            </div>
        </li>
    )
}
