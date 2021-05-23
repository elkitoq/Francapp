import React, { useEffect, useState } from 'react'
import { Row, Col, Button, ButtonGroup } from 'reactstrap'
import { TableWork } from '../Components/TableWork.js'
import { getListWorks } from '../Service/ServiceLocalBase.js'
import '../assets/css/card-text.css'


export const Workorders = () => {

    const [works, setWorks] = useState([])
    const [state, setEstate] = useState(1)

    useEffect(async () => {

        let list = await getListWorks(state)

        setWorks(list)


    }, [state])

    return (

        <Row className="content-workorder">
            <Col xs="12" className="col-content">
                <Row className="row-nav">
                    <ButtonGroup className="buttonGroup" size="md">
                        <Button className="buttonTable" onClick={(e) => setEstate(1)} >En Espera</Button>
                        <Button className="buttonTable" onClick={(e) => setEstate(2)}>Terminados</Button>
                        <Button className="buttonTable" onClick={(e) => setEstate(3)}>Entregados</Button>
                    </ButtonGroup>
                </Row>

                <Col xs="12" className="col-list" id="no-scroll1" style={{ maxHeight: '70%', overflowY: 'auto', overflowX: 'hidden' }} >
                    <TableWork works={works} />
                </Col>

            </Col >

        </Row>

    )
}