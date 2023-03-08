export default function RooftopListItem({ rooftop }) {

    return(
        <li className="RooftopListItem">
            <div className="flex-ctr-ctr">
                <h3>Date: {new Date(rooftop.createdAt).toLocaleString()}</h3>
                <p>Rooftop: {rooftop.text}</p>
            </div>
        </li>
    )
}
