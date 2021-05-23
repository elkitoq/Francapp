import { Input, InputGroup, Button, Row, Col } from 'reactstrap'
import { useState } from 'react'
import { searchDocument } from '../Service/ServiceLocalBase.js'
import 'bootstrap/dist/css/bootstrap.min.css';
import '../assets/css/content.css'
import lupa from '../assets/icons/icon-search.png'

export const Navbar = () => {

    const [search, setSearch] = useState('')

    const handleInputChange = (event) => {
        setSearch(event.target.value)
    }

    const submitSearchDoc = async (event) => {
        event.preventDefault()
        let docSearch = await searchDocument(search)
        console.log(docSearch)
    }

    return (
        <Row className="row-search">
            <Col sm={{ size: 6, order: 2, offset: 1 }}>
                <InputGroup className="search-group" size="lg">
                    <Input className="input-search" placeholder="Buscar por ID" onChange={handleInputChange} />
                    <Button color="success" className="button-search" color="light" onClick={submitSearchDoc}><img src={lupa} alt="search" width="20px" height="20px" /></Button>
                </InputGroup>
            </Col>
        </Row>
    )

}