import {Col, Row} from 'reactstrap'
import {CardWorks} from './CardWorks.js'


export const Workorders = () => {

    const datos = {
        title: "netbook",
        nombre: "luke",
        fecha: "02/04/2021",
        numberOrder: "#234"

    }


    return (
        <div>
            <CardWorks props={datos}/>
        </div>
    )
}