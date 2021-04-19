import React, { useEffect, useState } from 'react'
import { Row, Col, NavLink, Label, List } from 'reactstrap'
import { CardWorks } from './CardWorks.js'
import '../assets/css/card-text.css'
import LocalBase from 'localbase'


let db = new LocalBase('db')

function GetWorks() {
    const [state, setState] = useState(1)
    const [works, setWorks] = useState([])

    useEffect(() => {
        db.collection('workorder').orderBy('date').limit(7).get().then(work => {
            setWorks(work.filter(work => work.state === state))
        })
    }, [])
    return works
}

export const Workorders = () => {

    const workList = GetWorks();

    return (

        <Row className="content-workorder">
            <Col xs="8" className="col-content-card">
                <Row className="row-nav">
                    <NavLink clasName="link" href="#">Terminados</NavLink>
                    <NavLink clasName="link" href="#">En espera</NavLink>
                    <NavLink clasName="link" href="#">Entregados</NavLink>
                </Row>

                <Col xs="11" id="no-scroll1" style={{ maxHeight: '70%', overflowY: 'auto', overflowX: 'hidden' }}>
                    <List clasName="list-card" >
                        {workList.map(datos => <CardWorks key={datos.id} props={datos} />)}
                    </List>
                </Col>

            </Col >
            <Col xs="4">
                <Row>
                    <Label>Sumario</Label>
                </Row>
            </Col>
        </Row>

    )
}