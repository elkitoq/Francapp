
import React, { useState } from 'react';
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';

export const ModalSearch = (props) => {

    const [modal, setModal] = useState(false);

    const toggle = () => setModal(!modal);

    return (
        <div>

            <Modal isOpen={modal} toggle={toggle}>
                <ModalHeader toggle={toggle}>Modal title</ModalHeader>
                <ModalBody>
                    {props.name}
                </ModalBody>
                <ModalFooter>
                    <Button color="primary" onClick={toggle}>Do Something</Button>{' '}
                    <Button color="secondary" onClick={toggle}>Cancel</Button>
                </ModalFooter>
            </Modal>
        </div>
    );
}
