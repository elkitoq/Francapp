import {Card, CardTitle, CardText, Button, Input} from 'reactstrap'
import {useState} from 'react'

export const CardWorks = ({props})=>{
    const [terminado, setTerminado] = useState([])
    const [wait, setWait]=useState([])
    const [entregado, setEntregado] = useState([])

    return(
        <Card body className="text-center" color={terminado ? "success": "danger"}>
            <CardText>
                <h1>{props.title}</h1>
                <p>{props.nombre}</p>
                <p>{props.fecha}</p>
                <p>{props.numberOrder}</p>
            </CardText>
            
            <Input type="select" name="select" id="exampleSelect">
                <option>Terminado</option>
                <option>En espera</option>
                <option>Entregado</option>
            </Input>
            <Button>Edit</Button>
        </Card>
    )
}