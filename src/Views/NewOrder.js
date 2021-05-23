import { Row, Col, Form, Input, Button } from 'reactstrap'
import { FormLabel } from '../Components/FormLabel.js'
import Swal from 'sweetalert2'
import withReactContent from 'sweetalert2-react-content'
import { addWorkOrdertoDb } from '../Service/ServiceLocalBase.js'


export const NewOrder = () => {

    const MySwal = withReactContent(Swal)

    async function addWorkOrder() {

        if (document.getElementById('nombre').value.length !== 0) {

            if (document.getElementById('email').value.length !== 0 && document.getElementById('email').value.includes('@') && document.getElementById('email').value.includes('.com')) {

                if (document.getElementById('numberCel').value.length !== 0) {

                    if (document.getElementById('equipo').value.length !== 0) {

                        if (document.getElementById('problema').value.length !== 0) {
                            if (document.getElementById('fechaEntrega').value.length !== 0) {

                                const newWork = getDates();
                                await addWorkOrdertoDb(newWork);
                                clearImputs();
                                //create a modal success
                                MySwal.fire(
                                    {
                                        icon: 'success',
                                        title: 'Good job!',
                                        text: 'Tarea creada corectamente! ',
                                        showConfirmButton: true,
                                        timer: 5000
                                    }
                                )
                            }
                        }
                    }
                }
            }
        } else {
            //create a modal error
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

    //get DOM data
    const getDates = () => {
        let newWork = {
            name: document.getElementById('nombre').value,
            email: document.getElementById('email').value,
            numberCel: document.getElementById('numberCel').value,
            equipo: document.getElementById('equipo').value,
            problemaEquipo: document.getElementById('problema').value,
            fechaEntrega: document.getElementById('fechaEntrega').value
        }
        return newWork
    }

    //delete data in inputs
    function clearImputs() {
        document.getElementsByClassName("imputs-newOrder")[0].value = ""
        document.getElementsByClassName("imputs-newOrder")[1].value = ""
        document.getElementsByClassName("imputs-newOrder")[2].value = ""
        document.getElementsByClassName("imputs-newOrder")[3].value = ""
        document.getElementsByClassName("imputs-newOrder")[4].value = ""
        document.getElementsByClassName("imputs-newOrder")[5].value = ""
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
                    <FormLabel nombre="Fecha de entrega" />
                    <FormLabel nombre="Problema de equipo" />
                </Form>
            </Col>
            <Col className="content-input-newOrder" sm="5">
                <Form className="form-input">
                    <Input className="imputs-newOrder" type="text" name="name-apellido" id="nombre" />
                    <Input className="imputs-newOrder" type="email" name="email" id="email" />
                    <Input className="imputs-newOrder" type="text" name="number-cel" id="numberCel" />
                    <Input className="imputs-newOrder" type="text" name="equipo" id="equipo" />
                    <Input className="imputs-newOrder" type="date" name="fechaEntrega" id="fechaEntrega" />
                    <Input className="imputs-newOrder" type="textarea" name="problema" id="problema" />
                    <Button className="btn-cancelar" onClick={clearImputs}>Cancelar</Button>
                    <Button className="btn-crear" onClick={addWorkOrder}>Crear</Button>
                </Form>
            </Col>
        </Row>
    )
}
