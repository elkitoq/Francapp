import React, { useEffect, useState } from 'react'
import { Row, Col, Button, ButtonGroup } from 'reactstrap'
import { TableWork } from '../Components/TableWork.js'
import { getListWorks } from '../Service/ServiceLocalBase.js'
import '../assets/css/card-text.css'


export const Workorders = () => {

    const [works, setWorks] = useState([])
    const [state, setEstate] = useState('1')

    useEffect(() => {

        async function getListWorks1() {
            let list = await getListWorks(state)
            setWorks(list)
        }

        getListWorks1()

    }, [state])

    // let header = document.getElementById("btnGroup");
    // let btns = header.getElementsByClassName("buttonTable");

    // for (let i = 0; i < btns.length; i++) {
    //     btns[i].addEventListener("click", function () {
    //         var current = document.getElementsByClassName("active");
    //         current[0].className = current[0].className.replace(" active", "");
    //         this.className += " active";
    //     });
    // }

    return (
        <Row className="content-workorder">
            <Col xs="12" className="col-content">
                <Row className="row-nav">
                    <ButtonGroup id="btnGroup" className="buttonGroup" size="xl">
                        <Button className="buttonTable" onClick={(e) => setEstate('1')}>En Espera</Button>
                        <Button className="buttonTable" onClick={(e) => setEstate('2')}>En Progreso</Button>
                        <Button className="buttonTable" onClick={(e) => setEstate('3')}>Terminados</Button>
                        <Button className="buttonTable" onClick={(e) => setEstate('4')}>Entregados</Button>
                    </ButtonGroup>
                </Row>

                <Col xs="12" className="col-list" id="no-scroll1" style={{ maxHeight: '70%', overflowY: 'auto', overflowX: 'hidden' }} >
                    <TableWork works={works} />
                </Col>
            </Col >
        </Row>
    )
}