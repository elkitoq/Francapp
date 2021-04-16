import React, { useEffect, useState } from 'react'
import { Row, Col, NavLink, Label } from 'reactstrap'
import { CardWorks } from './CardWorks.js'
import '../assets/css/card-text.css'
import LocalBase from 'localbase'


let db = new LocalBase('db')

function GetWorks() {

    const [works, setWorks] = useState([])

    useEffect(() => {
        db.collection('workorder').orderBy('date').get().then(work => {
            setWorks(work)
        })
    }, [])
    return works
}

export const Workorders = () => {

    const workList = GetWorks();

    return (

        <Row className="content-workorder">
            <Col xs="6" className="col-content-card">
                <Row className="row-nav">
                    <NavLink clasName="link" href="#">Terminados</NavLink>
                    <NavLink clasName="link" href="#">En espera</NavLink>
                    <NavLink clasName="link" href="#">Entregados</NavLink>
                </Row>

                <div className="list-card">
                    <Col xs="12" >
                        {workList.map(datos => <CardWorks key={datos.nombre} props={datos} />)}
                    </Col>
                </div>

            </Col >
            <Col xs="4">
                <Row>
                    <Label>Sumario</Label>
                </Row>
            </Col>
        </Row>

    )
}