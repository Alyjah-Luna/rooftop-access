import './App.css';
import { useState } from 'react'
import { getUser } from '../../utilities/users-service'
import AuthPage from '../AuthPage/AuthPage';
import NavBar from '../../components/NavBar/NavBar'
import NoteList from '../NoteList/NoteList';
import NewNoteForm from '../../components/NewNoteForm.jsx/NewNoteForm';

export default function App() {
  const [ user, setUser ] = useState(getUser())

  return (
    <main className="App">
      {
        user ? 
        <>
          <NavBar user={user} setUser={setUser} />
          {/* <NewNoteForm addNote={addNote} /> */}
          <NoteList user={user} />
        </>
        :
        <AuthPage setUser={setUser} />
      }
    </main>
  );
}
