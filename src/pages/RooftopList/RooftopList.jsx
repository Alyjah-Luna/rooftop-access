import { useState, useEffect } from 'react'
import { getRooftops } from '../../utilities/rooftops-api'
import NewRooftopForm from '../../components/NewRooftopForm/NewRooftopForm'
import RooftopListItem from '../../components/RooftopListItem/RooftopListItem'

export default function RooftopList({ user }) {

    const [rooftops, setRooftops] = useState([])

    useEffect(() => {
        async function getAllRooftops() {
            const rooftops = await getRooftops();
            setRooftops(rooftops);
        }
        getAllRooftops();
    }, []);

    return (
        <>
            <ul className="RooftopList">
                {rooftops.map((rooftop, idx) => (
                    <RooftopListItem rooftop={rooftop} key={idx} />
                    ))}
            </ul>
            <NewRooftopForm setRooftops={setRooftops} user={user} />
            <iframe
                width="600"
                height="450"
                style={{}}
                allowfullscreen
                referrerpolicy="no-referrer-when-downgrade"
                src="https://www.google.com/maps/embed/v1/search?key=AIzaSyDftyS7ywmTopu5RhVhR466fW8Dog9Ytmw&q=rooftops+in+newyork"
            ></iframe>
        </>   
    )
}
