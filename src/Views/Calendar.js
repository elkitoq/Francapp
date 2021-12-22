import { Col, Container, Row } from 'reactstrap'
import 'bootstrap/dist/css/bootstrap.min.css';
import { Calendario } from '../Components/CalendarView';

export const Calendar = () => {
    return (
        <Container>
            <Row>
                <Col xs="12">
                    <Calendario />
                </Col>
            </Row>
        </Container>
    )
}