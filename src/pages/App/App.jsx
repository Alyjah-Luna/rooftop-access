import './App.css';
import { useState } from 'react'
import { getUser } from '../../utilities/users-service'
import AuthPage from '../AuthPage/AuthPage';
import NavBar from '../../components/NavBar/NavBar'
import RooftopList from '../RooftopList/RooftopList';

export default function App() {
  const [ user, setUser ] = useState(getUser())

  return (
    <main className="App">
      {
        user ? 
        <>
          <NavBar user={user} setUser={setUser} />
          <RooftopList user={user} />
        </>
        :
        <AuthPage setUser={setUser} />
      }
    </main>
  );
}
