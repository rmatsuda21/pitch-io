import {Link} from 'react-router-dom'
import "../stylesheet/card.css"

export function Card({icon, title, text, link}){
    return (
        <Link to={link} className="card">
            <img className='icon' src={icon}/>
            <h1>{title}</h1>
            <br/>
            <p>{text}</p>
        </Link>
    )

}