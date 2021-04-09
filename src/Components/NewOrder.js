import { Row, Col, Form, Input, Button } from 'reactstrap'
import { FormLabel } from './FormLabel.js'
import Swal from 'sweetalert2'
import withReactContent from 'sweetalert2-react-content'



export const NewOrder = () => {

    const MySwal = withReactContent(Swal)

    const guardardatos = ()=>{

       const nombre = document.getElementById('nombre').value;
       const email = document.getElementById('email').value;
       const numberCel = document.getElementById('numberCel').value;
       const problemaEquipo = document.getElementById('problema').value;

        const newWork = {
            nombre: '',
            email: '',
            numeroTelefono: '',
            problemaEquipo: ''
        }

        if(nombre.length !== 0){
            if(email.length !==0 ){
                if(numberCel.length !== 0){
                    if(problemaEquipo.length !== 0){
                        newWork.nombre = nombre;
                        newWork.email = email;
                        newWork.numeroTelefono = numberCel;
                        newWork.problemaEquipo = problemaEquipo;

                        MySwal.fire({
                            title: <p>Hello World</p>,
                            footer: 'Copyright 2018',
                            didOpen: () => {
                              // `MySwal` is a subclass of `Swal`
                              //   with all the same instance & static methods
                              MySwal.clickConfirm()
                            }
                          }).then(() => {
                            return MySwal.fire(<p>Tarea Guardada con exito</p>)
                          })
                        console.log(newWork)
                        
                    }
                }
            }
            
        }else{
            MySwal.fire({
                title: <p>Hello World</p>,
                footer: 'Copyright 2018',
                didOpen: () => {
                  // `MySwal` is a subclass of `Swal`
                  //   with all the same instance & static methods
                  MySwal.clickConfirm()
                }
              }).then(() => {
                return MySwal.fire(<p>Complete todos los campos correctamente antes de proseguir!</p>)
              })
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
                    <Button className="btn-crear" onClick={guardardatos}>Crear</Button>
                    
                </Form>
            </Col>
        </Row>
    )
}