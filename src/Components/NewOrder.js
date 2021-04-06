import { Row, Col, Form, Input, Button } from 'reactstrap'
import { FormLabel } from './FormLabel.js'

export const NewOrder = () => {
    return (
        <Row className="content-newOrder">
            <Col className="band-yellow" sm="1"></Col>
            <Col className="labels-newOrder" sm="4">
                <Form className="form-labels">
                    <FormLabel nombre="Nombre y Apellido" />
                    <FormLabel nombre="Email" />
                    <FormLabel nombre="Numero de Telefono" />
                    <FormLabel nombre="Equipo" />
                    <FormLabel nombre="Problema de equipo" />
                </Form>
            </Col>
            <Col className="content-input-newOrder" sm="4">
                <Form className="form-input">
                    <Input type="text" name="name-apellido" id="name-apellido" />
                    <Input type="email" name="email" id="email" />
                    <Input type="text" name="number-cel" id="number-cel" />
                    <Input type="text" name="equipo" id="equipo" />
                    <Input type="textarea" name="problema" id="problema" />
                    <Button className="btn-cancelar">Cancelar</Button>
                    <Button className="btn-crear">Crear</Button>
                </Form>
            </Col>
        </Row>
    )
}