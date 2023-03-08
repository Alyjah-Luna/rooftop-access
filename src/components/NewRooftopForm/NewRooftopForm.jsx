import { useState } from 'react'
import { createRooftop } from '../../utilities/rooftops-api'

export default function NewRooftopForm({ user, setRooftops }) {
    const [newRooftop, setNewRooftop] = useState("")

    async function handleAddRooftop(evt) {
        evt.preventDefault()
        try {
            const rooftop = await createRooftop({ text: newRooftop, user: user._id });
            setRooftops(prevRooftops => [...prevRooftops, rooftop]);
            setNewRooftop('');
        } catch (err) {
            console.log(err);
        }
    }

    return (
        <>
            <h3>Add A Rooftop</h3>
            <textarea 
            name="new-rooftop" 
            placeholder="Create A New Rooftop"
            value={newRooftop}
            onChange={(evt) => setNewRooftop(evt.target.value)}
            />
            <button name="submit-rooftop" type='submit' onClick={handleAddRooftop}>Add Rooftop</button>
        </>
    )
}
