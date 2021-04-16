import React from 'react'
import { BrowserRouter as Router, Route } from 'react-router-dom'
import 'bootstrap/dist/css/bootstrap.min.css';
import { Sidebar } from './Components/Sidebar.js'
import { Navbar } from './Components/Navbar.js'
import { NewOrder } from './Components/NewOrder.js'
import { Workorders } from './Components/Workorders.js'
import { Calendar } from './Components/Calendar.js'
import { Options } from './Components/Options'
import './App.css';
import { Container, Row, Col } from 'reactstrap';


function App() {
  return (
    <Router>
      <Container className="themed-container" fluid={true} >
        <Row>
          <Sidebar />
          <Col>
            <Navbar />
            <Route path="/" exact="true" component={NewOrder} />
            <Route path="/Workorders" exact="true" component={Workorders} />
            <Route path="/Calendar" exact="true" component={Calendar} />
            <Route path="/Options" exact="true" component={Options} />
          </Col>
        </Row>
      </Container>

    </Router>
  );
}

export default App;

