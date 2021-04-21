import React, { useEffect, useState } from 'react'
import { Row, Col, Button, ButtonGroup, Label, List } from 'reactstrap'
import { CardWorks } from './CardWorks.js'
import '../assets/css/card-text.css'
import LocalBase from 'localbase'

let db = new LocalBase('db')

export const Workorders = () => {

    const [works, setWorks] = useState([])
    const [state, setEstate] = useState(1)

    useEffect(() => {
        db.collection('workorder').orderBy('date').limit(7).get().then(work => {
            setWorks(work.filter(work => work === state))
        })
    }, [])

    return (

        <Row className="content-workorder">
            <Col xs="8" className="col-content-card">
                <Row className="row-nav">
                    <ButtonGroup size="lg">
                        <Button onClick={setEstate(1)} >En Espera</Button>
                        <Button onClick={setEstate(2)}>Terminados</Button>
                        <Button onClick={setEstate(3)}>Entregados</Button>
                    </ButtonGroup>
                </Row>

                <Col xs="11" id="no-scroll1" style={{ maxHeight: '70%', overflowY: 'auto', overflowX: 'hidden' }}>
                    <List clasName="list-card" >
                        {works.map(datos => <CardWorks key={datos.id} props={datos} />)}
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