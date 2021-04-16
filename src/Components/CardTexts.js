import { CardText } from 'reactstrap'
import '../assets/css/card-text.css'

export const CardTexts = ({ props }) => {
    return (
        <CardText>
            <h1 className="title">{props.equipo}</h1>
            <p className="nombre">{props.name}</p>
            <p className="fecha">{props.date}</p>
            <p className="numeroOrden text-right">#{props.id}</p>
        </CardText>
    )
}