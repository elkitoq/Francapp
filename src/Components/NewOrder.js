import { Row, Col, Form, Input, Button } from 'reactstrap'
import { FormLabel } from './FormLabel.js'
import LocalBase from 'localbase'
import Swal from 'sweetalert2'
import withReactContent from 'sweetalert2-react-content'
import moment from 'moment'

export const NewOrder = () => {

    let db = new LocalBase('db')
    const MySwal = withReactContent(Swal)

    async function addWorkOrder() {
        if (document.getElementById('nombre').value.length !== 0) {
            if (document.getElementById('email').value.length !== 0 && document.getElementById('email').value.includes('@') && document.getElementById('email').value.includes('.com')) {
                if (document.getElementById('numberCel').value.length !== 0) {
                    if (document.getElementById('equipo').value.length !== 0) {
                        if (document.getElementById('problema').value.length !== 0) {

                            await addWorkOrdertoDb();

                            MySwal.fire(
                                {
                                    icon: 'success',
                                    title: 'Good job!',
                                    text: 'Tarea creada corectamente!',
                                    showConfirmButton: true,
                                    timer: 5000
                                }
                            )

                        }
                    }
                }
            }
        } else {
            MySwal.fire(
                {
                    icon: 'error',
                    title: 'Algo salio mal!',
                    text: 'Verifique que todos los campos esten completos correctamente!',
                    showConfirmButton: true,
                    timer: 5000
                }
            )
        }

    }

    async function addWorkOrdertoDb() {
        let id = makeid();
        let checkid = await checkById(id);
        while (checkid === true) {
            id = makeid();
            checkid = await checkById(id)
        }
        await db.collection('workorder').add({
            id: id,
            name: document.getElementById('nombre').value,
            email: document.getElementById('email').value,
            numberCel: document.getElementById('numberCel').value,
            equipo: document.getElementById('equipo').value,
            date: moment().format('LL'),
            problemaEquipo: document.getElementById('problema').value,
            state: 1
        })
    }

    function makeid() {
        let length = 5
        var result = [];
        var characters = 'abcdefghijklmnopqrstuvwxyz0123456789';
        var charactersLength = characters.length;
        for (var i = 0; i < length; i++) {
            result.push(characters.charAt(Math.floor(Math.random() *
                charactersLength)));
        }
        return result.join('');
    }

    async function checkById(id) {
        let result = await db.collection('workorder').doc({ id: id }).get()

        if (typeof (result) === 'object') {
            return true
        }
        else {
            return false
        }
    }

    return (
        <Row className="content-newOrder">
            <Col className="band-yellow" sm="2"></Col>
            <Col className="labels-newOrder" sm="4">
                <Form className="form-labels">
                    <FormLabel nombre="Nombre y Apellido" />
                    <FormLabel nombre="Email" />
                    <FormLabel nombre="Numero de Telefono" />
                    <FormLabel nombre="Equipo" />
                    <FormLabel nombre="Problema de equipo" />
                </Form>
            </Col>
            <Col className="content-input-newOrder" sm="5">
                <Form className="form-input">
                    <Input type="text" name="name-apellido" id="nombre" />
                    <Input type="email" name="email" id="email" />
                    <Input type="text" name="number-cel" id="numberCel" />
                    <Input type="text" name="equipo" id="equipo" />
                    <Input type="textarea" name="problema" id="problema" />
                    <Button className="btn-cancelar" >Cancelar</Button>
                    <Button className="btn-crear" onClick={addWorkOrder}>Crear</Button>
                </Form>
            </Col>
        </Row>
    )
}
