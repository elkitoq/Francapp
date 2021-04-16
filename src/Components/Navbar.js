import { Input, InputGroup, Button, Row, Col } from 'reactstrap'
import 'bootstrap/dist/css/bootstrap.min.css';
import '../assets/css/content.css'
import lupa from '../assets/icons/icon-search.png'

export const Navbar = () => {
    return (
        <Row className="row-search">
            <Col sm={{ size: 6, order: 2, offset: 1 }}>
                <InputGroup className="search-group" size="lg">
                    <Input className="input-search" placeholder="Buscar" />
                    <Button className="button-search" color="light" ><img src={lupa} alt="search" width="20px" height="20px" /></Button>
                </InputGroup>
            </Col>
        </Row>
    )

}